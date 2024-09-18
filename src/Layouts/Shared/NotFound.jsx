import { Link } from 'react-router-dom';
import notFound from '../../assets/notfound.svg'
import { Helmet } from 'react-helmet';

const NotFound = () => {
    return (
        <div>
            <Helmet>
                <title>Not Found</title>
            </Helmet>
            <div className="container px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12 my-10">
                <div className="wf-ull lg:w-1/2">
                    <p className="text-md font-medium text-red-500 dark:text-red-400">404 error</p>
                    <h1 className="mt-3 text-2xl font-semibold md:text-3xl">Page not found</h1>
                    <p className="mt-4 text-gray-500 dark:text-gray-400">Sorry, the page you are looking for doesn&apos;t exist.Here are some helpful links:</p>

                    <div className="flex items-center mt-6 gap-x-3">
                        <Link to='/'>
                            <button className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-custom-blue-5 rounded-lg shrink-0 sm:w-auto hover:bg-custom-blue-3 dark:hover:bg-custom-blue-5 dark:bg-custom-blue-3">
                                Take me home
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
                    <img className="w-full max-w-lg lg:mx-auto" src={notFound} alt="Not Found Image" />
                </div>
            </div>
        </div>
    );
};

export default NotFound;