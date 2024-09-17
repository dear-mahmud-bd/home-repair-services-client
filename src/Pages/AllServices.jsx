import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "../Layouts/Service/ServiceCard";
import { Helmet } from "react-helmet";


const AllServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        axios.get('services.json')
            .then((res) => {
                // console.log(res.data);
                setServices(res.data);
            })
    }, [])
    return (
        <section className="my-5">
            <Helmet>
                <title>All Services</title>
            </Helmet>

            <div className=" border-b-2 border-dashed text-center space-y-4 pb-5">
                <div className="flex items-center w-3/4 md:w-1/2 mx-auto">
                    <input type="text" name="search" className="rounded-md border border-gray-300 px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-custom-blue-3" />
                    <button className="bg-custom-blue-3 text-white px-4 py-2 rounded-md ml-4 focus:outline-none focus:ring-1 focus:ring-custom-blue-3">
                        Search
                    </button>
                </div>
            </div>

            <div className="my-5 grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
                {
                    services.map((service, index) => <ServiceCard key={index} service={service} />)
                }
            </div>
        </section>
    );
};

export default AllServices;