import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Author from "../../Pages/Author/Author";
import Book from "../../Pages/Book/Book";
import Reviews from "../../Pages/Reviews/Reviews";
import AuthLayout from "../../Layout/AuthLayout/AuthLayout";
import Login from "../../Pages/Login/Login";
import SignUp from "../../SignUp/SignUp";
import Error from "../../Pages/Error/Error";
import Authentication from "../../Pages/Authentication/Authentication";
import Dashboard from "../../Pages/Dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path: '/',
    element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/author',
                element: <Author/>
            },
            {
                path: '/book',
                element: <Book/>
            },
            {
                path: '/reviews',
                element: <Reviews/>
            },
        ]
    },
    {
        path: '/authentication',
        element: <AuthLayout/>,
        children: [
            {
                path: '/authentication',
                element: <Authentication/>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard/>
    },
    {
        path: '*',
        element: <Error/>
    }
])

export default router;