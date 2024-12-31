const express = require("express");
const cors = require("cors");
const app = express();
const uploadCsvRoute = require("./src/routes/uploadCsvRoute");

//Autorisation pour les requêtes de l'application client
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use("/api", uploadCsvRoute);

app.listen(5000, () => {
  console.log("Serveur démarré sur http://localhost:5000");
});
