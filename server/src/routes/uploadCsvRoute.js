const express = require("express");
const uploadController = require("../controllers/uploadController");
const multer = require("multer");

const router = express.Router();

// Configurer le dossier de destination pour multer
const storage = multer.diskStorage({
  // où stocker les fichiers
  destination: function (req, file, cb) {
    cb(null, "src/uploads/");
  },
  // nommage des fichiers
  filename: function (req, file, cb) {
    const timestamp = Date.now();
    const uniqueName = `${file.originalname}-${timestamp}`;
    cb(null, uniqueName); // Passer le nom final du fichier au callback
  },
});

// Initialiser multer avec la configuration de stockage
const upload = multer({ storage: storage });

router.post("/upload", upload.single("file"), uploadController.uploadCsvFile);

module.exports = router;
