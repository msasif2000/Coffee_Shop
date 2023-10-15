import { Link } from "react-router-dom";
import Header from "./Header";
import { AiOutlineArrowLeft } from "react-icons/ai";
const AddCoffee = () => {
    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const details = form.details.value;
        const newCoffee = { name, chef, supplier, category, photo, details }
        console.log(newCoffee);
    }
    return (
        <div>
            <Header></Header>

            <div className="md-container lg:mx-24 md:mx-6 mx-2">
                <Link to="/"><h2 className="font-rancho text-3xl text-[#374151] my-2 flex items-center gap-1"><AiOutlineArrowLeft className="text-2xl"></AiOutlineArrowLeft>Back to Home</h2></Link>
                <div className="bg-[#F4F3F0] lg:p-12 md:p-6 p-4 space-y-6">
                    <h2 className="font-rancho text-4xl text-center text-[#374151]">Add New Coffee</h2>
                    <p className="lg:px-32 md:px-16 text-center">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    <form onSubmit={handleAddCoffee} className="font-raleway ">
                        <div className="md:flex gap-8 justify-center">
                            <div className="md:w-1/2">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Coffee Name</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name="name" placeholder="Enter coffee name" className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Supplier</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name="supplier" placeholder="Enter coffee supplier" className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Category</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name="category" placeholder="Enter coffee category" className="input input-bordered w-full" />
                                    </label>
                                </div>

                            </div>

                            <div className="md:w-1/2">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Chef</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name="chef" placeholder="Enter coffee chef" className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name="photo" placeholder="Enter photo URL" className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Details</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name="details" placeholder="Enter coffee details" className="input input-bordered w-full" />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <input type="submit" value="Add Coffee" className="w-full mt-6 bg-[#D2B48C] border-black border-2 text-center p-2 font-rancho text-2xl" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddCoffee;