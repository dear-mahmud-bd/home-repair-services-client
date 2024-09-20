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
import ServiceAdd from "../Pages/ServiceAdd";
import ServiceManage from "../Pages/ServiceManage";
import ServicesBooked from "../Pages/ServicesBooked";
import ServiceToDo from "../Pages/ServiceToDo";
import ServiceUpdate from "../Pages/ServiceUpdate";
// import useAxiosSecure from "../hooks/useAxiosSecure";
import { axiosSecure } from "../hooks/useAxiosSecure";


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
            { path: '/profile', element: <PrivateRoute> <UserProfile /> </PrivateRoute> },
            {
                path: '/services/:_id', element: <PrivateRoute> <ServicesDetails /> </PrivateRoute>,
                loader: async ({ params }) => {
                    const res = await axios.get(`https://home-repair-services-server-02.vercel.app/services/${params._id}`);
                    return res.data;
                },
            },
            { path: '/services-add', element: <PrivateRoute> <ServiceAdd /> </PrivateRoute> },
            { path: '/services-manage', element: <PrivateRoute> <ServiceManage /> </PrivateRoute> },
            {
                path: '/services-update/:_id', element: <PrivateRoute> <ServiceUpdate /> </PrivateRoute>,
                loader: async ({ params }) => {
                    // const res = await axios.get(`https://home-repair-services-server-02.vercel.app/services/${params._id}`, { withCredentials: true });
                    // const axiosSecure = useAxiosSecure();
                    // const res = await axiosSecure.get(`/services/${params._id}`);
                    const res = await axiosSecure.get(`/services/${params._id}`);
                    return res.data;
                },
            },
            { path: '/services-booked', element: <PrivateRoute> <ServicesBooked /> </PrivateRoute> },
            { path: '/services-todo', element: <PrivateRoute> <ServiceToDo /> </PrivateRoute> },
        ]
    },
]);

export default router;