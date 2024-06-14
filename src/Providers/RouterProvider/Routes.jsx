import {
    createBrowserRouter
  } from "react-router-dom";
import Rootes from "../../Layouts/Rootes/Rootes";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import Focus from "../../Pages/Focus/Focus";
import AddTask from "../../Pages/AddTask/AddTask";



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
        },
        {
          path:'focus',
          element:<Focus/>,
          loader: ()=>fetch("http://localhost:3000/todo")
        },
        {
          path:'add-task',
          element:<AddTask/>
        }
      ]
    }
  ]);