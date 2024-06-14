import {
    createBrowserRouter
  } from "react-router-dom";
import Rootes from "../../Layouts/Rootes/Rootes";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Rootes/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'login',
          element:<Login/>
        },
        {
          path:'signup',
          element:<Signup/>
        }
      ]
    }
  ]);