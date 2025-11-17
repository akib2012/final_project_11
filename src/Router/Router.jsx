import { createBrowserRouter } from "react-router";
import RootsLayout from "../Layouts/RootsLayout";
import Home from "../Pages/Homepage/Home";
import Coverages from "../Pages/Coverages/Coverages";
import AuthLayout from "../Layouts/AuthLayout";
import Regester from "../Pages/AuthPages/Regester";
import Login from "../Pages/AuthPages/Login";




const router = createBrowserRouter([
    {
        path: '/',
        element: <RootsLayout></RootsLayout>,
        children:[
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/Coverage',
                element: <Coverages></Coverages>,
                loader: () => fetch('./ServiceCenter.json'),
            },
            
        ]

    },
    {
        path: '/',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path:'/login',
                element: <Login></Login>, 
            },
            {
                path: '/regester',
                element: <Regester></Regester>,
            },
        ]
    },
   
]);


export default router;

