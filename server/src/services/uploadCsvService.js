const fs = require("fs");
const path = require("path");
const AdmZip = require("adm-zip");

module.exports.zipFileSortedByGenre = async (file) => {
  const arrayToCSV = (header, array) => {
    const csvRows = [];
    csvRows.push(header.join(","));

    array.forEach((row) => {
      csvRows.push(row);
    });

    return csvRows.join("\n");
  };
  const filePath = file.path;
  const fileName = file.originalname;

  const data = fs.readFileSync(filePath, "utf8");

  const folderName = `${fileName}-${Date.now()}`;
  const folderPath = path.join(__dirname, "../uploads", folderName);

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }

  const originalFilePath = path.join(
    folderPath,
    `${fileName}-${Date.now()}.csv`
  );
  fs.renameSync(filePath, originalFilePath);

  const lines = data.split("\n");
  const header = lines[0].split(",");
  const dataWithoutHeader = lines.slice(1);

  const maleData = [];
  const femaleData = [];

  dataWithoutHeader.forEach((line) => {
    const splitedLine = line.split(",");
    if (splitedLine[3] === "male") {
      maleData.push(splitedLine.join(","));
    } else {
      femaleData.push(splitedLine.join(","));
    }
  });

  const maleCSV = arrayToCSV(header, maleData);
  const femaleCSV = arrayToCSV(header, femaleData);

  const maleFilePath = path.join(folderPath, "male.csv");
  const femaleFilePath = path.join(folderPath, "female.csv");

  fs.writeFileSync(maleFilePath, maleCSV);
  fs.writeFileSync(femaleFilePath, femaleCSV);

  const zip = new AdmZip();
  zip.addLocalFile(maleFilePath);
  zip.addLocalFile(femaleFilePath);

  const zipBuffer = zip.toBuffer();

  return { zipBuffer, folderName };
};
