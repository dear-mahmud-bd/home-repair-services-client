
import Marquee from 'react-fast-marquee';

import cleaning from '../../assets/cleaning.png';
import electricity from '../../assets/electricity.png';
import painting from '../../assets/painting.png';
import plumbing from '../../assets/plumbing.png';
import renovation from '../../assets/renovation.png';
import roofing from '../../assets/roofing.png';

const ServicesCategory = () => {
    return (
        <div className='my-10'>
            <h2 className="text-center text-3xl font-semibold mb-8 underline decoration-custom-blue-5 underline-offset-8">Our Service Category</h2>
            <Marquee pauseOnHover={true} speed={100} gradientWidth={50}>
            <div className="flex mb-6 text-center">
                <div className="w-72 p-6 border rounded-md space-y-3 mx-3">
                    <div className="flex justify-center items-center mb-1">
                        <img src={cleaning} alt="" />
                    </div>
                    <p className="text-2xl border-t-2 font-bold">Cleaning</p>
                </div>
                <div className="w-72 p-6 border rounded-md space-y-3 mx-3">
                    <div className="flex justify-center items-center mb-1">
                    <img src={electricity} alt="" />
                    </div>
                    <p className="text-2xl border-t-2 font-bold">Electricity</p>
                </div>
                <div className="w-72 p-6 border rounded-md space-y-3 mx-3">
                    <div className="flex justify-center items-center mb-1">
                    <img src={painting} alt="" />
                    </div>
                    <p className="text-2xl border-t-2 font-bold">Painting</p>
                </div>
                <div className="w-72 p-6 border rounded-md space-y-3 mx-3">
                    <div className="flex justify-center items-center mb-1">
                    <img src={plumbing} alt="" />
                    </div>
                    <p className="text-2xl border-t-2 font-bold">Plumbing</p>
                </div>
                <div className="w-72 p-6 border rounded-md space-y-3 mx-3">
                    <div className="flex justify-center items-center mb-1">
                    <img src={renovation} alt="" />
                    </div>
                    <p className="text-2xl border-t-2 font-bold">Renovation</p>
                </div>
                <div className="w-72 p-6 border rounded-md space-y-3 mx-3">
                    <div className="flex justify-center items-center mb-1">
                    <img src={roofing} alt="" />
                    </div>
                    <p className="text-2xl border-t-2 font-bold">Roofing</p>
                </div>
            </div>
            </Marquee>
        </div>
    );
};

export default ServicesCategory;