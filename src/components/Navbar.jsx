import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="space-x-8 flex justify-center text-xl my-8">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/user'>User</NavLink>
            <NavLink to='/signUp'>Sign Up</NavLink>
            <NavLink to='/signIn'>Sign In</NavLink>
        </div>
    );
};

export default Navbar;