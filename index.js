import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
    message: "Type in your URL: ",
    name: "URL"
    }
  ])
  .then((answers) => {
       const URL = answers.URL;
       var qr_svg = qr.image(URL);
       qr_svg.pipe(fs.createWriteStream("qr_img.png"));

       fs.writeFile("URL.txt", URL, (err) => {
         if (err) throw err;
         console.log("The file has been saved");
       });
  })
  .catch((error) => {
    if (error.isTtyError) {

    } else {
      // Something else went wrong
    }
  });

