const fs = require("fs");

const dir = process.argv[2];

fs.readdir(dir, (err, files) => {
  files.forEach(file => fs.watchFile(file, {}, () => console.log(`File ${file} changed!`)));
});
