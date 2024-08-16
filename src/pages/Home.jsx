import Banner from "../components/Banner";
import Product from "../components/Product";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from './../hooks/useAxiosPublic';
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


const Home = () => {
    const axiosPublic = useAxiosPublic()
    const [selectedPage, setSelectedPage] = useState(1)

    const [products,setProducts]=useState([])
    useEffect(()=>{
        axiosPublic(`/products?page=${selectedPage}&size=${6}`)
        .then(res=>{
            setProducts(res.data)
        })
    },[axiosPublic,selectedPage])

    console.log(selectedPage);
    
    const {count}=useLoaderData()
    const itemPerPage = 6;
    const numOfPages = Math.ceil(count / itemPerPage)
    const totalPages = [...Array(numOfPages).keys()].map(i => i + 1)
    return (
        <div>
            <Helmet>
                <title>GadgetGalaxy | Home</title>
            </Helmet>
            <Banner></Banner>
            <div>
                <h1 className="text-3xl font-bold text-center ">Our Products</h1>
                <p className="text-gray-400 text-center">Shop with confidence knowing you are getting top-quality products, competitive prices, and exceptional customer service. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
                {
                    products.map((product, idx) => <Product key={idx} product={product}></Product>)
                }
            </div>
            <div className="join flex flex-wrap justify-center mb-10">
                {
                    totalPages.map(pageNum =>

                        <button
                            key={pageNum}
                            className={`join-item btn btn-square bg-[#2b3440] text-white border-0 hover:bg-[#374555] ${selectedPage === pageNum && 'bg-[#f9732c] hover:bg-[#f9732c]'}`}
                            onClick={() => setSelectedPage(pageNum)}

                        >

                            {pageNum}
                        </button>
                    )
                }

            </div>
        </div>
    );
};

export default Home;