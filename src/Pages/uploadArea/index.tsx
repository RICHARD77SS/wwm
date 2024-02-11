import { storage } from "../../Utils/firebaseConfig";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import React, { useState } from "react";

interface props {
  locationName?: string;
}

const UplodArea: React.FC<props> = ({ locationName }) => {

  const [imgURL, setImgURL] = useState("");
  const [progressPorcent, setPorgessPorcent] = useState(0);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const file = event.target[0]?.files[0];
    if (!file) return;

    const storageRef = ref(storage, `${locationName}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setPorgessPorcent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgURL(downloadURL);
        });
      }
    );
  };
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <input title='a' type="file" />
          <button>Enviar</button>
        </form>
        {!imgURL && <p>{progressPorcent}%</p>}
        {imgURL && <img src={imgURL} alt="Imagem" height={200} />}
      </header>
    </div>
  );
}

export default UplodArea