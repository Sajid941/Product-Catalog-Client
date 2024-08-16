import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Root from "../layouts/Root";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ViewDetails from "../pages/ViewDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
import ContactUs from "../pages/ContactUs";
import UpdateProfile from "../pages/UpdateProfile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: ([
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:3000/productsCount')
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/contactUs",
                element: <PrivateRoute>
                    <ContactUs></ContactUs>
                </PrivateRoute>
            },
            {
                path: "/updateProfile",
                element: <PrivateRoute>
                    <UpdateProfile></UpdateProfile>
                </PrivateRoute>
            },
            {
                path: "/viewDetails/:id",
                element: <PrivateRoute>
                    <ViewDetails></ViewDetails>
                </PrivateRoute>,
                loader: () => fetch('http://localhost:3000/products')
            },

        ])
    }
])

export default router;