import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import SignUp from "../Signup/SignUp";
import AddToy from "../pages/AddToy/AddToy";
import PrivateRoute from "./PrivateRoute";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
                loader : () => fetch(`http://localhost:5000/toys?limit=10`)
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
                loader : () =>fetch(`http://localhost:5000/toys`)
            },
            {
                path : '/myToys',
                element : <PrivateRoute><MyToys></MyToys></PrivateRoute>
            }
        ]
    },
]);
export default router