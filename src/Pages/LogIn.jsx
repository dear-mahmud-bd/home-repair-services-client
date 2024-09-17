import { Helmet } from "react-helmet";
import LoginLeft from "../Layouts/LoginRegister/LoginLeft";
import { Link } from "react-router-dom";
import WithGoogle from "../Layouts/LoginRegister/WithGoogle";


const LogIn = () => {
    return (
        <div>
            <Helmet>
                <title>LogIn</title>
            </Helmet>
            <div className="flex">
                <div className="hidden md:flex items-center justify-center flex-1 text-black">
                    <LoginLeft></LoginLeft>
                </div>
                {/* <!-- Right Pane --> */}
                <div className="w-full md:w-1/2 flex items-center justify-center">
                    <div className="max-w-md w-full p-6">
                        <h1 className="text-4xl font-bold mb-6 text-center">Welcome Back</h1>
                        <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">Join to Our Community with all time free access</h1>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                                <input type="text" id="email" name="email" className="input input-sm input-bordered w-full" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium">Password</label>
                                <input type="password" id="password" name="password" className="input input-sm input-bordered w-full" />
                            </div>
                            <button type="submit" className="w-full bg-custom-blue-5 text-white p-2 rounded-md hover:bg-custom-blue-3 focus:outline-none focus:bg-black  focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">Sign Up</button>
                        </form>

                        <div className="mt-4 text-sm text-center">
                            <p>
                                Don&apos;t have an account? <Link to="/register" className="underline">Register</Link> here.
                            </p>
                        </div>

                        <WithGoogle></WithGoogle>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default LogIn;