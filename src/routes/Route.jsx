import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../pages/MyToys/MyToys";
import AddToy from "../pages/AddToy/AddToy";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllToy from "../pages/AllToy/AllToy";
import SingleToy from "../pages/AllToy/SingleToy";
import EditToyForm from "../pages/MyToys/EditToyForm";
import Blogs from "../pages/Blogs/Blogs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/blog",
            element:<Blogs></Blogs>
        },
        {
            path:"/my-toys",
            element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
            path:"/add-toy",
            element:<PrivateRoute><AddToy></AddToy></PrivateRoute>
        },
        {
            path:"/edit-toy/:id",
            element:<PrivateRoute><EditToyForm></EditToyForm></PrivateRoute>,
            loader:({params})=>fetch(`https://assignment-11-server-brown-sigma.vercel.app/toy/${params.id}`)
        },
        {
            path:'/all-toy',
            element:<AllToy></AllToy>
        },
        {
            path:'/toy/:id',
            element:<PrivateRoute><SingleToy></SingleToy></PrivateRoute>,
            loader:({params})=>fetch(`https://assignment-11-server-brown-sigma.vercel.app/toy/${params.id}`)
        }
      ]
    },
  ]);
export default router;