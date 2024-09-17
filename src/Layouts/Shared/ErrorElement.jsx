import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";


const ErrorElement = () => {
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/');
    };
    return (
        <div>
            <Helmet>
                <title>Something Wrong!!</title>
            </Helmet>
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-6">
                <h1 className="text-9xl font-bold text-gray-800">404</h1>
                <p className="text-2xl text-gray-600 mt-4">
                    Sorry, but page was not found
                </p>
                <p className="text-md text-gray-500 mt-2">
                    You may have mistyped the address or the page may have moved.
                </p>
                <div className="mt-8 space-x-4">
                    <button className="bg-custom-blue-5 text-white px-6 py-2 rounded hover:bg-custom-blue-3" onClick={goHome}>
                        BACK TO HOME PAGE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ErrorElement;