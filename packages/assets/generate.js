const fs = require("fs-extra")
const path = require('path');

const recursiveFolderCheck = (path) => {
    console.log(`Checking path ${path}`)

    fs.readdir(path, (err, locatedPaths) => {
        if (err) console.error(err)

        else {
            console.log(`Located paths: ${locatedPaths}`)

            locatedPaths.forEach(file => {
                fs.stat(file, (err, stats) => {
                    if (err) console.error(err)
                    else {
                        if (stats.isFile()) {
                            console.log(`File located: ${file}`)
                            filesToCopy.push(file)
                        }
                        else if (stats.isDirectory()) {
                            console.log(`Directory located: ${file}`)
                            recursiveFolderCheck(file)
                        }
                    }
                })
            })
        }            
    })
}

const assets = (orgId, destinationDirectory) => {
    console.log(`Copying assets for ${orgId} to ${destinationDirectory}`)

    const vaildOrgIds = ["atb", "nfk"];

    if (!vaildOrgIds.includes(orgId)) {
        console.error("Invalid orgId provided, valid orgIds are:", vaildOrgIds);
        process.exit(1);
    }

    const commonFolder = path.join(__dirname, 'src', 'common')
    const orgFolder = path.join(__dirname, 'src', orgId)

    const filesToCopy = [];

    recursiveFolderCheck(commonFolder);
    recursiveFolderCheck(orgFolder);

    console.log("Files to be copied", filesToCopy)

    filesToCopy.forEach(path => {
        fs.copy(path, destinationDirectory, err => {
            if (err) console.error(err)
            else console.log(`${path} successfully copied to ${destinationDirectory}`)
        })
    })

    console.log("generate-assets complete!")
    process.exit(0);
}

module.exports = assets;