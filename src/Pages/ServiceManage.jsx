import { Helmet } from "react-helmet";


const ServiceManage = () => {
    return (
        <div className="max-w-5xl mx-auto">
            <Helmet>
                <title>Manage My Services</title>
            </Helmet>

            <h2 className="text-center text-3xl font-semibold mb-8 underline decoration-customLightBrown underline-offset-8">My added services</h2>

            <div className="overflow-x-auto my-5">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Service Name</th>
                            <th>Fee</th>
                            <th>Service Area</th>
                            <th>Delete Action</th>
                            <th>Update Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <div className="flex items-center gap-3 avatar">
                                    <div className="w-14 rounded">
                                        <img src="https://i.ibb.co.com/NZtL370/banner1.jpg" alt="Service Image Name" />
                                    </div>
                                    <span className="font-semibold">Service Name</span>
                                </div>
                            </td>
                            <td>
                                <div className="font-semibold text-gray-400">
                                    Service Fee
                                </div>
                            </td>
                            <td>
                                <div className="font-semibold text-gray-400">
                                    Service Area
                                </div>
                            </td>
                            <td>
                                <button className="btn btn-error text-white">Delete</button>
                            </td>
                            <td>
                                <button className="btn btn-info text-white">Update</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="flex items-center gap-3 avatar">
                                    <div className="w-14 rounded">
                                        <img src="https://i.ibb.co.com/NZtL370/banner1.jpg" alt="Service Image Name" />
                                    </div>
                                    <span className="font-semibold">Service Name</span>
                                </div>
                            </td>
                            <td>
                                <div className="font-semibold text-gray-400">
                                    Service Fee
                                </div>
                            </td>
                            <td>
                                <div className="font-semibold text-gray-400">
                                    Service Area
                                </div>
                            </td>
                            <td>
                                <button className="btn btn-error text-white">Delete</button>
                            </td>
                            <td>
                                <button className="btn btn-info text-white">Update</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="flex items-center gap-3 avatar">
                                    <div className="w-14 rounded">
                                        <img src="https://i.ibb.co.com/NZtL370/banner1.jpg" alt="Service Image Name" />
                                    </div>
                                    <span className="font-semibold">Service Name</span>
                                </div>
                            </td>
                            <td>
                                <div className="font-semibold text-gray-400">
                                    Service Fee
                                </div>
                            </td>
                            <td>
                                <div className="font-semibold text-gray-400">
                                    Service Area
                                </div>
                            </td>
                            <td>
                                <button className="btn btn-error text-white">Delete</button>
                            </td>
                            <td>
                                <button className="btn btn-info text-white">Update</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="flex items-center gap-3 avatar">
                                    <div className="w-14 rounded">
                                        <img src="https://i.ibb.co.com/NZtL370/banner1.jpg" alt="Service Image Name" />
                                    </div>
                                    <span className="font-semibold">Service Name</span>
                                </div>
                            </td>
                            <td>
                                <div className="font-semibold text-gray-400">
                                    Service Fee
                                </div>
                            </td>
                            <td>
                                <div className="font-semibold text-gray-400">
                                    Service Area
                                </div>
                            </td>
                            <td>
                                <button className="btn btn-error text-white">Delete</button>
                            </td>
                            <td>
                                <button className="btn btn-info text-white">Update</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </div>
    );
};

export default ServiceManage;