import ProductCard from "../components/ProductCard";
import useAxiosPublic from './../hooks/useAxiosPublic';
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Products = () => {

    // Hooks
    const axiosPublic = useAxiosPublic()

    // State to keep track of the currently selected page for pagination
    const [selectedPage, setSelectedPage] = useState(1)

    // State to store the list of products retrieved from the API
    const [products, setProducts] = useState([])

    const [sort, setSort] = useState(null)

    const handleSort = (e) => {
        e.preventDefault()
        const sortOption = e.target.value;
        setSort(sortOption)
    }

    // Effect hook to fetch products whenever selectedPage changes
    useEffect(() => {
        // Fetch products based on the current page and items per page
        axiosPublic(`/products?page=${selectedPage}&size=${itemPerPage}&sort=${sort}`)
            .then(res => {
                setProducts(res.data)
            })
    }, [axiosPublic, selectedPage,sort])



    const { count } = useLoaderData()
    const itemPerPage = 8;
    const numOfPages = Math.ceil(count / itemPerPage)
    const totalPages = [...Array(numOfPages).keys()].map(i => i + 1)

    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold text-center">Our Products</h1>
                <p className="text-gray-400 text-center">Shop with confidence knowing you are getting top-quality products, competitive prices, and exceptional customer service.</p>
            </div>

            {/* Search and Sort Section */}
            <section className="my-10">
                <form onSubmit={handleSort} className="max-w-lg mx-auto">
                    <div className="flex">
                        <div>
                            {/* Dropdown for sorting products */}
                            <select name="info"  id="info" onChange={handleSort} className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100"  >
                                <option value="auto" >Sort</option>
                                <option value="low-high">Low - High</option>
                                <option value="high-low">High - Low</option>
                                <option value="newest">Newest</option>
                            </select>
                        </div>
                        <div className="relative w-full">
                            {/* Search bar for searching products */}
                            <input
                                name="search"
                                type="search"
                                id="search-dropdown"
                                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Search Product"
                                required
                            />
                            {/* Search button */}
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

            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-7 my-10">
                {
                    // Render each product using the ProductCard component
                    products.map((product, idx) => <ProductCard key={idx} product={product}></ProductCard>)
                }
            </div>

            {/* Pagination Buttons */}
            <div className="join flex flex-wrap justify-center mb-10">
                {
                    // Render pagination buttons based on the total number of pages
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

export default Products;
