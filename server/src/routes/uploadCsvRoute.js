const express = require("express");
const uploadController = require("../controllers/uploadController");
const multer = require("multer");
const path = require("path");

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

// Vérification de l'extension du fichier (ici uniquement .csv)
const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  const mime = file.mimetype;

  // Accepter uniquement les fichiers CSV
  if (ext === ".csv" && mime === "text/csv") {
    cb(null, true);
  } else {
    cb(new Error("Seuls les fichiers CSV sont autorisés."), false);
  }
};

// Initialiser multer avec la configuration de stockage
const upload = multer({ storage: storage, fileFilter: fileFilter });

router.post("/upload", upload.single("file"), uploadController.uploadCsvFile);

module.exports = router;
