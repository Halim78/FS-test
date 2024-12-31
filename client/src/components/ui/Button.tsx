type ButtonType = {
  title: string;
  fileName: string | null;
  uploading: boolean;
  disabled?: boolean;
  onUpload: () => void;
  className?: string;
};

export const Button = ({
  title,
  fileName,
  uploading,
  onUpload,
  className,
}: ButtonType) => {
  return (
    <button
      className={className}
      disabled={!fileName || uploading}
      onClick={onUpload}
    >
      {title}
    </button>
  );
};
