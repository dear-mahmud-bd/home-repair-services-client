import { Link } from "react-router-dom";
import banner1 from '../../assets/banner1.jpg'

const Banner = () => {
    return (
        <div>
            <div className="mb-5 mx-auto flex flex-col md:flex-row items-center gap-3">
                {/* Text Section */}
                <div className="flex-1 sm:text-center md:text-left">
                    <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                        <span className="block xl:inline">We&apos;ve reimagined the home</span>
                        <span className="block text-indigo-600 xl:inline"> renovation experience</span>
                    </h1>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl md:mx-0">
                        Welcome to Renoxy, the leading home renovation services provider. We have been bringing the ideas of our clients into life since 2008.
                    </p>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center md:justify-start">
                        <div className="rounded-md shadow">
                            <Link to="/services" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10">
                                See All Services
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Image Section */}
                <div className="flex-1 md:inset-y-0 md:right-0 my-4">
                    <img className="h-80 w-full object-cover rounded-2xl md:w-full md:h-96 lg:h-full" src={banner1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;