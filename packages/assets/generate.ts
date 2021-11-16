const fs = require('fs');
const path = require('path');

interface Dirent {
  name: string;
  isDirectory: () => boolean;
}

const getFiles = async (dir: Dirent) => {
  const dirents = await fs.promises.readdir(dir, {withFileTypes: true});
  console.log(dirents);
  const files = await Promise.all(
    dirents.map((dirent: Dirent) => {
      console.log(dirent);
      const res = path.resolve(dir, dirent.name);
      const result = dirent.isDirectory() ? getFiles(res) : res;
      return result;
    }),
  );

  const superResult = Array.prototype.concat(...files);

  const filesToCopy: Array<String> = [];

  superResult.forEach((file: string) => {
    filesToCopy.push(file);
  });

  // console.log(`Files to copy from ${dir}: ${filesToCopy}`)

  return filesToCopy;
};

const assets = async (orgId: string, destinationDirectory: string) => {
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

  const allFilesToBeCopied = commonFiles.concat(orgFiles);

  console.log(allFilesToBeCopied);

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
