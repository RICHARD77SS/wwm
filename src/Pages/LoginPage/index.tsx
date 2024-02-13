import React, { useEffect, useState } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { Container, Block, InputUpload } from './styles'
import ImageUpload from "../uploadArea";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState<firebase.User | null>(null);
  const [location, setLocation] = React.useState<string>()
  const handleInputChange = (event: any) => {
    setLocation(event.target.value);
  };
  const handleUploadSuccess = () => {
    // Lógica a ser executada após o sucesso do upload

  };
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser: any) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error: any) {
      console.error('Erro de login:', error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error: any) {
      console.error('Erro de logout:', error.message);
    }
  };

  return (
    <Container>
      <h2>Login</h2>
      {user ? (
        <>
          <Block>
            <h3>Usuário Logado:</h3>
            <br />
            <p> {user.email}</p>
            <button onClick={handleLogout}>Sair da conta</button>
          </Block>
          <label htmlFor="location">Escolha o local</label>
          <input list="locationOptions" id="location" name="location" value={location} onChange={handleInputChange} />

          <datalist id="locationOptions">
            <option value="fachadaacm"></option>
            <option value="fachadalona"></option>
            <option value="cobertura"></option>
            <option value="galpao"></option>
            <option value="letras"></option>
            <option value="camarafria"></option>
            <option value="barracas"></option>
            <option value="toldos"></option>
          </datalist>
          <InputUpload>
            <ImageUpload onFileChange={() => { }} onUploadSuccess={handleUploadSuccess} locationName={location} />
          </InputUpload>
        </>
      ) : (
        <Block>
          <label>Email:</label>
          <input title='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Senha:</label>
          <input title='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleLogin}>Login</button>
        </Block>
      )}
    </Container>
  );
};

export default LoginPage