import { createBrowserRouter } from "react-router";
import AuthLayout from "../layout/AuthLayout";
import rootLayout from "../layout/rootLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import Coverage from "../Pages/Coverage/Coverage";
import Home from "../Pages/Home/Home";
import Rider from "../Pages/Rider/Rider";
import SendPercel from "../Pages/SendPercel/SendPercel";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path : "/",
        Component : rootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'rider',
                element: <Rider />
            },{
                path: 'send-parcel',
                element: <PrivateRoute><SendPercel></SendPercel></PrivateRoute>,
                loader : ()=> fetch('/serviceCenter.json').then(res => res.json())
            },
            {
                path: 'coverage',
                Component: Coverage,
                loader : ()=> fetch('/serviceCenter.json').then(res => res.json())
            },
        ]
    },
    {
        path: '/',
        Component: AuthLayout,
        children: [
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component: Register
            }

        ]
    }
]);