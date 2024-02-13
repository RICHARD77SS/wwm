import React, { useState, useEffect } from 'react';
import 'firebase/storage';
import firebase from 'firebase/compat/app'; // Importe 'compat/app'
import 'firebase/compat/storage'; // Importe 'compat/storage'
import { firebaseConfig } from '../../Utils/firebaseConfig';
import { Container, SliderContainer, SliderImage, ButtonContainer } from './styles';

interface props {
  locationName?: string;
}

const ImageGallery: React.FC<props> = ({ locationName }) => {

  firebase.initializeApp(firebaseConfig)

  const storage = firebase.storage();
  const storageRef = storage.ref(`/${locationName}`);
  const [items, setItems] = useState<{ name: string; url: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const listResult = await storageRef.listAll();
        const images = await Promise.all(
          listResult.items.map(async (item: any) => {
            const url = await item.getDownloadURL();
            return { name: item.name, url };
          })
        );
        setItems(images);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar imagens:', error);
      }
    };

    fetchImages();
  }, [storageRef]);

  // Renderize as imagens
  return (
    <Container>

      {loading ? (
        <p>Carregando...</p>
      ) : (
        <SliderContainer id='slide'>
          <ButtonContainer>
            <button title='button' onClick={() => { document.getElementById('slide')!.scrollLeft -= 450 }}>	&lt;</button>
            <button title='button2' onClick={() => { document.getElementById('slide')!.scrollLeft += 450 }}>&gt;</button>
          </ButtonContainer>
          {items.map((item) => (
            <SliderImage >
              <img
                key={item.name}
                src={item.url}
                alt={item.name}
                style={{ maxWidth: '450px', margin: '10px' }}
              />
            </SliderImage >
          ))}
        </SliderContainer >
      )}
    </Container>
  );
};

export default ImageGallery;