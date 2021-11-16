const fs = require('fs');
const path = require('path');

interface Entry {
  name: string;
  isDirectory: () => boolean;
}

const getFiles = async (entry: Entry) => {
  const originalEntries = await fs.promises.readdir(entry, {
    withFileTypes: true,
  });

  const files = await Promise.all(
    originalEntries.map((foundEntry: Entry) => {
      const res = path.resolve(entry, foundEntry.name);
      const result = foundEntry.isDirectory() ? getFiles(res) : res;
      return result;
    }),
  );

  return Array.prototype.concat(...files);
};

const assets = async (orgId: string, destinationDirectory: string) => {
  console.log(`Copying assets for ${orgId} to ${destinationDirectory}`);

  const vaildOrgIds = ['atb', 'nfk'];

  if (!vaildOrgIds.includes(orgId))
    throw new Error(`Invalid orgId provided, valid orgIds are ${vaildOrgIds}`);

  const commonFolder = path.join(__dirname, 'src', 'common');
  const orgFolder = path.join(__dirname, 'src', orgId);

  const commonFiles = await getFiles(commonFolder);
  const orgFiles = await getFiles(orgFolder);

  const allFilesToBeCopied = commonFiles.concat(orgFiles);

  const allPromises = allFilesToBeCopied.map(async (path) => {
    const splitPath =
      path.split(`/src/${orgId}`)[1] ?? path.split(`/src/common`)[1];
    const destinationPath = destinationDirectory + splitPath;

    await fs.promises.mkdir(
      destinationPath.substring(0, destinationPath.lastIndexOf('/')),
      {recursive: true},
    );

    return new Promise<void>(function (res, rej) {
      fs.copyFile(path, destinationPath, (err: Error) => {
        if (err) rej(err);
        else res();
      });
    });
  });

  return Promise.all(allPromises);
};

export default assets;
