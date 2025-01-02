const express = require("express");
const uploadController = require("../controllers/uploadController");
const multer = require("multer");
const path = require("path");

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/uploads/");
  },
  filename: function (req, file, cb) {
    const timestamp = Date.now();
    const uniqueName = `${file.originalname}-${timestamp}`;
    cb(null, uniqueName); // Passer le nom final du fichier au callback
  },
});

const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  const mime = file.mimetype;

  if (ext === ".csv" && mime === "text/csv") {
    cb(null, true);
  } else {
    cb(new Error("Seuls les fichiers CSV sont autorisés."), false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

router.post("/upload", upload.single("file"), uploadController.uploadCsvFile);

module.exports = router;
