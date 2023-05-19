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
            path:"/my-toys",
            element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
            path:"/add-toy",
            element:<PrivateRoute><AddToy></AddToy></PrivateRoute>
        },
        {
            path:'/all-toy',
            element:<AllToy></AllToy>,
            loader:()=>fetch('http://localhost:5000/all-toy')
        }
      ]
    },
  ]);
export default router;