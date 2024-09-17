import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import AllServices from "../Pages/AllServices";
import axios from "axios";
import ServicesDetails from "../Pages/ServicesDetails";
import ErrorElement from "../Layouts/Shared/ErrorElement";
import NotFound from "../Layouts/Shared/NotFound";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <ErrorElement/>,
        children: [
            { path: '/', element: <Home /> },
            { path: '/services', element: <AllServices /> },
            { path: '/login', element: <h1> This is login page </h1> },
            { path: '/registration', element: <h1> This is registration page </h1> },
            { path: '*', element: <NotFound/> },

            // This are private route...
            {
                path: '/services/:_id', element: <ServicesDetails />,
                loader: async () => {
                    const res = await axios.get(`/public/services.json`);
                    return res.data;
                },
            },
            { path: '/services-add', element: <h1> This is Add-Services page </h1> },
            { path: '/services-manage', element: <h1> This is Manage-Services page </h1> },
            { path: '/services-booked', element: <h1> This is Booked-Services page </h1> },
            { path: '/services-todo', element: <h1> This is Services To-Do page </h1> },
        ]
    },
]);

export default router;