import { createBrowserRouter } from "react-router";
import RootsLayout from "../Layouts/RootsLayout";
import Home from "../Pages/Homepage/Home";




const router = createBrowserRouter([
    {
        path: '/',
        element: <RootsLayout></RootsLayout>,
        children:[
            {
                index: true,
                element: <Home></Home>
            },
            
        ]

    }
]);


export default router;

