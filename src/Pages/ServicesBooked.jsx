import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../providers/AuthProvider";
import { sweetToast } from "../utility/useToast";
import Loading from "../Layouts/Shared/Loading";
import { Link } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";


const ServicesBooked = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);

    const [loading, setLoading] = useState(true);
    const [bookings, setBookings] = useState([]);

    // const url = `http://localhost:5000/holder-bookings?user_email=${user?.email}`;
    useEffect(() => {
        if(user?.email){
            // axios.get(url, { withCredentials: true })
            axiosSecure.get(`/holder-bookings?user_email=${user.email}`)
                .then((response) => {
                    setBookings(response.data);
                    setLoading(false);
                })
                .catch(() => {
                    sweetToast('Error!', 'Something Wrong!!', 'error');
                    setLoading(false);
                });
        }
    }, [user?.email, axiosSecure]);

    // console.log(bookings);

    if (loading) return <Loading />;
    return (
        <div className="max-w-5xl mx-auto">
            <Helmet>
                <title>My Booked Services</title>
            </Helmet>

            <h2 className="text-center text-3xl font-semibold mb-8 underline decoration-custom-blue-5 underline-offset-8">My booked services</h2>

            <div className="overflow-x-auto my-5">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Service Name</th>
                            <th>Provider Email</th>
                            <th>Provider Name</th>
                            <th>Fee</th>
                            <th>Taking Date</th>
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
                                                <img src={booking?.serviceImage} alt={booking?.serviceName} />
                                            </div>
                                            <span className="font-semibold">{booking?.serviceName}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="font-semibold text-gray-400">
                                            {booking?.serviceProviderEmail}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="font-semibold text-gray-400">
                                            {booking?.serviceProviderName}
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
                                        <span className={`pb-1 badge ${booking?.status === 'pending' ? 'badge-error' :
                                            booking?.status === 'working' ? 'badge-warning' :
                                                booking?.status === 'completed' ? 'badge-success' : ''
                                            } gap-2 m-1 font-semibold text-white`}>{booking?.status}</span>
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
                        You have not booked any services yet <br />
                    </p>
                    <Link to='/services' className="btn btn-sm bg-custom-blue-5 hover:bg-custom-blue-3 text-white mt-2">See All Services</Link>
                </div>
            }

        </div>
    );
};

export default ServicesBooked;