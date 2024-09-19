import { Helmet } from "react-helmet";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { AiOutlineFileDone } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const ServicesDetails = () => {
    const service = useLoaderData();

    const { user } = useContext(AuthContext);
    console.log(user?.displayName, user?.email);
    console.log(service);

    // const service = services.find(service => service.serviceId === _id);

    // State for modal visibility and editable fields
    const [serviceDate, setServiceDate] = useState("");
    const [specialInstructions, setSpecialInstructions] = useState("");

    const {
        _id,
        serviceImage,
        serviceName,
        serviceProviderEmail,
        serviceDescription,
        servicePrice,
        serviceProviderName,
        serviceProviderImage,
        serviceLocation,
        serviceTotalOrder,
    } = service;

    if (!service) {
        return (
            <div className="text-center flex flex-col items-center justify-center h-60 md:h-96">
                <Helmet>
                    <title>Service Not Found</title>
                </Helmet>
                <h1 className="text-4xl font-bold text-red-600">Service Not Found</h1>
                <p className="text-lg font-semibold text-gray-600 mt-2">Sorry, the service you are looking for not here.</p>
            </div>
        );
    }

    const handlePurchase = (e) => {
        e.preventDefault();
        console.log({
            _id,
            serviceName,
            servicePrice,
            serviceDate,
            specialInstructions,
            providerEmail: "provider@example.com",
            providerName: serviceProviderName,
            currentUserEmail: user?.email,
            currentUserName: user?.displayName
        });
    };

    return (
        <div>
            <Helmet>
                <title>Services | {service?.serviceName} </title>
            </Helmet>

            <div className="max-w-5xl mx-auto mb-10 p-5">
                <h1 className="text-3xl font-bold text-center mb-6">{serviceName}</h1>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <img src={serviceImage} alt={serviceName} className="rounded-xl shadow-lg" />
                    </div>
                    <div className="flex items-center">
                        <div >
                            <div className=" text-center space-y-1">
                                <img src={serviceProviderImage} alt="Provider" className="w-24 h-24 shadow-xl rounded-full mx-auto" />
                                <h2 className="text-xl font-semibold">Provider: {serviceProviderName}</h2>
                                <p className="text-md text-gray-400">Email: {serviceProviderEmail}</p>
                                <p className="text-md text-gray-500">
                                    <span className="flex items-center justify-center gap-1"><AiOutlineFileDone />{serviceTotalOrder}, Area Covered: {serviceLocation}</span>
                                </p>
                            </div>
                            <p className="mt-4">{serviceDescription}</p>
                            <div className="mt-4 flex justify-between items-center">
                                <span className="text-lg font-semibold flex items-center">Charge :<RiMoneyDollarCircleLine />{servicePrice}</span>
                                <button
                                    onClick={() => document.getElementById('service_book_modal').showModal()}
                                    className="ml-4 bg-custom-blue-5 hover:bg-custom-blue-3 text-white font-bold py-2 px-4 rounded">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="service_book_modal" className="modal">
                <div className="modal-box w-full max-w-5xl">
                    <div className=" flex justify-between items-center">
                        <h3 className="font-bold text-lg mb-4">Book Service</h3>
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-outline text-red-500 hover:bg-red-500 hover:border-red-500">X</button>
                        </form>
                    </div>
                    <form onSubmit={handlePurchase}>
                        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 mb-4">
                            <div className="col-span-6 sm:col-span-3">
                                <label className="block text-sm font-semibold">Service ID</label>
                                <input type="text" value={_id} readOnly className="input input-sm input-bordered w-full" />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="block text-sm font-semibold">Service Name</label>
                                <input type="text" value={serviceName} readOnly className="input input-sm input-bordered w-full" />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="block text-sm font-semibold">Service Image</label>
                                <input type="text" value={serviceImage} readOnly className="input input-sm input-bordered w-full" />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="block text-sm font-semibold">Provider Email</label>
                                <input type="text" value="provider@example.com" readOnly className="input input-sm input-bordered w-full" />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="block text-sm font-semibold">Provider Name</label>
                                <input type="text" value={serviceProviderName} readOnly className="input input-sm input-bordered w-full" />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="block text-sm font-semibold">Current User Email</label>
                                <input type="text" value={user?.email} readOnly className="input input-sm input-bordered w-full" />
                            </div>
                            <div className="col-span-6 sm:col-span-2">
                                <label className="block text-sm font-semibold">Current User Name</label>
                                <input type="text" value={user?.displayName} readOnly className="input input-sm input-bordered w-full" />
                            </div>
                            <div className="col-span-6 sm:col-span-2">
                                <label className="block text-sm font-semibold">Price</label>
                                <input type="text" value={servicePrice} readOnly className="input input-sm input-bordered w-full" />
                            </div>
                            <div className="col-span-6 sm:col-span-2">
                                <label className="block text-sm font-semibold">Service Taking Date</label>
                                <input
                                    type="date"
                                    value={serviceDate}
                                    onChange={(e) => setServiceDate(e.target.value)}
                                    className="input input-sm input-bordered w-full"
                                />
                            </div>
                            <div className="col-span-6">
                                <label className="block text-sm font-semibold">Special Instructions</label>
                                <textarea value={specialInstructions} rows={2} style={{ minHeight: '3rem', maxHeight: '7rem' }}
                                    onChange={(e) => setSpecialInstructions(e.target.value)}
                                    className="textarea textarea-bordered w-full" />
                            </div>
                        </div>
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn btn-warning text-white">Not Now</button>
                            </form>
                            <button type="submit" className="btn bg-custom-blue-5 hover:bg-custom-blue-3 text-white">Purchase</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default ServicesDetails;
