import { createBrowserRouter } from "react-router";
import RootsLayout from "../Layouts/RootsLayout";
import Home from "../Pages/Homepage/Home";
import Coverages from "../Pages/Coverages/Coverages";




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
            {

            }
            
        ]

    }
]);


export default router;

