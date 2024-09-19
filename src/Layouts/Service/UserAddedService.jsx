import PropTypes from 'prop-types';

const UserAddedService = ({ service }) => {
    const {
        serviceImage,
        serviceName,
        servicePrice,
        serviceLocation,
    } = service;
    return (
        <tr>
            <td>
                <div className="flex items-center gap-3 avatar">
                    <div className="w-14 rounded">
                        <img src={serviceImage} alt={serviceName} />
                    </div>
                    <span className="font-semibold">{serviceName}</span>
                </div>
            </td>
            <td>
                <div className="font-semibold text-gray-400">
                    $ {servicePrice}
                </div>
            </td>
            <td>
                <div className="font-semibold text-gray-400">
                    {serviceLocation}
                </div>
            </td>
            <td>
                <button className="btn btn-error text-white">Delete</button>
            </td>
            <td>
                <button className="btn btn-info text-white">Update</button>
            </td>
        </tr>
    );
};

UserAddedService.propTypes = {
    service: PropTypes.object,
};
export default UserAddedService;