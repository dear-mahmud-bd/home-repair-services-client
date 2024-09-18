import { Helmet } from "react-helmet";


const ServiceAdd = () => {

    return (
        <div className="max-w-5xl mx-auto my-10">
            <Helmet>
                <title>Add Your Service</title>
            </Helmet>
            <h3 className="font-bold text-3xl text-center mb-4">Add Service as a provider...</h3>

            <form className="space-y-6">
                <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-12 gap-4">
                    <div className="col-span-6 sm:col-span-3 md:col-span-4">
                        <label className="block text-sm font-semibold">Provider Name</label>
                        <input className="input input-sm input-bordered w-full" />
                    </div>
                    <div className="col-span-6 sm:col-span-3 md:col-span-4">
                        <label className="block text-sm font-semibold">Provider Email</label>
                        <input className="input input-sm input-bordered w-full" />
                    </div>
                    <div className="col-span-6 sm:col-span-3 md:col-span-4">
                        <label className="block text-sm font-semibold">Provider Img URL</label>
                        <input className="input input-sm input-bordered w-full" />
                    </div>
                    <div className="col-span-6 sm:col-span-3 md:col-span-3">
                        <label className="block text-sm font-semibold">Service Name</label>
                        <input type="text" className="input input-sm input-bordered w-full" />
                    </div>
                    <div className="col-span-6 sm:col-span-3 md:col-span-4">
                        <label className="block text-sm font-semibold">Service Image URL</label>
                        <input type="text" className="input input-sm input-bordered w-full" />
                    </div>
                    <div className="col-span-6 sm:col-span-3 md:col-span-3">
                        <label className="block text-sm font-semibold">Service Area</label>
                        <input type="text" className="input input-sm input-bordered w-full" />
                    </div>
                    <div className="col-span-6 sm:col-span-3 md:col-span-2">
                        <label className="block text-sm font-semibold">Service Fee</label>
                        <input type="text" className="input input-sm input-bordered w-full" />
                    </div>
                    <div className="col-span-full">
                        <label className="block text-sm font-semibold">Special Instructions</label>
                        <textarea rows={2} style={{ minHeight: '3rem', maxHeight: '9rem' }}
                            className="textarea textarea-bordered w-full" />
                    </div>
                </div>
                <div className="modal-action">
                    <button type="button" className="btn btn-warning text-white">Not Now</button>
                    <button type="submit" className="btn bg-custom-blue-5 hover:bg-custom-blue-3 text-white">Purchase</button>
                </div>
            </form>
        </div>
    );
};

export default ServiceAdd;