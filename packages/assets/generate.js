const fs = require('fs-extra');
const path = require('path');

const {resolve} = require('path');
const {readdir} = require('fs').promises;

async function getFiles(dir) {
  const dirents = await readdir(dir, {withFileTypes: true});
  const files = await Promise.all(
    dirents.map((dirent) => {
      const res = resolve(dir, dirent.name);
      const result = dirent.isDirectory() ? getFiles(res) : res;
      return result;
    }),
  );

  const superResult = Array.prototype.concat(...files);
  // console.log(`Superresult ${superResult}`);

  const filesToCopy = [];

  superResult.forEach((file) => {
    filesToCopy.push(file);
  });

  // console.log(`Files to copy from ${dir}: ${filesToCopy}`)

  return filesToCopy;
}

const assets = async (orgId, destinationDirectory) => {
  console.log(`Copying assets for ${orgId} to ${destinationDirectory}`);

  const vaildOrgIds = ['atb', 'nfk'];

  if (!vaildOrgIds.includes(orgId)) {
    console.error('Invalid orgId provided, valid orgIds are:', vaildOrgIds);
    process.exit(1);
  }

  const commonFolder = path.join(__dirname, 'src', 'common');
  const orgFolder = path.join(__dirname, 'src', orgId);

  const commonFiles = await getFiles(commonFolder);
  const orgFiles = await getFiles(orgFolder);

  // console.log(`Files to be copied from ${commonFolder}: ${commonFiles}`)
  // console.log(`Files to be copied from ${orgFolder}: ${orgFiles}`)

  const allFilesToBeCopied = commonFiles.concat(orgFiles);

  console.log(allFilesToBeCopied);

  allFilesToBeCopied.forEach(async (path) => {
    const splitPath =
      path.split(`/src/${orgId}`)[1] ?? path.split(`/src/common`)[1];
    const destinationPath = destinationDirectory + splitPath;

    await fs.promises.mkdir(
      destinationPath.substring(0, destinationPath.lastIndexOf('/')),
      {recursive: true},
    );

    fs.copyFile(path, destinationPath, (err) => {
      if (err) console.log(err);
      else console.log(`${path} successfully copied to ${destinationPath}`);
    });
  });

  console.log('generate-assets complete!');
};

module.exports = assets;
