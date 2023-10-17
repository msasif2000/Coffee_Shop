import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const Users = () => {
    const loadedUser = useLoaderData();
    const [users, setUsers] = useState(loadedUser);

    const handleDelete = _id => {
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

                fetch(`https://coffee-store-server-btn4jpkaz-mostafa-s-asifs-projects.vercel.app/user/${_id}`, {
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

                            const remaining = users.filter(user => user._id !== _id)
                            setUsers(remaining);
                        }
                    })
            }
        })
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loadedUser.map(user => <tr key={user._id}>
                                <td></td>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                                <td>
                                    <button onClick={() => handleDelete(user._id)} className="btn btn-circle btn-outline">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;