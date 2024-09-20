import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"; // Use react-hook-form to manage the form
import ServiceCard from "../Layouts/Service/ServiceCard";
import { Helmet } from "react-helmet";
import Loading from "../Layouts/Shared/Loading";
import { showToast } from "../utility/useToast";

const AllServices = () => {
    const [loading, setLoading] = useState(true);
    const [services, setServices] = useState([]);
    const { register, handleSubmit } = useForm();

    const fetchServices = async (searchTerm = "") => {
        setLoading(true);
        try {
            const url = `https://home-repair-services-server-02.vercel.app/services${searchTerm ? `?service_name=${searchTerm}` : ""}`;
            const res = await axios.get(url);
            setServices(res.data);
        } catch {
            showToast('error', 'Error fetching services');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchServices();
    }, []);

    const onSubmit = (data) => {
        const searchTerm = data.search;
        fetchServices(searchTerm);
    };

    if (loading) return <Loading />;

    return (
        <section className="my-5">
            <Helmet>
                <title>All Services</title>
            </Helmet>

            <div className="border-b-2 border-dashed text-center space-y-4 pb-5">
                {/* Search input with react-hook-form */}
                <form onSubmit={handleSubmit(onSubmit)} className="flex items-center w-3/4 md:w-1/2 mx-auto">
                    <input type="text" name="search" placeholder="Search services..." {...register("search")} className="rounded-md border border-gray-300 px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-custom-blue-3" />
                    <button type="submit" className="bg-custom-blue-3 text-white px-4 py-2 rounded-md ml-4 focus:outline-none focus:ring-1 focus:ring-custom-blue-3" >
                        Search
                    </button>
                </form>
            </div>

            {/* Display services */}
            <div className="my-5 grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
                {services.length > 0 ? (
                    services.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))
                ) : (
                    <div className="my-10 text-center">
                        <span className=" text-3xl font-semibold text-custom-blue-3">
                            No services found
                        </span>
                    </div>
                )}
            </div>
        </section>
    );
};

export default AllServices;
