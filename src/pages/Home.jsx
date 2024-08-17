import Banner from "../components/Banner";
import { Helmet } from "react-helmet";
import Products from "../components/Products";

const Home = () => {
 
    return (
        <div>
            <Helmet>
                <title>GadgetGalaxy | Home</title>
            </Helmet>
            <Banner/>
            <Products/>
           
        </div>
    );
};

export default Home;