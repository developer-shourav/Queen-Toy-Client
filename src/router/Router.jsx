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
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import UpdateToy from "../pages/UpdateToy/UpdateToy";



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
                path:'/toyDetails/:id',
                element:<PrivetRoutes> <ToyDetails> </ToyDetails></PrivetRoutes>,
                loader : ({params}) => fetch(`https://queen-toy-server-developer-shourav.vercel.app/toyDetails/${params.id}`)
            },
            
            {
                path:'/updateToy/:id',
                element:<PrivetRoutes> <UpdateToy> </UpdateToy> </PrivetRoutes>,
                loader : ({params}) => fetch(`https://queen-toy-server-developer-shourav.vercel.app/toyDetails/${params.id}`)
            },
            
            {
                path:'/blog',
                element:<Blogs> </Blogs>
            },
            


        ],
    },
])


export default router;