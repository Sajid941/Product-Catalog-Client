import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/NavBar";
import Footer from "../pages/Shared/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <div>
            <div className="px-5 md:px-10 lg:px-32">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <div >
                <Footer></Footer>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;