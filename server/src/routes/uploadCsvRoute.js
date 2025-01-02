const express = require("express");
const uploadController = require("../controllers/uploadController");
const multer = require("multer");
const path = require("path");

const router = express.Router();

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
