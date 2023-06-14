
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Home></Home>}>
      </Route>
      <Route path='info-blog' element={<Blog></Blog>} />
    </Route>
  ));

export default router;