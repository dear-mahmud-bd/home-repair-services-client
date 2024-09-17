import { Helmet } from "react-helmet";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { useLoaderData, useParams } from "react-router-dom";


const ServicesDetails = () => {
    const services = useLoaderData();
    const { _id } = useParams();
    // console.log("url: ", _id, services);

    const service = services.find(service => service.serviceId === _id);
    // console.log(service);
    const {
        // serviceId,
        serviceImage,
        serviceName,
        serviceDescription,
        servicePrice,
        serviceProviderName,
        serviceProviderImage,
        serviceLocation,
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
                            <div className=" text-center space-y-2">
                                <img src={serviceProviderImage} alt="Provider" className="w-24 h-24 shadow-xl rounded-full mx-auto" />
                                <h2 className="text-xl font-semibold">Service Provider: {serviceProviderName}</h2>
                                <p className="text-md text-gray-500">Area Covered: {serviceLocation}</p>
                            </div>
                            <p className="mt-4">{serviceDescription}</p>
                            <div className="mt-4 flex justify-between items-center">
                                <span className="text-lg font-semibold flex items-center">Charge :<RiMoneyDollarCircleLine />{servicePrice}</span>
                                <button className="ml-4 bg-custom-blue-5 hover:bg-custom-blue-3 text-white font-bold py-2 px-4 rounded">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;