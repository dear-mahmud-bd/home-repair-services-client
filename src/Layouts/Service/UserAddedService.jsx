import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import { showToast } from '../../utility/useToast';
import { Link } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const UserAddedService = ({ service, services, setServices }) => {
    const axiosSecure = useAxiosSecure();
    // console.log(service);
    const {
        _id,
        serviceName,
        serviceImage,
        serviceLocation,
        servicePrice,
    } = service;

    const handleSpotDelete = (name, _id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: `You want to delete '${name}' spot! `,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33333',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // axios.delete(`http://localhost:5000/services/${_id}`, { withCredentials: true })
                axiosSecure.delete(`/services/${_id}`)
                    .then(res => {
                        const data = res.data;
                        // console.log(data);
                        if (data.deletedCount > 0) {
                            showToast('success', 'Your service has been deleted.');
                            const remaining = services.filter(rem => rem._id !== _id);
                            setServices(remaining);
                        }
                    })
                    .catch(() => { showToast('error', 'Something Wrong!! Try Again...') });
            }
        })
    };

    return (
        <>
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
                    <button onClick={() => handleSpotDelete(serviceName, _id)} className="btn btn-error text-white">Delete</button>
                </td>
                <td>
                    <Link to={`/services-update/${_id}`}>
                        <button className="btn btn-info text-white">Update</button>
                    </Link>
                </td>
            </tr>
        </>
    );
};

UserAddedService.propTypes = {
    service: PropTypes.object,
    services: PropTypes.array.isRequired,
    setServices: PropTypes.func.isRequired,
};
export default UserAddedService;