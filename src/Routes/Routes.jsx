import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import AllServices from "../Pages/AllServices";
import axios from "axios";
import ServicesDetails from "../Pages/ServicesDetails";
import ErrorElement from "../Layouts/Shared/ErrorElement";
import NotFound from "../Layouts/Shared/NotFound";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import UserProfile from "../Pages/UserProfile";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <ErrorElement />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/services', element: <AllServices /> },
            { path: '/login', element: <LogIn /> },
            { path: '/register', element: <Register /> },
            { path: '*', element: <NotFound /> },

            // This are private route...
            { path: '/profile', element: <PrivateRoute> <UserProfile/> </PrivateRoute> },
            {
                path: '/services/:_id', element: <PrivateRoute> <ServicesDetails /> </PrivateRoute>,
                loader: async () => {
                    const res = await axios.get(`/public/services.json`);
                    return res.data;
                },
            },
            { path: '/services-add', element: <PrivateRoute> <h1> This is Add-Services page </h1> </PrivateRoute> },
            { path: '/services-manage', element: <PrivateRoute> <h1> This is Manage-Services page </h1> </PrivateRoute> },
            { path: '/services-booked', element: <PrivateRoute> <h1> This is Booked-Services page </h1> </PrivateRoute> },
            { path: '/services-todo', element: <PrivateRoute> <h1> This is Services To-Do page </h1> </PrivateRoute> },
        ]
    },
]);

export default router;