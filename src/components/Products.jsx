import ProductCard from "../components/ProductCard";
import useAxiosPublic from './../hooks/useAxiosPublic';
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Products = () => {

    // Custom hook to make Axios requests with public access
    const axiosPublic = useAxiosPublic();

    // State to keep track of the currently selected page for pagination
    const [selectedPage, setSelectedPage] = useState(1);

    // State to store the list of products retrieved from the API
    const [products, setProducts] = useState([]);

    // State to manage sorting option
    const [sort, setSort] = useState('');

    // State to manage search query input by the user
    const [searchQuery, setSearchQuery] = useState('');

    // State to manage filtering options
    const [brandName, setBrandName] = useState('');
    const [category, setCategory] = useState('');
    const [minimumPrice, setMinimumPrice] = useState('');
    const [maximumPrice, setMaximumPrice] = useState('');

    // Handler for sorting products
    const handleSort = (e) => {
        e.preventDefault();
        const sortOption = e.target.value;
        setSort(sortOption);
    }

    // Handler for applying filters based on form input
    const handleFilter = e => {
        e.preventDefault();
        const fromData = e.target;
        const brandName = fromData.brandName.value;
        setBrandName(brandName);
        const category = fromData.category.value;
        setCategory(category);
        const minimumPrice = fromData.minimumPrice.value;
        setMinimumPrice(minimumPrice);
        const maximumPrice = fromData.maximumPrice.value;
        setMaximumPrice(maximumPrice);
        console.log(brandName, category, minimumPrice, maximumPrice);
    }

    // Handler to clear all applied filters
    const handleClearFilter = () => {
        setBrandName("");
        setCategory("");
        setMinimumPrice("");
        setMaximumPrice("");
    }

    // Handler for search query input
    const handelSearch = e => {
        e.preventDefault();
        setSearchQuery(e.target.value);
    }

    // Effect hook to fetch products whenever dependencies like selectedPage, sort, etc., change
    useEffect(() => {
        // Fetch products based on the current filters, sort, and pagination options
        axiosPublic(`/products?page=${selectedPage}&size=${itemPerPage}&sort=${sort}&query=${searchQuery}&brandName=${brandName}&category=${category}&minimumPrice=${minimumPrice}&maximumPrice=${maximumPrice}`)
            .then(res => {
                setProducts(res.data);
            })
    }, [axiosPublic, selectedPage, sort, searchQuery, brandName, category, minimumPrice, maximumPrice]);

    // Retrieve the total count of products from loader data
    const { count } = useLoaderData();
    const itemPerPage = 8; // Number of items to display per page
    const numOfPages = Math.ceil(count / itemPerPage); // Calculate total number of pages
    const totalPages = [...Array(numOfPages).keys()].map(i => i + 1); // Generate an array of page numbers

    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold text-center">Our Products</h1>
                <p className="text-gray-400 text-center">Shop with confidence knowing you are getting top-quality products, competitive prices, and exceptional customer service.</p>
            </div>

            {/* Search and Sort Section */}
            <section className="my-10 max-w-lg mx-auto flex gap-4">
                <div className="flex">
                    <form onSubmit={handleSort} className="">
                        <div>
                            {/* Dropdown for sorting products */}
                            <select name="info" id="info" onChange={handleSort} className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100">
                                <option value="auto">Sort</option>
                                <option value="low-high">Low - High</option>
                                <option value="high-low">High - Low</option>
                                <option value="newest">Newest</option>
                            </select>
                        </div>
                    </form>
                    <form onSubmit={handelSearch} className="w-full">
                        <div className="relative w-full">
                            {/* Search bar for searching products */}
                            <input
                                name="search"
                                type="search"
                                id="search-dropdown"
                                onChange={handelSearch}
                                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Search Product"
                            />
                        </div>
                    </form>
                </div>
                {/* Button to open the filter modal */}
                <div className="relative">
                    <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>Filter</button>
                    <span onClick={handleClearFilter} className="badge absolute left-7 -top-3 bg-red-500 text-white border-0 hover:cursor-pointer">Clear</span>
                </div>
                {/* Filter modal */}
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg text-center">Filter by Brand and Category</h3>
                        <form onSubmit={handleFilter} className="flex flex-col items-center gap-5 my-10">
                            {/* Dropdown for selecting a brand */}
                            <select name="brandName" className="select select-bordered w-full max-w-xs">
                                <option selected value="">All Brand</option>
                                <option value="apple">Apple Inc.</option>
                                <option value="sony">Sony Corporation</option>
                                {/* Add other brand options here */}
                            </select>
                            {/* Dropdown for selecting a category */}
                            <select name="category" className="select select-bordered w-full max-w-xs">
                                <option selected value="">All Category</option>
                                <option value="mobile phones">Mobile Phones</option>
                                <option value="audio devices">Audio Devices</option>
                                {/* Add other category options here */}
                            </select>
                            <h3 className="font-bold text-lg text-center">Filter by Price Range</h3>
                            {/* Input fields for minimum and maximum price */}
                            <div className="flex gap-4">
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">Minimum</span>
                                    </div>
                                    <input name="minimumPrice" type="number" min={0} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                                </label>
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">Maximum</span>
                                    </div>
                                    <input name="maximumPrice" type="number" min={1} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                                </label>
                            </div>
                            <input className="btn w-full bg-[#f9732c]" type="submit" value="Filter" />
                        </form>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* Close button for the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
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
