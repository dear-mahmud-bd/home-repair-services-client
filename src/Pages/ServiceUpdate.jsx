import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import Loading from "../Layouts/Shared/Loading";
import { showToast } from "../utility/useToast";
import useAxiosSecure from "../hooks/useAxiosSecure";


const ServiceUpdate = () => {
    const axiosSecure = useAxiosSecure();
    const [loading, setLoading] = useState(false);
    const { user } = useContext(AuthContext);
    const service = useLoaderData();

    const navigate = useNavigate();
    // console.log(service);

    const {
        _id,
        serviceProviderEmail,
        serviceName,
        serviceImage,
        serviceLocation,
        servicePrice,
        serviceDescription,
    } = service;

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    useEffect(() => {
        setValue('serviceProviderEmail', user?.email || '');
        setValue('serviceProviderName', user?.displayName || '');
        setValue('serviceProviderImage', user?.photoURL || '');
        setValue('serviceName', serviceName || '');
        setValue('serviceImage', serviceImage || '');
        setValue('serviceLocation', serviceLocation || '');
        setValue('servicePrice', servicePrice || '');
        setValue('serviceDescription', serviceDescription || '');
    }, [user, serviceName, serviceImage, serviceLocation, servicePrice, serviceDescription, setValue]);


    const handleUpdateService = (formData) => {
        const data = {
            ...formData,
            servicePrice: parseFloat(formData.servicePrice),
        };
        // console.log(data);
        setLoading(true);
        // axios.put(`http://localhost:5000/services/${_id}`, { withCredentials: true }, data)
        axiosSecure.put(`/services/${_id}`, data)
            .then((res) => {
                const data = res.data;
                if (data.modifiedCount > 0) {
                    showToast('success', 'Service Update Successfully');
                    navigate('/services-manage');
                } else {
                    showToast('error', 'Service was not Updated');
                }
            })
            .catch(() => { showToast('error', 'An error occurred while updating the Service.') })
            .finally(() => { setLoading(false) });
    };

    if (loading) return <Loading />;

    if (user?.email !== serviceProviderEmail) {
        return (
            <div className="text-center flex flex-col items-center justify-center h-60 md:h-96">
                <Helmet>
                    <title>Unauthorised</title>
                </Helmet>
                <h1 className="text-4xl font-bold text-red-600">Unauthorised Access</h1>
            </div>
        );
    }
    if (!service) {
        return (
            <div className="text-center flex flex-col items-center justify-center h-60 md:h-96">
                <Helmet>
                    <title>Service Not Found</title>
                </Helmet>
                <h1 className="text-4xl font-bold text-red-600">Service Not Found</h1>
                <p className="text-lg font-semibold text-gray-600 mt-2">Sorry, the service you are updating for does not exist.</p>
            </div>
        );
    }
    return (
        <div className="max-w-5xl mx-auto my-5">
            <Helmet>
                <title>Update Your Service</title>
            </Helmet>
            <h3 className="font-bold text-3xl text-center mb-4">Update Your Service</h3>

            <form className="space-y-5" onSubmit={handleSubmit(handleUpdateService)}>
                <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-12 gap-3">
                    <div className="col-span-6 sm:col-span-3 md:col-span-4">
                        <label className="block text-sm font-semibold">Provider Name</label>
                        <input {...register("serviceProviderName", { required: "Provider Name is required" })}
                            readOnly disabled className={`input input-sm input-bordered w-full ${errors.serviceProviderName ? 'input-error' : ''}`} />
                        {errors.serviceProviderName && <p className="text-red-500 text-sm">{errors.serviceProviderName.message}</p>}
                    </div>
                    <div className="col-span-6 sm:col-span-3 md:col-span-4">
                        <label className="block text-sm font-semibold">Provider Email</label>
                        <input {...register("serviceProviderEmail", { required: "Provider Email is required" })}
                            readOnly disabled className={`input input-sm input-bordered w-full ${errors.serviceProviderEmail ? 'input-error' : ''}`} />
                        {errors.serviceProviderEmail && <p className="text-red-500 text-sm">{errors.serviceProviderEmail.message}</p>}
                    </div>
                    <div className="col-span-6 sm:col-span-3 md:col-span-4">
                        <label className="block text-sm font-semibold">Provider Img URL</label>
                        <input  {...register("serviceProviderImage", { required: "Provider Image URL is required" })}
                            defaultValue={user?.photoURL || ""} readOnly disabled className={`input input-sm input-bordered w-full ${errors.serviceProviderImage ? 'input-error' : ''}`} />
                        {errors.serviceProviderImage && <p className="text-red-500 text-sm">{errors.serviceProviderImage.message}</p>}
                    </div>
                    <div className="col-span-6 sm:col-span-3 md:col-span-3">
                        <label className="block text-sm font-semibold">Service Name</label>
                        <input {...register("serviceName", { required: "Service Name is required" })}
                            type="text" className={`input input-sm input-bordered w-full ${errors.serviceName ? 'input-error' : ''}`} />
                        {errors.serviceName && <p className="text-red-500 text-sm">{errors.serviceName.message}</p>}
                    </div>
                    <div className="col-span-6 sm:col-span-3 md:col-span-4">
                        <label className="block text-sm font-semibold">Service Image URL</label>
                        <input {...register("serviceImage", { required: "Service Image URL is required" })}
                            type="text" className={`input input-sm input-bordered w-full ${errors.serviceImage ? 'input-error' : ''}`} />
                        {errors.serviceImage && <p className="text-red-500 text-sm">{errors.serviceImage.message}</p>}
                    </div>
                    <div className="col-span-6 sm:col-span-3 md:col-span-3">
                        <label className="block text-sm font-semibold">Service Area</label>
                        <input {...register("serviceLocation", { required: "Service Area is required" })}
                            type="text" className={`input input-sm input-bordered w-full ${errors.serviceLocation ? 'input-error' : ''}`} />
                        {errors.serviceLocation && <p className="text-red-500 text-sm">{errors.serviceLocation.message}</p>}
                    </div>
                    <div className="col-span-6 sm:col-span-3 md:col-span-2">
                        <label className="block text-sm font-semibold">Service Fee</label>
                        <input step="0.01" type="number" {...register("servicePrice", {
                            required: "Service Fee is required",
                            min: {
                                value: 10,
                                message: 'Fee must be at least $10',
                            },
                            validate: value => value > 0 || 'Fee must be a positive number',
                        })}
                            className={`input input-sm input-bordered w-full ${errors.servicePrice ? 'input-error' : ''}`} />
                        {errors.servicePrice && <p className="text-red-500 text-sm">{errors.servicePrice.message}</p>}
                    </div>
                    <div className="col-span-full">
                        <label className="block text-sm font-semibold">Special Instructions</label>
                        <textarea {...register("serviceDescription", {
                            required: "Special Instructions are required",
                            validate: {
                                minWords: value => value.split(' ').filter(Boolean).length >= 6 || "At least 6 words are required",
                                minChars: value => value.length >= 60 || "Minimum 60 characters to make sentence",
                                maxChars: value => value.length <= 100 || "Maximum 100 characters allowed"
                            }
                        })} rows={2} style={{ minHeight: '3rem', maxHeight: '9rem' }} className={`textarea textarea-bordered w-full ${errors.serviceDescription ? 'input-error' : ''}`} />
                        {errors.serviceDescription && <p className="text-red-500 text-sm">{errors.serviceDescription.message}</p>}
                    </div>
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="btn bg-custom-blue-5 hover:bg-custom-blue-3 text-white">
                        {loading ? <span className="loading loading-spinner loading-xs"></span> : 'Update'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ServiceUpdate;