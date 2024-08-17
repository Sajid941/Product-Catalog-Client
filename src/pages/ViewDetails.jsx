import { Helmet } from "react-helmet";
import { useLoaderData, useParams } from "react-router-dom";

const ViewDetails = () => {
    const products = useLoaderData()
    const { id } = useParams()
    const product = products.find(product => product._id === id)
    const { image, company_name, review, tag, price, rating, category, stock, name, description } = product

    return (
        <div>
            <Helmet>
                <title>Product Details</title>
            </Helmet>
            <div className="lg:flex  mt-10 lg:p-10 p-5   items-center">
                <img className="lg:ml-10 lg:w-[425px]" src={image} alt="" />
                <div className="w-full lg:ml-10 space-y-4">
                    <h1 className="text-4xl font-bold "></h1>
                    <p className="text-xl font-medium text-[#131313CC] border-b-2 pb-5">By: {company_name} </p>
                    <p className="text-xl font-medium text-[#131313CC] border-b-2 pb-5">{name}</p>
                    <p className=""><span className="font-bold">Description:  </span>{description} </p>
                    <p className=""><span className="font-bold">Review: </span>{review} </p>
                    <p className="border-b-2 pb-5"><span className="font-bold">Tag: {tag.map((aTag, idx) => <span className="text-[#131313B3] font-normal mr-3" key={idx}>#{aTag}</span>)} </span></p>
                    <div className="flex">
                        <div>
                            <p className="text-[#131313B3]">Category:</p>
                            <p className="text-[#131313B3]">Stock:</p>
                            <p className="text-[#131313B3]">Price:</p>
                            <p className="text-[#131313B3]">Rating:</p>
                        </div>
                        <div className="ml-6">
                            <p className="font-semibold">{category}</p>
                            <p className="font-semibold">{stock}</p>
                            <p className="font-semibold">{price}</p>
                            <p className="font-semibold">{rating}</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <button className="btn px-7 text-white bg-[#50B1C9]">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;