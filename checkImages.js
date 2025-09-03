import fs from "fs";
import path from "path";

const imgFolder = "./assets";
const output = "./images.json";

// Array of available portraits
const portraits = [];

fs.readdir(imgFolder, (err, files) => {
  if (err) {
    console.log("Error reading the folder:", err);
    return;
  }

  files.forEach((file) => {
    console.log(file);
    const extension = path.extname(file).toLowerCase();
    if ([".jpg", ".jpeg", ".png", ".gif", ".webp"].includes(extension)) {
      portraits.push(path.join(imgFolder, file));
    }
  });

  fs.writeFile(output, JSON.stringify(portraits, null, 2), (err) => {
    if (err) console.log(err);
    console.log("images written to images.json");
  });
});
