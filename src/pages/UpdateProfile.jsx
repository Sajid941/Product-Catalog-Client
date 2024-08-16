import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { BiRename } from "react-icons/bi";
import { BsPersonBoundingBox } from "react-icons/bs";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";

const UpdateProfile = () => {
    const { user } = useContext(AuthContext)
    const handleUpdateProfile = e =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const displayName=form.get('name')
        const photoURL=form.get('photoUrl')
        console.log(displayName,photoURL)
        updateProfile(user,{displayName,photoURL})
        .then(()=>{
            toast("Your profile updated")
            window.location.reload()
        })
        .catch(error=>{
            toast.error(error.message)
        })
    }
    return (
        <div className="bg-gray-100 py-10 my-10">
            <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
                <img className="w-32 h-32 rounded-full mx-auto" src={user ? user.photoURL : "https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png"} alt="Profile picture" />
                <h2 className="text-center text-2xl font-semibold mt-3">Hello {user && user.displayName} !</h2>
                <p className="text-center text-gray-600 mt-1">{user && user.email}</p>

                {/* Form */}

                <div className="w-full mt-5">
                    <div className="text-center mb-10">
                        <h1 className="font-bold text-xl text-blue-600">UPDATE PROFILE</h1>
                        <p className="text-gray-600">Enter your information to update profile</p>
                    </div>
                    <form onSubmit={handleUpdateProfile}>
                        <div className="-mx-3">
                            <div className="px-3 mb-5">
                                <label htmlFor="" className="text-xs font-semibold px-1">Name</label>
                                <div className="flex">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><BiRename size={20} /></div>
                                    <input type="text" name="firstName"  className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="John" />
                                </div>
                            </div>
                        </div>
                        <div className="flex -mx-3">
                            <div className="w-full px-3 mb-5">
                                <label htmlFor="" className="text-xs font-semibold px-1">Photo Url</label>
                                <div className="flex">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><BsPersonBoundingBox size={20}></BsPersonBoundingBox></div>
                                    <input type="text" name="photoUrl"  className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Your photo url" />
                                </div>
                            </div>
                        </div>
                        <div className="flex -mx-3">
                            <div className="w-full px-3 mb-5">
                                <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">Update Now</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;