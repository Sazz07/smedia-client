import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Details from "../../Pages/Home/Details/Details";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Media from "../../Pages/Media/Media";
import Signup from "../../Pages/Signup/Signup";

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
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/media',
                element: <Media></Media>
            },
            {
                path: "/media/:id",
                element: <Details />,
                loader: ({ params }) => fetch(`http://localhost:5000/post/${params.id}`)
            },
        ]
    }
])

export default router;