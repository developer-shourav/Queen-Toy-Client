import { createBrowserRouter } from "react-router-dom";
import Page404 from "../pages/Page404/Page404";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import AddAToy from "../pages/AddAToy/AddAToy";
import Blog from "../pages/Blog/Blog";



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
                element:<AllToys> </AllToys>
            },
            {
                path:'/my_toys',
                element:<MyToys> </MyToys>
            },
            {
                path:'/add_a_toy',
                element:<AddAToy> </AddAToy>
            },
            
            {
                path:'/blog',
                element:<Blog> </Blog>
            },
            


        ],
    },
])


export default router;