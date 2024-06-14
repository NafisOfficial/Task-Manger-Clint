import {
  createBrowserRouter
} from "react-router-dom";
import Rootes from "../../Layouts/Rootes/Rootes";
import AddTask from "../../Pages/AddTask/AddTask";
import Focus from "../../Pages/Focus/Focus";
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
        },
        {
          path:'focus',
          element:<Focus/>,
          loader: ()=>fetch("https://task-manager-server-rouge.vercel.app/todo")
        },
        {
          path:'add-task',
          element:<AddTask/>
        }
      ]
    }
  ]);