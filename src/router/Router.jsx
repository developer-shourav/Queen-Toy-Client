import { createBrowserRouter } from "react-router-dom";
import Page404 from "../pages/Page404/Page404";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";



const router = createBrowserRouter([
    {
        path:'/',
        errorElement:<Page404> </Page404>,
        element:<Main> </Main>,
        children:[
            {
              path:'/',
              element:<Home> </Home>

            },
            {
                path:'/home',
                element:<Home> </Home>
            },
            {
                path:'/login',
                element:<Login> </Login>
            },
            {
                path:'/register',
                element:<Register> </Register>
            },
            


        ],
    },
])


export default router;