import { Helmet } from "react-helmet";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AiOutlineFileDone } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { DayPicker } from 'react-day-picker';
import axios from "axios";
import { sweetToast } from "../utility/useToast";
import 'react-day-picker/dist/style.css';


const ServicesDetails = () => {
    const [loading, setLoading] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [showCalendar, setShowCalendar] = useState(false);
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const service = useLoaderData();

    // console.log(user?.displayName, user?.email);
    // console.log(service);
    // const service = services.find(service => service.serviceId === _id);

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

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    useEffect(() => {
        setValue('serviceId', _id || '');
        setValue('serviceName', serviceName || '');
        setValue('serviceImage', serviceImage || '');
        setValue('serviceFee', servicePrice || '');
        setValue('serviceProviderName', serviceProviderName || '');
        setValue('serviceProviderEmail', serviceProviderEmail || '');
        setValue('serviceHolderName', user?.displayName || '');
        setValue('serviceHolderEmail', user?.email || '');

    }, [_id, serviceName, serviceImage, servicePrice, serviceProviderName, serviceProviderEmail, user, setValue]);



    const today = new Date();
    const threeDaysLater = new Date(today);
    threeDaysLater.setDate(today.getDate() + 4);
    const isFriday = (date) => date.getDay() === 5;
    const handleDateSelect = (date) => {
        setSelectedDate(date);
        const formattedDate = date?.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
        setValue('serviceTakingDate', formattedDate, { shouldValidate: true });
        setShowCalendar(false);
    };

    const handlePurchase = (formData) => {
        // console.log(formData);
        const data = {
            ...formData,
            status: "pending",
        };
        setLoading(true);
        axios.post('http://localhost:5000/bookings', data)
            .then(res => {
                // console.log(res?.data);
                setLoading(false);
                if (res?.data.acknowledged) {
                    sweetToast('Success!', 'Service Booked Successfully', 'success');
                    navigate('/services-booked');
                } else {
                    sweetToast('Error!', 'Something Wrong!!', 'error');
                }
            })
            .catch(() => {
                setLoading(false);
                sweetToast('Error!', 'Something Wrong!!', 'error');
            })
    };


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
                    <form onSubmit={handleSubmit(handlePurchase)}>
                        <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-12 gap-3">
                            {/* Service ID */}
                            <div className="col-span-6 sm:col-span-3 md:col-span-4">
                                <label className="block text-sm font-semibold">Service Id</label>
                                <input {...register("serviceId", { required: "Service Id is required" })}
                                    readOnly disabled className={`input input-sm input-bordered w-full ${errors.serviceId ? 'input-error' : ''}`} />
                                {errors.serviceId && <p className="text-red-500 text-sm">{errors.serviceId.message}</p>}
                            </div>
                            {/* Service Name */}
                            <div className="col-span-6 sm:col-span-3 md:col-span-4">
                                <label className="block text-sm font-semibold">Service Name</label>
                                <input  {...register("serviceName", { required: "Service Name is required" })}
                                    defaultValue={user?.photoURL || ""} readOnly disabled className={`input input-sm input-bordered w-full ${errors.serviceName ? 'input-error' : ''}`} />
                                {errors.serviceName && <p className="text-red-500 text-sm">{errors.serviceName.message}</p>}
                            </div>
                            {/* Service Image URL */}
                            <div className="col-span-6 sm:col-span-3 md:col-span-4">
                                <label className="block text-sm font-semibold">Service Image URL</label>
                                <input  {...register("serviceImage", { required: "Service Image URL is required" })}
                                    defaultValue={user?.photoURL || ""} readOnly disabled className={`input input-sm input-bordered w-full ${errors.serviceImage ? 'input-error' : ''}`} />
                                {errors.serviceImage && <p className="text-red-500 text-sm">{errors.serviceImage.message}</p>}
                            </div>
                            {/* Service Fee */}
                            <div className="col-span-6 sm:col-span-3 md:col-span-4">
                                <label className="block text-sm font-semibold">$ Service Fee</label>
                                <input {...register("serviceFee", { required: "Service Fee is required" })}
                                    readOnly disabled className={`input input-sm input-bordered w-full ${errors.serviceFee ? 'input-error' : ''}`} />
                                {errors.serviceFee && <p className="text-red-500 text-sm">{errors.serviceFee.message}</p>}
                            </div>
                            {/* Service Provider Name */}
                            <div className="col-span-6 sm:col-span-3 md:col-span-4">
                                <label className="block text-sm font-semibold">Provider Name</label>
                                <input {...register("serviceProviderName", { required: "Provider Name is required" })}
                                    readOnly disabled className={`input input-sm input-bordered w-full ${errors.serviceProviderName ? 'input-error' : ''}`} />
                                {errors.serviceProviderName && <p className="text-red-500 text-sm">{errors.serviceProviderName.message}</p>}
                            </div>
                            {/* Service Provider Email */}
                            <div className="col-span-6 sm:col-span-3 md:col-span-4">
                                <label className="block text-sm font-semibold">Provider Email</label>
                                <input {...register("serviceProviderEmail", { required: "Provider Email is required" })}
                                    readOnly disabled className={`input input-sm input-bordered w-full ${errors.serviceProviderEmail ? 'input-error' : ''}`} />
                                {errors.serviceProviderEmail && <p className="text-red-500 text-sm">{errors.serviceProviderEmail.message}</p>}
                            </div>
                            {/* Your Name */}
                            <div className="col-span-6 sm:col-span-3 md:col-span-4">
                                <label className="block text-sm font-semibold">Your Name</label>
                                <input {...register("serviceHolderName", { required: "Your Name is required" })}
                                    readOnly disabled className={`input input-sm input-bordered w-full ${errors.serviceHolderName ? 'input-error' : ''}`} />
                                {errors.serviceHolderName && <p className="text-red-500 text-sm">{errors.serviceHolderName.message}</p>}
                            </div>
                            {/* Your Email */}
                            <div className="col-span-6 sm:col-span-3 md:col-span-4">
                                <label className="block text-sm font-semibold">Your Email</label>
                                <input {...register("serviceHolderEmail", { required: "Your Email is required" })}
                                    readOnly disabled className={`input input-sm input-bordered w-full ${errors.serviceHolderEmail ? 'input-error' : ''}`} />
                                {errors.serviceHolderEmail && <p className="text-red-500 text-sm">{errors.serviceHolderEmail.message}</p>}
                            </div>
                            {/* Service Taking Date */}
                            <div className="col-span-6 sm:col-span-3 md:col-span-4">
                                <label className="block text-sm font-semibold">Service Taking Date</label>
                                <input type="text" value={selectedDate ? selectedDate.toLocaleDateString('en-CA') : ""} placeholder="YYYY-MM-DD"
                                    onClick={() => setShowCalendar(!showCalendar)} className={`input input-sm input-bordered w-full cursor-pointer ${errors.serviceTakingDate ? 'border-red-500' : ''}`} />
                                <input type="hidden" {...register("serviceTakingDate", { required: "Service Taking Date is required" })} />
                                {errors.serviceTakingDate && (<p className="text-red-500 text-sm">{errors.serviceTakingDate.message}</p>)}

                                {showCalendar && (
                                    <div className="relative mt-2">
                                        <DayPicker mode="single" disabled={[{ before: threeDaysLater }, isFriday]} selected={selectedDate} onSelect={handleDateSelect} modifiers={{
                                            selectable: (date) => date >= threeDaysLater && !isFriday(date)
                                        }} />
                                    </div>
                                )}
                            </div>

                            {/* Special Instructions For Provider */}
                            <div className="col-span-full">
                                <label className="block text-sm font-semibold">Special Instructions</label>
                                <textarea {...register("serviceDescription", {
                                    required: "Special Instructions are required",
                                    validate: {
                                        minWords: value => value.split(' ').filter(Boolean).length >= 6 || "At least 6 words are required",
                                        maxChars: value => value.length <= 100 || "Maximum 100 characters allowed"
                                    }
                                })} rows={2} style={{ minHeight: '3rem', maxHeight: '9rem' }} className={`textarea textarea-bordered w-full ${errors.serviceDescription ? 'input-error' : ''}`} />
                                {errors.serviceDescription && <p className="text-red-500 text-sm">{errors.serviceDescription.message}</p>}
                            </div>
                        </div>
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn btn-warning text-white">Not Now</button>
                            </form>
                            <button type="submit" className="btn bg-custom-blue-5 hover:bg-custom-blue-3 text-white">
                                {loading ? <span className="loading loading-spinner loading-xs"></span> : 'Purchase'}
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default ServicesDetails;
