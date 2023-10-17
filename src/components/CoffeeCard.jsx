import { PropTypes } from 'prop-types'
import { AiOutlineEye, AiTwotoneEdit, AiOutlineDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, chef, category, photo } = coffee

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://coffee-store-server-btn4jpkaz-mostafa-s-asifs-projects.vercel.app/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your coffee card has been deleted.',
                                'success'
                            )

                            const remaining = coffees.filter(cof => cof._id !== _id)
                            setCoffees(remaining);
                        }
                    })
            }
        })
    }
    return (
        <div className='flex gap-4 bg-[#F5F4F1] p-6 items-center '>
            <figure><img src={photo} alt="photo" /></figure>
            <div className='space-y-4'>
                <p className='text-left'><span className='font-bold'>Name: </span>{name}</p>
                <p className='text-left'><span className='font-bold'>Chef: </span>{chef}</p>
                <p className='text-left'><span className='font-bold'>Category: </span>{category}</p>
            </div>
            <div>
                <div className="btn-group btn-group-vertical space-y-4">
                    <button className="bg-[#D2B48C] p-2 rounded"><AiOutlineEye className='text-white'></AiOutlineEye></button>
                    <Link to={`updateCoffee/${_id}`}><button className="bg-[#3C393B] p-2 rounded"><AiTwotoneEdit className='text-white'></AiTwotoneEdit></button></Link>
                    <button onClick={() => handleDelete(_id)} className="bg-[#EA4744] p-2 rounded"><AiOutlineDelete className='text-white'></AiOutlineDelete></button>
                </div>
            </div>
        </div>
    );
};

CoffeeCard.propTypes = {
    coffee: PropTypes.object.isRequired,
    coffees: PropTypes.object.isRequired, 
    setCoffees: PropTypes.object.isRequired
}

export default CoffeeCard;