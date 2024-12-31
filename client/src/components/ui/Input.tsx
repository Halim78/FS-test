type InputType = {
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  uploading: boolean;
  fileName: string | null;
};

export const Input = ({ onFileChange, uploading, fileName }: InputType) => {
  return (
    <div className="file-input-container">
      <label htmlFor="file-upload" className="file-input-label">
        <span className="file-input-icon">📄</span>
        {fileName || "Sélectionnez un fichier"}
      </label>
      <input
        id="file-upload"
        type="file"
        name="file"
        accept=".csv"
        onChange={onFileChange}
        className="hidden-file-input"
        disabled={uploading}
      />
    </div>
  );
};
