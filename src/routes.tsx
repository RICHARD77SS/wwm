
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
import CamaraFria from "./Pages/CamaraFria";
import Galpao from "./Pages/Galpao";
import Reparos from "./Pages/Reparos";
import Letras3d from "./Pages/Letras3d";
import Barracas from "./Pages/Barracas";
import Footer from "./Components/Footer";
import Toldos from "./Pages/Toldos";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<><Navbar /><Home></Home><Footer /></>} />
      <Route path='FachadaACM' element={<><Navbar /><FachadaACM /><Footer /></>} />
      <Route path='FachadaLona' element={<><Navbar /><FachadaLona /><Footer /></>} />
      <Route path='Coberturas' element={<><Navbar /><Coberturas /><Footer /></>} />
      <Route path='Galpao' element={<><Navbar /><Galpao /><Footer /></>} />
      <Route path='CamaraFria' element={<><Navbar /><CamaraFria /><Footer /></>} />
      <Route path='Reparos' element={<><Navbar /><Reparos /><Footer /></>} />
      <Route path='Letras3d' element={<><Navbar /><Letras3d /><Footer /></>} />
      <Route path='Barracas' element={<><Navbar /><Barracas /><Footer /></>} />
      <Route path='Toldos' element={<><Navbar /><Toldos /><Footer /></>} />
    </Route>
  ));

export default router;