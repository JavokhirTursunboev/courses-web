import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import { useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Main from "./components/Main";
import { useDispatch } from "react-redux";
import AuthServer from "./server/auth";
import { signUserSuccess } from "./slice/auth";
import { getItem } from "./helper/persist-helper";

import ArticleDes from "./components/ArticleDes";
import CreateArticle from "./components/CreateArticle";
import EditArticle from "./components/EditArticle";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/articles/:slug" element={<ArticleDes />} />
      <Route path="/create-article" element={<CreateArticle />} />
      <Route path="/edit/:slug" element={<EditArticle />} />
    </Route>
  )
);

const App = () => {
  const dispatch = useDispatch();

  const getUser = async () => {
    try {
      const response = await AuthServer.getUser();
      dispatch(signUserSuccess(response.user));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const tokken = getItem("token");
    if (tokken) {
      getUser();
    }
  }, []);
  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
