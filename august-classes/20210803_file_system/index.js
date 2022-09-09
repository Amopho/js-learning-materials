// require - import in node.js
const fs = require("fs");
const math = require("./math");
// writeFile will create or overwrite a file
fs.writeFile("./new.txt", "This is file created in NodeJs", (err) => {
  if (err) throw err;
  console.log("Done ✅ ");
});

// appendFile will create a filr
fs.appendFile("newText.txt", "I am a new Text from nodeJs :*\n", (err) => {
  if (err) throw err;
  console.log("File is done, cool!");
});

// read File
fs.readFile("./longText.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// read file sync - blocking code = happens first, the other non-blocking code needs to wait before this one executes
// const data = fs.readFileSync("./longText.txt");
// console.log(data.toString());
// console.log("reading sync Done :D");
const data = fs.readFileSync(
  "./longText.txt",
  { encoding: "utf8", flag: "r" },
  (err) => {
    if (err) throw err;
  }
);
console.log(data, "hiiii");

// rename file
// fs.rename("./hello.txt", "./hey.txt", (err) => {
//   if (err) throw err;
//   console.log("Rename done ;)");
// });

// delete file
// const filePathName = "./something.txt";
// fs.unlink(filePathName, (err) => {
//   if (err) throw err;
//   console.log("File deleted, cool!");
// });

// copy file
fs.copyFile("./original.txt", "./copyFromOrg.txt", (err) => {
  if (err) throw err;
  console.log("Copy file, Done!");
});

// open file
// fs flags
// https://nodejs.org/docs/latest-v12.x/api/fs.html#fs_file_system_flags

fs.open("newText.txt", "w", (err) => {
  if (err) throw err;
  console.log("File is opened, cool!");
});

console.log(math);
let x = 8;
let y = 4;
console.log(`x+y = ${math.sum(x, y)}`);
console.log(`x-y = ${math.sub(x, y)}`);
console.log(`x*y = ${math.multi(x, y)}`);

// some globals
console.log(__dirname);
console.log(__filename);
