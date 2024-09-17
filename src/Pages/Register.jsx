import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import WithGoogle from "../Layouts/LoginRegister/WithGoogle";


const Register = () => {
    return (
        <div>
            <Helmet>
                <title>Register</title>
            </Helmet>
            {/* <!-- Left column container with background--> */}
            <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
                <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                    <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="w-full" alt="Sample image" />
                </div>

                {/* <!-- Right column container --> */}
                <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                    <div className="max-w-md w-full p-6">

                        <h1 className="text-4xl font-bold mb-6 text-center">Register</h1>
                        <form  >
                            <input
                                type="text" placeholder="Name" className="input input-sm input-bordered w-full"
                            />

                            <input
                                type="url" placeholder="Enter your photo URL" className="input input-sm input-bordered w-full mt-4"
                            />

                            <input
                                type="email" placeholder="Email" className="input input-sm input-bordered w-full mt-4"
                            />

                            {/* Password */}
                            <div className="relative">
                                <input
                                    type="password" placeholder="Password" className="input input-sm input-bordered w-full mt-4"
                                />
                            </div>

                            {/* Confirm Password */}
                            <div className="relative">
                                <input
                                    type="password" placeholder="Confirm Password" className="input input-sm input-bordered w-full mt-4" />
                            </div>

                            <button className="mt-5 tracking-wide font-semibold bg-custom-blue-5 text-gray-100 w-full py-2 rounded-lg hover:bg-custom-blue-3 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none" >
                                <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /> <circle cx="8.5" cy="7" r="4" /> <path d="M20 8v6M23 11h-6" />  </svg> <span className="ml-2"> Register</span>
                            </button>
                        </form>


                        <div className="mt-4 text-sm text-center">
                            <p>
                                Already have an account? <Link to="/login" className="underline">Log In</Link>
                            </p>
                        </div>

                        <WithGoogle></WithGoogle>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;