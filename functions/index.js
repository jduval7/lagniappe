const functions = require("firebase-functions");
const projectId = 'lagniappe-jd';
const keyFilename = "lagniappe-jd-firebase-adminsdk-jqee0-6dff7777cd.json";
const os = require('os');
const path = require('path');
const spawn = require('child-process-promise').spawn;

const cors = require('cors')({origin: true});
const Busboy = require('busboy');
const fs = require('fs');
// const gcconfig = {
//     projectId: "lagniappe-jd",
//     keyFilename: "lagniappe-jd-firebase-adminsdk-jqee0-6dff7777cd.json"
// }

const { Storage } = require('@google-cloud/storage');
let gcs = new Storage({
    projectId: 'lagniappe-jd',
    keyFilename: "lagniappe-jd-firebase-adminsdk-jqee0-6dff7777cd.json"
})


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.onFileChange = functions.storage.object().onFinalize(event => {
//     //const object = event.data;
//     const bucket = event.bucket;
//     const contentType = event.contentType;
//     const filePath = event.name;
//     console.log('File change detected, function execution started');

//     // if (tempFilePath.resourceState == 'not_exists') {
//     //     console.log('We deleted a file, exit..');
//     //     return;
//     // }

//     if (path.basename(filePath).startsWith('resized-')) {
//         console.log('We already renamed that file!');
//         return;
//     }

//     const destBucket = gcs.bucket(bucket);
//     const tempFilePath = path.join(os.tmpdir(), path.basename(filePath));
//     const metadata = { contentType: contentType };

//     return destBucket.file(filePath).download({
//         destination: tempFilePath
//     }).then(() => {
//         return spawn('convert', [tempFilePath, '-resize', '500x500', tempFilePath]);

//     }).then(() => {
//         return destBucket.upload(tempFilePath, {
//             destination: 'resized-' + path.basename(filePath),
//             metadata: metadata
//         })
//     });
// });

exports.uploadFile = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        if (req.method !== 'POST') {
            return res.status(500).json({
                message: 'Not allowed'
            });
        }
        const busboy = new Busboy({headers: req.headers});
        let uploadData = null;

        busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
            const filepath = path.join(os.tmpdir(), filename);
            uploadData = {file: filepath, type: mimetype};
            file.pipe(fs.createWriteStream(filepath));
        });

        busboy.on('finish', () => {
            const bucket = gcs.bucket('lagniappe-jd.appspot.com');
            bucket.upload(uploadData.file, {
                uploadType: 'media',
                metadata: {
                    metadata: {
                        contentType: uploadData.type
                    }
                }
            }).then(() => {
                res.status(500).json({
                    message: 'It worked!'
                });
            })
            .catch(err => {
                    res.status(500).json({
                        error: err
                    });
            });
        });
        busboy.end(req.rawBody);
    });
});