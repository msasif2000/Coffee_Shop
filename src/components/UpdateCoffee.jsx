import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const coffee =useLoaderData();
    const {_id, name, chef, price, category, photo, details} = coffee;

    const handleUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const chef = form.chef.value;
        const price = form.price.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const details = form.details.value;
        const updateCoffee = { name, chef, price, category, photo, details }
        console.log(updateCoffee);

        //send data to data server
        fetch(`https://coffee-store-server-btn4jpkaz-mostafa-s-asifs-projects.vercel.app/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount > 0 ){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
    }
    return (
        <div>
            <h2>Update Coffee: {name}</h2>
            <div className="md-container lg:mx-24 md:mx-6 mx-2">
                <Link to="/"><h2 className="font-rancho text-3xl text-[#374151] my-2 flex items-center gap-1"><AiOutlineArrowLeft className="text-2xl"></AiOutlineArrowLeft>Back to Home</h2></Link>
                <div className="bg-[#F4F3F0] lg:p-12 md:p-6 p-4 space-y-6">
                    <h2 className="font-rancho text-4xl text-center text-[#374151]">Update Existing Coffee Details</h2>
                    <p className="lg:px-32 md:px-16 text-center">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    <form onSubmit={handleUpdateCoffee} className="font-raleway ">
                        <div className="md:flex gap-8 justify-center">
                            <div className="md:w-1/2">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Coffee Name</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name="name" defaultValue={name} placeholder="Enter coffee name" className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name="price" defaultValue={price} placeholder="Enter coffee price" className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Category</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name="category" defaultValue={category} placeholder="Enter coffee category" className="input input-bordered w-full" />
                                    </label>
                                </div>

                            </div>

                            <div className="md:w-1/2">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Chef</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name="chef"  defaultValue={chef} placeholder="Enter coffee chef" className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="url" name="photo" defaultValue={photo} placeholder="Enter photo URL" className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Details</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name="details" defaultValue={details} placeholder="Enter coffee details" className="input input-bordered w-full" />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <input type="submit" value="Update Coffee" className="w-full mt-6 bg-[#D2B48C] border-black border-2 text-center p-2 font-rancho text-2xl" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;