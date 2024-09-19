import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import { sweetToast } from "../utility/useToast";
import Loading from "../Layouts/Shared/Loading";
import { Link } from "react-router-dom";
import UserAddedService from "../Layouts/Service/UserAddedService";


const ServiceManage = () => {
    const { user } = useContext(AuthContext);

    const [loading, setLoading] = useState(true);
    const [services, setServices] = useState([]);

    const url = `http://localhost:5000/user-services?user_email=${user?.email}`;
    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setServices(response.data);
                setLoading(false);
            })
            .catch(() => {
                sweetToast('Error!', 'Something Wrong!!', 'error');
                setLoading(false);
            });
    }, [url]);

    if (loading) return <Loading />;
    return (
        <div className="max-w-5xl mx-auto">
            <Helmet>
                <title>Manage My Services</title>
            </Helmet>

            <h2 className="text-center text-3xl font-semibold mb-8 underline decoration-customLightBrown underline-offset-8">My added services</h2>

            <div className="overflow-x-auto my-5">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Service Name</th>
                            <th>Fee</th>
                            <th>Service Area</th>
                            <th>Delete Action</th>
                            <th>Update Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            services.map((service, index) => <UserAddedService key={index} service={service} />)
                        }
                    </tbody>
                </table>

            </div>

            {
                services.length == 0 &&
                <div className="my-10 text-center">
                    <p className=" text-3xl font-semibold text-custom-blue-5">
                        You have not added any services yet <br />
                    </p>
                    <Link to='/services-add' className="btn btn-sm bg-custom-blue-5 hover:bg-custom-blue-3 text-white mt-2">Add Service</Link>
                </div>
            }
        </div>
    );
};

export default ServiceManage;