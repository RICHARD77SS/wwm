import { UploadArea } from './styles';
import React, { useState, ChangeEvent, useEffect, useRef } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';


interface ImageUploadProps {
  onFileChange: (files: FileList | null) => void;
  onUploadSuccess: () => void;
  locationName?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onFileChange, onUploadSuccess, locationName }) => {

  const [images, setImages] = useState<FileList | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImages(event.target.files);
    }
  };

  const handleUpload = () => {
    if (!images) {
      console.error('Nenhuma imagem selecionada.');
      return;
    }
    const storage = firebase.storage();
    const storageRef = storage.ref();

    const uploadTasks: firebase.storage.UploadTask[] = [];

    // Itera sobre cada imagem selecionada e inicia o upload
    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      const imageRef = storageRef.child(`${locationName}/${image.name}`);

      const uploadTask = imageRef.put(image);

      // Registra um observador de eventos para monitorar o progresso do upload
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          console.log('Erro ao realizar upload da imagem:', error);
        },
        () => {
          console.log('Upload da imagem concluído com sucesso.');
          onUploadSuccess();
          setImages(null);

          setTimeout(() => {
            setUploadProgress(0);
          }, 1000)
        }
      );

      uploadTasks.push(uploadTask);
    }
  };

  // Limpa o progresso quando as imagens são alteradas
  useEffect(() => {
    setUploadProgress(0);
  }, [images]);


  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <UploadArea>
      <input title='input' type="file" accept="image/*" multiple ref={fileInputRef}
        onChange={handleChange} />
      {
        images !== null && locationName ?
          <button title='upload' onClick={handleUpload}>Enviar  {images?.length}  Imagens</button>
          :
          <button title='select' onClick={handleButtonClick}>Escolher Arquivo</button>
      }
      <div>
        <p>Progresso de Upload: {uploadProgress.toFixed(2)}%</p>
        <progress value={uploadProgress} max={100} />
      </div>
    </UploadArea>
  );
};

export default ImageUpload;