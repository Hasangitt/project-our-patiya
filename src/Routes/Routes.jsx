import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Schools from "../Pages/Schools/Schools";
import College from "../Pages/College/College";
import Doctors from "../Pages/Doctors/Doctors";
import Emergency from "../Pages/Emergency/Emergency";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/schools',
                element: <Schools></Schools>
            },
          {
            path: '/college',
            element: <College></College>
          },
          {
            path: '/doctors',
            element: <Doctors></Doctors>
          },
          {
            path: '/emergency',
            element: <Emergency></Emergency>
          }
           
        ]
    }
])

export default router;