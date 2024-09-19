import PropTypes from 'prop-types';
import { AiOutlineFileDone } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    // console.log(service);
    const {
        _id,
        serviceImage,
        serviceName,
        serviceDescription,
        servicePrice,
        serviceProviderName,
        serviceProviderImage,
        serviceLocation,
        serviceTotalOrder,
    } = service;

    const navigate = useNavigate();
    const handleViewDetails = (_id) => {
        // console.log(_id);
        navigate(`/services/${_id}`)
    };

    return (
        <div className="border-[1px] max-w-md mx-auto rounded-xl overflow-hidden lg:max-w-full">
            <div className="lg:flex">
                <div className="flex lg:flex-shrink-0 justify-center items-center rounded-lg">
                    <img className="h-[288px] w-full lg:h-full lg:w-48 p-4 object-cover rounded-lg" src={serviceImage} alt={serviceName} />
                </div>
                <div className="p-4 flex flex-col justify-center">
                    <h2 className="text-xl font-semibold ">{serviceName}</h2>
                    <p className="text-gray-700 mt-2">{serviceDescription}</p>
                    <p className=" mt-2 font-semibold flex justify-between">
                        <span className='text-custom-blue-3 flex items-center'><IoLocationOutline /> - {serviceLocation}</span>
                        <span className='text-red-400 flex items-center'>Charge - <RiMoneyDollarCircleLine /> {servicePrice}</span>
                    </p>
                    <div className="flex justify-between flex-col mt-2 pt-2 lg:flex-row lg:items-center border-t">
                        <div className="avatar flex items-center gap-1">
                            <div className="ring-custom-blue-4 ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                                <img src={serviceProviderImage} alt={serviceProviderName} />
                            </div>
                            <span className="ml-2">Provider: {serviceProviderName}</span>
                        </div>
                        <div className='flex items-center'>
                            <AiOutlineFileDone />{serviceTotalOrder}
                        </div>
                    </div>
                    <button onClick={() => handleViewDetails(_id)} className="mt-4 bg-custom-blue-5 hover:bg-custom-blue-3 text-white font-bold py-2 px-4 rounded">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

ServiceCard.propTypes = {
    service: PropTypes.object,
};
export default ServiceCard;