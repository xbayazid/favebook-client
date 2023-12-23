import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Author from "../../Pages/Author/Author";
import Book from "../../Pages/Book/Book";
import Reviews from "../../Pages/Reviews/Reviews";
import AuthLayout from "../../Layout/AuthLayout/AuthLayout";
import Error from "../../Pages/Error/Error";
import Authentication from "../../Pages/Authentication/Authentication";
import PostDetails from "../../Pages/PostDetails/PostDetails";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import DashboardLayout from "../../Layout/DashboardLayout";
import AddBook from "../../Pages/Dashboard/AddBook/AddBook";
import AllUser from "../../Pages/Dashboard/AllUser/AllUser";
import AuthorAppointment from "../../Pages/Dashboard/AuthorAppointment/AuthorAppointment";
import MessageLayout from "../../Layout/MessageLayout";
import Message from "../../Pages/Dashboard/Message/Message";
import { useQuery } from "@tanstack/react-query";
import MessageBg from "../../components/MessageBg/MessageBg";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/author',
                element: <Author />
            },
            {
                path: '/book',
                element: <Book />
            },
            {
                path: '/reviews',
                element: <Reviews />
            },
            {
                path: '/postDetails/:id',
                element: <PrivateRoutes><PostDetails /></PrivateRoutes>,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/posts/${params.id}`);
                }
            }
        ]
    },
    {
        path: '/authentication',
        element: <AuthLayout />,
        children: [
            {
                path: '/authentication',
                element: <Authentication />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/dashboard/message',
                element: <MessageLayout />,
                children: [
                    {
                        path: '/dashboard/message',
                        element: <MessageBg/>
                    },
                    {
                        path: '/dashboard/message/:id',
                        element: <Message/>,
                        loader: ({params}) => {
                            return fetch(`http://localhost:5000/groups/${params.id}`)
                        }
                    }
                ]
            },
            {
                path: '/dashboard/addBook',
                element: <AddBook />
            },
            {
                path: '/dashboard/allUsers',
                element: <AllUser />
            },
            {
                path: '/dashboard/authorAppointment',
                element: <AuthorAppointment />
            }
        ]
    },
    {
        path: '*',
        element: <Error />
    }
])

export default router;