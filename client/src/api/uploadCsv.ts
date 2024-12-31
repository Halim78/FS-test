const uploadFile = async (file: File): Promise<Blob> => {
  const API_UPLOAD_URL = import.meta.env.VITE_API_UPLOAD_URL + "/api/upload";

  const formData = new FormData();
  formData.append("file", file);

  const requestOptions: RequestInit = {
    method: "POST",
    body: formData,
  };

  try {
    const response = await fetch(API_UPLOAD_URL, requestOptions);
    if (!response.ok) throw new Error("Erreur lors de l'upload.");

    const blob = await response.blob();
    return blob;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error("Une erreur inconnue s'est produite.");
    }
  }
};

export default uploadFile;
