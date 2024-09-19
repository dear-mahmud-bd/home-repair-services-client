import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../providers/AuthProvider";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { sweetToast } from "../utility/useToast";

const ServiceAdd = () => {
    const [loading, setLoading] = useState(false);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    useEffect(() => {
        setValue('providerEmail', user?.email || '');
        setValue('providerName', user?.displayName || '');
        setValue('providerImg', user?.photoURL || '');
    }, [user, setValue]);

    const onSubmit = (formData) => {
        const data = {
            ...formData,
            serviceFee: parseFloat(formData.serviceFee),
            serviceTotalOrder: 0
        };
        setLoading(true);
        // console.log(data);
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                // console.log(res?.data);
                setLoading(false);
                if (res?.data.acknowledged) {
                    sweetToast('Success!', 'Service Added Successfully', 'success');
                    navigate('/services-manage');
                } else {
                    sweetToast('Error!', 'Something Wrong!!', 'error');
                }
            })
            .catch(() => {
                setLoading(false);
                sweetToast('Error!', 'Something Wrong!!', 'error');
            })
    };

    return (
        <div className="max-w-5xl mx-auto my-10">
            <Helmet>
                <title>Add Your Service</title>
            </Helmet>
            <h3 className="font-bold text-3xl text-center mb-4">Add Service as a provider...</h3>

            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-12 gap-3">
                    <div className="col-span-6 sm:col-span-3 md:col-span-4">
                        <label className="block text-sm font-semibold">Provider Name</label>
                        <input {...register("providerName", { required: "Provider Name is required" })}
                            readOnly disabled className={`input input-sm input-bordered w-full ${errors.providerName ? 'input-error' : ''}`} />
                        {errors.providerName && <p className="text-red-500 text-sm">{errors.providerName.message}</p>}
                    </div>
                    <div className="col-span-6 sm:col-span-3 md:col-span-4">
                        <label className="block text-sm font-semibold">Provider Email</label>
                        <input {...register("providerEmail", { required: "Provider Email is required" })}
                            readOnly disabled className={`input input-sm input-bordered w-full ${errors.providerEmail ? 'input-error' : ''}`} />
                        {errors.providerEmail && <p className="text-red-500 text-sm">{errors.providerEmail.message}</p>}
                    </div>
                    <div className="col-span-6 sm:col-span-3 md:col-span-4">
                        <label className="block text-sm font-semibold">Provider Img URL</label>
                        <input  {...register("providerImg", { required: "Provider Image URL is required" })}
                            defaultValue={user?.photoURL || ""} readOnly disabled className={`input input-sm input-bordered w-full ${errors.providerImg ? 'input-error' : ''}`} />
                        {errors.providerImg && <p className="text-red-500 text-sm">{errors.providerImg.message}</p>}
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
                        <input {...register("serviceArea", { required: "Service Area is required" })}
                            type="text" className={`input input-sm input-bordered w-full ${errors.serviceArea ? 'input-error' : ''}`} />
                        {errors.serviceArea && <p className="text-red-500 text-sm">{errors.serviceArea.message}</p>}
                    </div>
                    <div className="col-span-6 sm:col-span-3 md:col-span-2">
                        <label className="block text-sm font-semibold">Service Fee</label>
                        <input step="0.01" type="number" {...register("serviceFee", {
                            required: "Service Fee is required",
                            min: {
                                value: 10,
                                message: 'Fee must be at least $10',
                            },
                            validate: value => value > 0 || 'Fee must be a positive number',
                        })}
                            className={`input input-sm input-bordered w-full ${errors.serviceFee ? 'input-error' : ''}`} />
                        {errors.serviceFee && <p className="text-red-500 text-sm">{errors.serviceFee.message}</p>}
                    </div>
                    <div className="col-span-full">
                        <label className="block text-sm font-semibold">Special Instructions</label>
                        <textarea {...register("specialInstructions", {
                            required: "Special Instructions are required",
                            validate: {
                                minWords: value => value.split(' ').filter(Boolean).length >= 6 || "At least 6 words are required",
                                maxChars: value => value.length <= 100 || "Maximum 100 characters allowed"
                            }
                        })} rows={2} style={{ minHeight: '3rem', maxHeight: '9rem' }} className={`textarea textarea-bordered w-full ${errors.specialInstructions ? 'input-error' : ''}`} />
                        {errors.specialInstructions && <p className="text-red-500 text-sm">{errors.specialInstructions.message}</p>}
                    </div>
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="btn bg-custom-blue-5 hover:bg-custom-blue-3 text-white">
                        {loading ? <span className="loading loading-spinner loading-xs"></span> : 'Add A Service'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ServiceAdd;
