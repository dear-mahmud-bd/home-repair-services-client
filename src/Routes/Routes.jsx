import { createBrowserRouter } from "react-router-dom";
import App from "../App";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <h1>Error!! Back to home page...</h1>,
        children:[
            {path: '/', element: <h1> This is home page </h1>},
            {path: '/services', element: <h1> This is Services page </h1>},
            {path: '/services-add', element: <h1> This is Add-Services page </h1>},
            {path: '/services-manage', element: <h1> This is Manage-Services page </h1>},
            {path: '/services-booked', element: <h1> This is Booked-Services page </h1>},
            {path: '/services-todo', element: <h1> This is Services To-Do page </h1>},
            {path: '/login', element: <h1> This is login page </h1>},
            {path: '/registration', element: <h1> This is registration page </h1>},
        ]
    },
]);

export default router;