import { Helmet } from "react-helmet";
import Banner from "../Layouts/Home/Banner";
import Faq from "../Layouts/Home/Faq";
import ServicesCategory from "../Layouts/Home/ServicesCategory";
import Survey from "../Layouts/Home/Survey";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <ServicesCategory></ServicesCategory>
            <Survey></Survey>
            <Faq></Faq>
        </div>
    );
};

export default Home;