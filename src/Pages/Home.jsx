import { Helmet } from "react-helmet";
import Banner from "../Layouts/Home/Banner";
import Faq from "../Layouts/Home/Faq";
import ServicesCategory from "../Layouts/Home/ServicesCategory";
import Survey from "../Layouts/Home/Survey";
import PopularServices from "../Layouts/Home/PopularServices";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <ServicesCategory></ServicesCategory>
            <PopularServices></PopularServices>
            <Survey></Survey>
            <Faq></Faq>
        </div>
    );
};

export default Home;