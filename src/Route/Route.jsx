import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Shows from "../Pages/Shows/Shows";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element:<Home></Home>
        },
        {
            path:'/shows/:id',
            element:<Shows></Shows>,
            loader:({params}) => fetch(`/movies.json?=${params.id}`)
           
        }
      ]
    },
  ]);
  export default router;