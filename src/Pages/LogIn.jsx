import { Helmet } from "react-helmet";
import LoginLeft from "../Layouts/LoginRegister/LoginLeft";
import { Link, useLocation, useNavigate } from "react-router-dom";
import WithGoogle from "../Layouts/LoginRegister/WithGoogle";
import useTogglePassword from "../utility/useTogglePassword";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { showToast } from "../utility/useToast";


const LogIn = () => {
    const { loading, userSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const [passwordVisible, togglePasswordVisibility] = useTogglePassword();


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (formData) => {
        const { email, password } = formData;
        userSignIn(email, password)
            .then(() => {
                showToast('success', 'Log In Successfully');
                navigate(location?.state ? location.state : '/profile');
            })
            .catch(() => {
                showToast('error', 'Invalid Email or Password');
            });
    };
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
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                                <input {...register('email', {
                                    required: true,
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: 'Enter a valid email address',
                                    },
                                })} type="email" className="input input-sm input-bordered w-full" />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                            </div>
                            <div className="relative">
                                <label htmlFor="password" className="block text-sm font-medium">Password</label>
                                <input {...register('password', {
                                    required: "Password is required",
                                    minLength: { value: 6, message: "Password must be at least 6 characters" }
                                })} type={passwordVisible ? "text" : "password"} className="input input-sm input-bordered w-full" />
                                <span onClick={togglePasswordVisibility} className="absolute right-3 top-5 cursor-pointer text-3xl">
                                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                            <button type="submit" className="w-full bg-custom-blue-5 text-white p-2 rounded-md hover:bg-custom-blue-3">
                                {loading ? <span className="loading loading-spinner loading-xs"></span> : 'LogIn'}
                            </button>
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