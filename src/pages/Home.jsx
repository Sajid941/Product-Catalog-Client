import Banner from "../components/Banner";
import Product from "../components/Product";
import { Helmet } from "react-helmet";
import useAxiosPublic from './../hooks/useAxiosPublic';
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


const Home = () => {
    const axiosPublic = useAxiosPublic()
    const [selectedPage, setSelectedPage] = useState(1)

    const [products, setProducts] = useState([])
    useEffect(() => {
        axiosPublic(`/products?page=${selectedPage}&size=${itemPerPage}`)
            .then(res => {
                setProducts(res.data)
            })
    }, [axiosPublic, selectedPage])

    console.log(selectedPage);

    const { count } = useLoaderData()
    const itemPerPage = 8;
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

            <section className="my-10">
                <form className="max-w-lg mx-auto">
                    <div className="flex">
                        <div>
                            <select name="sort" id="" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100"  >
                                <option defaultValue="Sort" disabled >Sort</option>
                                <option value="" >Low - High</option>
                                <option value="" >High -  Low</option>
                                <option value="" >Newest</option>
                            </select>
                        </div>
                        <div className="relative w-full">
                            <input
                                type="search"
                                id="search-dropdown"
                                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Search Product"
                                required
                            />
                            <button
                                type="submit"
                                className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-[#f9732c] rounded-e-lg border border-[#f9732c] hover:bg-[#f75c18] focus:ring-4 focus:outline-none focus:ring-blue-300"
                            >
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span className="sr-only">Search</span>
                            </button>
                        </div>
                    </div>
                </form>

            </section>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-7 my-10">
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