import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Product from "../components/Product";
import { Helmet } from "react-helmet";


const Home = () => {
    const products = useLoaderData();
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
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Home;