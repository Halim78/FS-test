import React, { useState } from "react";
import uploadFile from "../api/uploadCsv";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import "../css/home.css";

const HomePage = () => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setFileName(file.name);
      setFile(file);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Aucun fichier sélectionné.");
      return;
    }

    setUploading(true);
    setError(null);

    try {
      const blob = await uploadFile(file);
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "result.zip");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Une erreur inconnue s'est produite.");
      }
    } finally {
      setUploading(false);
    }
  };

  const errorMessage = error && <div className="error-message">{error}</div>;

  return (
    <div className="container">
      <h1>Uploader votre fichier CSV</h1>
      <Input
        fileName={fileName}
        onFileChange={handleFileChange}
        uploading={uploading}
      />

      {uploading && (
        <div className="progress-container">
          <div className="loader"></div>
        </div>
      )}

      <Button
        title="Uploader"
        fileName={fileName}
        disabled={!fileName || uploading}
        uploading={uploading}
        onUpload={handleUpload}
        className="upload-button"
      />

      {errorMessage}
    </div>
  );
};

export default HomePage;
