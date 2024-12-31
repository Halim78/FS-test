const { zipFileSortedByGenre } = require("../services/uploadCsvService");

module.exports.uploadCsvFile = async (req, res) => {
  if (!req.file) {
    return res.status(400).send({ error: "Aucun fichier téléchargé" });
  }

  try {
    const result = await zipFileSortedByGenre(req.file);
    res.set({
      "Content-Type": "application/zip",
      "Content-Disposition": `attachment; filename="${result.folderName}.zip"`,
    });
    res.send(result.zipBuffer);
  } catch (error) {
    res.status(500).send({ error: "Erreur lors du traitement du fichier CSV" });
  }
};
