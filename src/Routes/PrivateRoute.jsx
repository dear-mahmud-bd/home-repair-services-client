import { useContext } from "react";
import PropTypes from 'prop-types';
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Layouts/Shared/Loading";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname);

    if (loading) return <Loading />
    if (user) return children;

    return <Navigate state={location.pathname} to="/login"></Navigate>;
};
PrivateRoute.propTypes = {
    children: PropTypes.node,
};
export default PrivateRoute;