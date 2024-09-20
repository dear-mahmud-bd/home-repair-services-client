import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../providers/AuthProvider";
import { sweetToast } from "../utility/useToast";
import Loading from "../Layouts/Shared/Loading";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";


const ServiceToDo = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);

    const [loading, setLoading] = useState(true);
    const [bookings, setBookings] = useState([]);

    const url = `/provider-bookings?user_email=${user?.email}`;
    useEffect(() => {
        // axios.get(url)
        axiosSecure.get(url)
            .then((response) => {
                setBookings(response.data);
                setLoading(false);
                // console.log(bookings);

            })
            .catch(() => {
                sweetToast('Error!', 'Something Wrong!!', 'error');
                setLoading(false);
            });
    }, [axiosSecure, url]);

    // console.log(bookings);
    const handleStatusChange = (bookingId, newStatus) => {
        Swal.fire({
            title: 'Are you sure?',
            text: `You want to update Status`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#008000',
            cancelButtonColor: '#d33333',
            confirmButtonText: 'Yes!',
            cancelButtonText: 'No'
        }).then((result) => {
            if (result.isConfirmed) {
                setBookings((prevBookings) =>
                    prevBookings.map((booking) =>
                        booking._id === bookingId ? { ...booking, status: newStatus } : booking
                    )
                );
                // Optionally, send a request to update the status in the backend
                // axios.patch(`http://localhost:5000/bookings-status/${bookingId}`, { status: newStatus })
                axiosSecure.get(`/bookings-status/${bookingId}`)
                    .then(() => {
                        sweetToast('Success!', `Status updated to ${newStatus}`, 'success');
                    })
                    .catch(() => {
                        sweetToast('Error!', 'Failed to update status', 'error');
                    });
            }
        })
    };

    if (loading) return <Loading />;
    return (
        <div className="max-w-5xl mx-auto">
            <Helmet>
                <title>Ask For Services</title>
            </Helmet>

            <h2 className="text-center text-3xl font-semibold mb-8 underline decoration-custom-blue-5 underline-offset-8">Asking for my services</h2>

            <div className="overflow-x-auto my-5">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Requestor</th>
                            <th>Service Name+ID</th>
                            <th>Fee</th>
                            <th>Date Requested</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            bookings.map((booking, index) => (
                                <tr key={index}>
                                    <td>
                                        <div className="flex items-center gap-3 avatar">
                                            <div className="w-14 rounded">
                                                <img src={booking?.serviceHolderImage} alt={booking?.serviceHolderName} />
                                            </div>
                                            <span>
                                                <span className="font-semibold">{booking?.serviceHolderName}</span><br />
                                                <span className="text-sm opacity-50">{booking?.serviceHolderEmail}</span>
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="font-semibold">
                                            <span className="text-sm opacity-90">{booking?.serviceName}</span>
                                            <br />
                                            <span className="text-xs opacity-40"> {booking?.serviceId} </span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="font-semibold text-gray-400">
                                            $ {booking?.serviceFee}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="font-semibold text-gray-400">
                                            {booking?.serviceTakingDate}
                                        </div>
                                    </td>
                                    <td>
                                        {/* Dropdown for changing the status */}
                                        <select
                                            value={booking?.status}
                                            onChange={(e) => handleStatusChange(booking._id, e.target.value)}
                                            className="font-semibold select select-bordered select-xs"
                                            disabled={booking?.status === "completed"} // Disable dropdown if status is 'completed'
                                        >
                                            <option className="font-semibold" value="pending" disabled={booking?.status !== "pending"}>Pending</option>
                                            <option className="font-semibold" value="working" disabled={booking?.status === "completed" || booking?.status === "working"}>Working</option>
                                            <option className="font-semibold" value="completed" disabled={booking?.status !== "working"}>Completed</option>
                                        </select>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>
            {
                bookings.length == 0 &&
                <div className="my-10 text-center">
                    <p className=" text-3xl font-semibold text-custom-blue-3">
                        No one has requested your service yet
                    </p>
                </div>
            }

        </div>
    );
};

export default ServiceToDo;