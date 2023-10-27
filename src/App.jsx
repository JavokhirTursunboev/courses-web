
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
