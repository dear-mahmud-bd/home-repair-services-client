

const Faq = () => {
    return (
        <div className="my-10">
            <div className="flex flex-col md:flex-row items-center gap-10 p-4 md:p-10">
                <p className="md:w-1/2 sm:text-4xl text-3xl font-extrabold text-base-content">Frequently Asked Questions</p>
                <div className="container mx-auto p-4">
                    <div className="join join-vertical w-full">
                        <div className="collapse collapse-plus join-item border-base-300 border-b-2">
                            <input type="radio" name="my-accordion-4" defaultChecked />
                            <div className="collapse-title text-xl font-medium">Cleaning Services</div>
                            <div className="collapse-content">
                                <p>
                                    Our cleaning services ensure a spotless environment, using eco-friendly products and advanced techniques tailored to protect and maintain your spaces.
                                </p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus join-item border-base-300 border-b-2">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">Electrical Services</div>
                            <div className="collapse-content">
                                <p>
                                    Rely on our certified electricians for all electrical needs, from installations to repairs, ensuring safety and energy efficiency.
                                </p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus join-item border-base-300 border-b-2">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">Painting Solutions</div>
                            <div className="collapse-content">
                                <p>
                                    Explore our range of painting services offering high-quality finishes and color consultations to beautify your property.
                                </p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus join-item border-base-300 border-b-2">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">Plumbing Services</div>
                            <div className="collapse-content">
                                <p>
                                    From leak fixes to new installations, our experienced plumbers provide reliable and prompt services to address all your plumbing issues.
                                </p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus join-item border-base-300 border-b-2">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">Renovation Projects</div>
                            <div className="collapse-content">
                                <p>
                                    Enhance your living or workspace with our innovative renovation solutions, designed to meet your needs and exceed expectations.
                                </p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus join-item border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">Roofing Services</div>
                            <div className="collapse-content">
                                <p>
                                    Secure your property with our top-tier roofing services, offering durable materials and expert installation to withstand the elements.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;