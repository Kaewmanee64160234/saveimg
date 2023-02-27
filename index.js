const fs = require("fs");
const path = require("path");
// const imageDownloader = require("node-image-downloader");
const file_ = fs.readFileSync("./menu.json", "utf-8");
const files = JSON.parse(file_);
// console.log(files.listOfMenu)
const download = require('image-downloader');

for (let i = 0; i < files.listOfMenu.length; i++) {
 
  options = {
    url: files.listOfMenu[i].img,
    dest: __dirname+`/output`,
  };
  console.log(files.listOfMenu[i].img);

  download
    .image(options)
    .then(({ filename }) => {
      console.log("Saved to " + filename); // saved to /path/to/dest/photo.jpg
    })
    .catch((err) => console.error(err));
}
