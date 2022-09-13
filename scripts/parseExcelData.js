const path = require("path");
const fs = require("fs");
const readXlsxFile = require("read-excel-file/node");

const RAW_DATA_FILE_PATH = path.resolve(
  __dirname,
  "../data/rawData/tarot-cards.xlsm"
);
const PARSED_DATA_FILE_PATH = path.resolve(
  __dirname,
  "../data/parsedData/cards.json"
);

async function parseExcelData() {
  try {
    // define data mapping to convert content of excel file into object
    const map = {
      Card: "name",
      Filename: "imageName",
      Text: {
        text: {
          Up: "normal",
          Down: "flipped",
        },
      },
    };

    console.log("Importing tarot-cards.xlsm file...");
    const { rows, errors } = await readXlsxFile(RAW_DATA_FILE_PATH, { map });
    if (errors.length) {
      errors.forEach((error) => {
        throw new Error(error);
      });
    }

    // remove card objects that do not have ALL neccessary information
    const filteredRows = rows.filter((row) => {
      const { name, imageName, text } = row;
      const { normal, flipped } = text || {};

      if (name && imageName && normal && flipped) {
        return true;
      }
      return false;
    });

    console.log("Saving parsed data to cards.json file...");
    fs.writeFileSync(
      PARSED_DATA_FILE_PATH,
      JSON.stringify({ cards: filteredRows })
    );
    console.log("Saved!");
  } catch (err) {
    console.error(err);
  }
}

parseExcelData();
