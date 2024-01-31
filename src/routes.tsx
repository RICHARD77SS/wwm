
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";

import FachadaACM from "./Pages/FachadaACM";
import Navbar from "./Components/Navbar";
import Coberturas from "./Pages/Coberturas";
import FachadaLona from "./Pages/FachadaLona";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<><Navbar></Navbar><Home></Home></>} />

      <Route path='FachadaACM' element={<><Navbar></Navbar><FachadaACM></FachadaACM></>} />
      <Route path='FachadaLona' element={<><Navbar></Navbar><FachadaLona></FachadaLona></>} />
      <Route path='Coberturas' element={<><Navbar></Navbar><Coberturas></Coberturas></>} />

    </Route>
  ));

export default router;