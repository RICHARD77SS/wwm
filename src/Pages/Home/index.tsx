import React, { ChangeEvent } from 'react';
import Main from "../Main";
import SiteModels from "../SiteModels";
import ImageUpload from "../uploadArea";
import { Homes, InputUpload } from "./styles";
import LoginPage from './../LoginPage/index';

const Home = () => {

  return (
    <Homes>
      <Main></Main>
      <SiteModels></SiteModels>
      <LoginPage />
      
    </Homes>
  )
}

export default Home