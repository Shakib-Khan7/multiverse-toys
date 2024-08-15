import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import SignUp from "../Signup/SignUp";
import AddToy from "../pages/AddToy/AddToy";
import PrivateRoute from "./PrivateRoute";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import Error from "../pages/Error/Error";
import MyBlog from "../components/MyBlog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
                loader : () => fetch(`https://multiverse-server.vercel.app/toys?limit=10`)
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/signup',
                element : <SignUp></SignUp>
            },
            {
                path : '/addToy',
                element : <PrivateRoute><AddToy></AddToy></PrivateRoute>
            },
            {
                path : '/allToys',
                element : <AllToys></AllToys>,
                loader : () =>fetch(`https://multiverse-server.vercel.app/toys`)
            },
            {
                path : '/myToys',
                element : <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path : '/blog',
                element : <MyBlog></MyBlog>
            }
            
        ],
        
    },
    {
        path : '*',
        element : <Error></Error>
    }
]);
export default router