import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import { sweetToast } from "../utility/useToast";
import Loading from "../Layouts/Shared/Loading";


const ServiceToDo = () => {
    const { user } = useContext(AuthContext);

    const [loading, setLoading] = useState(true);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/provider-bookings?user_email=${user?.email}`;
    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setBookings(response.data);
                setLoading(false);
                // console.log(bookings);

            })
            .catch(() => {
                sweetToast('Error!', 'Something Wrong!!', 'error');
                setLoading(false);
            });
    }, [url]);

    console.log(bookings);

    if (loading) return <Loading />;
    return (
        <div className="max-w-5xl mx-auto">
            <Helmet>
                <title>Ask For Services</title>
            </Helmet>

            <h2 className="text-center text-3xl font-semibold mb-8 underline decoration-customLightBrown underline-offset-8">Asking for my services</h2>

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
                                        <button className="btn btn-xs btn-error text-white">{booking?.status}</button>
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
                    <p className=" text-3xl font-semibold text-customSandyBrown">
                        No one has requested your service yet
                    </p>
                </div>
            }

        </div>
    );
};

export default ServiceToDo;