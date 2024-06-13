import {
    createBrowserRouter
  } from "react-router-dom";
import Rootes from "../../Layouts/Rootes/Rootes";
import TaskManager from "../../Layouts/TaskManger/TaskManager";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Rootes/>
    },
    {
      path:"/task-manager",
      element:<TaskManager/>
    }
  ]);