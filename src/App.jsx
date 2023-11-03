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
import ArticleService from "./server/article";
import { getArticleStart, getArticleSuccess } from "./slice/articleSlice";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Route>
  )
);

const App = () => {
  const dispatch = useDispatch();

  const getArticle = async () => {
    dispatch(getArticleStart());
    try {
      const response = await ArticleService.getArticle();
      console.log(response);
      dispatch(getArticleSuccess(response.articles));
    } catch (error) {
      console.log(error);
    }
  };
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
    getArticle();
  }, []);
  return <RouterProvider router={router} />;
};

export default App;
