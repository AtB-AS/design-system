import {ThemeVariant} from '@atb-as/theme';
import {constants, promises} from 'fs';
import path from 'path';
import {vaildOrgIds} from '../generate';
import {fgNormalizedForUnix, themeVariantAsString} from '../utils';

validateValidOrgs();

async function fromOrgFiles(org: ThemeVariant) {
  const fullPath = path.join(
    __dirname,
    '..',
    '..',
    'files',
    themeVariantAsString(org),
    '**/*.*',
  );
  const files = await fgNormalizedForUnix(fullPath);
  return {org, files: files.map(cleanFilenames)};
}

async function verifyThatMissingOrgFilesHasCommonReplacements(
  missingOrgFiles: string[],
) {
  let filesMissingFromBothOrgAndCommonFolder = <string[]>[];

  for (const missingOrgFile of missingOrgFiles) {
    const fullPath = path.join(
      __dirname,
      '..',
      '..',
      'files',
      'common',
      missingOrgFile,
    );
    const commonFileExistsForMissingOrgFile = await promises
      .access(fullPath, constants.F_OK)
      .then(() => true)
      .catch(() => false);

    if (!commonFileExistsForMissingOrgFile) {
      filesMissingFromBothOrgAndCommonFolder.push(fullPath);
    }
  }

  return filesMissingFromBothOrgAndCommonFolder;
}

async function validateValidOrgs() {
  const expectedFiles = await fromOrgFiles(ThemeVariant.AtB);
  const extraOrgs = await Promise.all(
    vaildOrgIds.filter((i) => i != ThemeVariant.AtB).map(fromOrgFiles),
  );

  let hasErrors = false;

  for (let orgAssets of extraOrgs) {
    const diff = difference(expectedFiles.files, orgAssets.files);

    if (diff.length > 0) {
      console.warn(
        `${themeVariantAsString(
          orgAssets.org,
        )} seems to be missing some assets, checking if common files can be used for these files:\n${diff.join(
          '\n',
        )}`,
      );
      const filesMissingBothInOrgAndCommon =
        await verifyThatMissingOrgFilesHasCommonReplacements(diff);

      if (filesMissingBothInOrgAndCommon.length) {
        hasErrors = true;
        console.error(
          `
                ${themeVariantAsString(
                  orgAssets.org,
                )} is missing some assets, that also does not have a common file:
                ${filesMissingBothInOrgAndCommon.join('\n')}
              `,
        );
      }
    }
  }

  if (hasErrors) {
    process.exit(1);
  }
}

function cleanFilenames(filename: string) {
  return filename.split(/\/files\/(.*?)\//)[2];
}

function difference(correct: string[], potential: string[]) {
  return correct.filter((x) => !potential.includes(x));
}
