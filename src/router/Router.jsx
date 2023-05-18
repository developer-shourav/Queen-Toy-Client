import { createBrowserRouter } from "react-router-dom";
import Page404 from "../pages/Page404/Page404";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";



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
            
        ],
    },
])


export default router;