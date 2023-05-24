import { createBrowserRouter } from "react-router-dom";
import Page404 from "../pages/Page404/Page404";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import AddAToy from "../pages/AddAToy/AddAToy";
import Blogs from "../pages/Blogs/Blogs";
import PrivetRoutes from "./PrivetRoutes";



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
            {
                path:'/all_toys',
                element:<AllToys> </AllToys>,
                loader : () => fetch('https://queen-toy-server-developer-shourav.vercel.app/allToys')
            },
            {
                path:'/my_toys',
                element:<PrivetRoutes> <MyToys> </MyToys></PrivetRoutes>
            },
            {
                path:'/add_a_toy',
                element:<PrivetRoutes> <AddAToy> </AddAToy> </PrivetRoutes>
            },
            
            {
                path:'/blog',
                element:<Blogs> </Blogs>
            },
            


        ],
    },
])


export default router;