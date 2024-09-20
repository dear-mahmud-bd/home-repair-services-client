import { AiOutlineProject } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";
import { IoCalendarOutline } from "react-icons/io5";
import { SlLike } from "react-icons/sl";


const Survey = () => {
    return (
        <div className="my-10">
            <h2 className="text-center text-3xl font-semibold mb-8 underline decoration-custom-blue-5 underline-offset-8">Our Impact</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-center">
                <div className=" p-6 border rounded-md space-y-3">
                    <div className="flex justify-center items-center mb-1">
                        <SlLike className="text-6xl" />
                    </div>
                    <p className="text-3xl font-semibold">100%</p>
                    <p className="text-sm text-gray-500 border-t-2">Customer Satisfaction</p>
                </div>
                <div className=" p-6 border rounded-md space-y-3">
                    <div className="flex justify-center items-center mb-1">
                        <IoCalendarOutline className="text-6xl" />
                    </div>
                    <p className="text-3xl font-semibold">10</p>
                    <p className="text-sm text-gray-500 border-t-2">Years in the Market</p>
                </div>
                <div className=" p-6 border rounded-md space-y-3">
                    <div className="flex justify-center items-center mb-1">
                        <HiOutlineUser className="text-6xl" />
                    </div>
                    <p className="text-3xl font-semibold">2,954</p>
                    <p className="text-sm text-gray-500 border-t-2">Happy Clients</p>
                </div>
                <div className=" p-6 border rounded-md space-y-3">
                    <div className="flex justify-center items-center mb-1">
                        <AiOutlineProject className="text-6xl" />
                    </div>
                    <p className="text-3xl font-semibold">3,597</p>
                    <p className="text-sm text-gray-500 border-t-2">Projects Completed</p>
                </div>
            </div>
        </div>
    );
};

export default Survey;