import { Helmet } from "react-helmet";


const ServiceToDo = () => {
    return (
        <div className="max-w-5xl mx-auto">
            <Helmet>
                <title>Ask For Services</title>
            </Helmet>

            <h2 className="text-center text-3xl font-semibold mb-8 underline decoration-customLightBrown underline-offset-8">Asking for my services</h2>

            <div className="overflow-x-auto my-5">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Requestor</th>
                            <th>Service Name</th>
                            <th>Fee</th>
                            <th>Date Requested</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <div className="flex items-center gap-3 avatar">
                                    <div className="w-14 rounded-full shadow-xl">
                                        <img src="https://i.ibb.co.com/zZ0brtf/user.png" alt="Service Image Name" />
                                    </div>
                                    <span className="font-semibold">Service Name</span>
                                </div>
                            </td>
                            <td>
                                <div className="font-semibold text-gray-400">
                                    Provider Name
                                </div>
                            </td>
                            <td>
                                <div className="font-semibold text-gray-400">
                                    $500.00
                                </div>
                            </td>
                            <td>
                                <div className="font-semibold text-gray-400">
                                    November 1, 2024
                                </div>
                            </td>
                            <td>
                                {/* info  success  warning */}
                                {/* <button className="btn btn-xs btn-error text-white">pending</button> */}
                                <select className="select select-bordered select-xs max-w-xs bg-error text-white">
                                    <option disabled selected>pending</option>
                                    <option>working</option>
                                    <option>completed</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="flex items-center gap-3 avatar">
                                    <div className="w-14 rounded-full shadow-xl">
                                        <img src="https://i.ibb.co.com/zZ0brtf/user.png" alt="Service Image Name" />
                                    </div>
                                    <span className="font-semibold">Service Name</span>
                                </div>
                            </td>
                            <td>
                                <div className="font-semibold text-gray-400">
                                    Provider Name
                                </div>
                            </td>
                            <td>
                                <div className="font-semibold text-gray-400">
                                    $500.00
                                </div>
                            </td>
                            <td>
                                <div className="font-semibold text-gray-400">
                                    November 1, 2024
                                </div>
                            </td>
                            <td>
                                {/* info  success  warning */}
                                <button className="btn btn-xs btn-error text-white">pending</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="flex items-center gap-3 avatar">
                                    <div className="w-14 rounded-full shadow-xl">
                                        <img src="https://i.ibb.co.com/zZ0brtf/user.png" alt="Service Image Name" />
                                    </div>
                                    <span className="font-semibold">Service Name</span>
                                </div>
                            </td>
                            <td>
                                <div className="font-semibold text-gray-400">
                                    Provider Name
                                </div>
                            </td>
                            <td>
                                <div className="font-semibold text-gray-400">
                                    $500.00
                                </div>
                            </td>
                            <td>
                                <div className="font-semibold text-gray-400">
                                    November 1, 2024
                                </div>
                            </td>
                            <td>
                                {/* info  success  warning */}
                                <button className="btn btn-xs btn-error text-white">pending</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="flex items-center gap-3 avatar">
                                    <div className="w-14 rounded-full shadow-xl">
                                        <img src="https://i.ibb.co.com/zZ0brtf/user.png" alt="Service Image Name" />
                                    </div>
                                    <span className="font-semibold">Service Name</span>
                                </div>
                            </td>
                            <td>
                                <div className="font-semibold text-gray-400">
                                    Provider Name
                                </div>
                            </td>
                            <td>
                                <div className="font-semibold text-gray-400">
                                    $500.00
                                </div>
                            </td>
                            <td>
                                <div className="font-semibold text-gray-400">
                                    November 1, 2024
                                </div>
                            </td>
                            <td>
                                {/* info  success  warning */}
                                <button className="btn btn-xs btn-error text-white">pending</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </div>
    );
};

export default ServiceToDo;