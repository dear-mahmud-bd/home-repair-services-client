import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../Shared/Loading";
import ServiceCard from "../Service/ServiceCard";
import { Link } from "react-router-dom";


const PopularServices = () => {
    const [loading, setLoading] = useState(true);
    const [popularServices, setPopularServices] = useState([]);

    const url = 'https://home-repair-services-server-02.vercel.app/popular-services';
    useEffect(() => {
        axios.get(url)
            .then((res) => {
                // console.log(res.data);
                setPopularServices(res.data);
                setLoading(false);
            })
    }, [url])

    if (loading) return <Loading />;

    return (
        <div className="my-10">
            <h2 className="text-center text-3xl font-semibold underline decoration-custom-blue-5 underline-offset-8">Popular Service</h2>
            <div className="my-5 grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
                {
                    popularServices.map((service, index) => <ServiceCard key={index} service={service} />)
                }
            </div>
            <div className="flex justify-center mb-5">
                <Link to='/services' className="btn bg-custom-blue-5 hover:bg-custom-blue-3 text-white">
                    See All Services
                </Link>
            </div>
        </div >
    );
};

export default PopularServices;