import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import './navBar.css'

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const navLinks = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        {
            user &&
            <li><NavLink to={"/updateProfile"}>Update Profile</NavLink></li>
        }
        <li><NavLink to={"/contactUs"}>Contact Us</NavLink></li>

    </>

    const handleLogOut = () => {
        logOut()
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl hidden md:block">GadgetGalaxy</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-5 px-1 navbar">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end space-x-3">
                {
                    user ?
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full border-2 border-black">
                                    <img
                                        alt="user photo"
                                        src={user.photoURL} />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-3">
                                <li>
                                    <Link to="/updateProfile" className="justify-between">
                                        Profile
                                    </Link>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a onClick={handleLogOut}>Logout</a></li>
                            </ul>
                        </div> :
                        <div className="flex gap-2">
                            <Link to={"/login"} className="btn w-16">Login</Link>
                            <Link to={"/register"} className="btn w-20">Sign Up</Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default NavBar;