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
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle ">
                    <div className="w-12 rounded-full tooltip tooltip-bottom" data-tip={user && user.displayName}>
                        {
                            user ?
                                <img className="rounded-full w-12 h-12" alt="Tailwind CSS Navbar component" src={user.photoURL ? user.photoURL : "https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png"} /> :
                                <img className="rounded-full" alt="Tailwind CSS Navbar component" src="https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png" />
                        }
                    </div>

                </div>
                {
                    user ?
                        <button onClick={handleLogOut} className="btn">Sign Out</button> :
                        <Link to={"/login"} className="btn">Login</Link>
                }
            </div>
        </div>
    );
};

export default NavBar;