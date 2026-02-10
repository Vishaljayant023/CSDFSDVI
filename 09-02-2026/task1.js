const fs = require("fs");

const filename = "example.txt";

fs.writeFile(filename, "Hello, this is the first line.\n", (err) => {
  if (err) throw err;
  console.log("File created & written successfully!");

  fs.appendFile(filename, "This line is appended.\n", (err) => {
    if (err) throw err;
    console.log("Data appended successfully!");

    fs.readFile(filename, "utf8", (err, data) => {
      if (err) throw err;
      console.log("\nFile Content:\n", data);

      fs.unlink(filename, (err) => {
        if (err) throw err;
        console.log("\nFile deleted successfully!");
      });
    });
  });
});
