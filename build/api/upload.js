// apk
const fs = require('fs-extra');
const path = require('path');
// const promise = require('bluebird');

// local
// const uploadFile = require('../utils/qiniu.js');
const { getType } = require('./mimes.js');

const Upload = async (ctx, next) => {
  // if (ctx.method !== 'POST') return await next();
  let { file } = ctx.request.body.files;
  console.log(ctx.request.body);
  if (!file.length) {
    file = [file];
  }
  ctx.body = await Promise.all(file.map(async (image) => {
    const ext = getType(image.type);
    const name = `${Math.random().toString().replace(/0./, '')}.${ext}`;
    const newpath = path.resolve(`./public/${name}`);
    const topath = fs.createWriteStream(newpath);
    const stream = await fs.createReadStream(image.path).pipe(topath);
    const result = await new Promise((resolve) => {
      stream.on('finish', async () => {
        resolve({
          name,
          url: `http://localhost:9090/public/${name}`,
        });
      });
    });
    return result;
  }));
};

module.exports = Upload;
