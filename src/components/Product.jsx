import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

import 'aos/dist/aos.css'

const Product = ({ product }) => {
    const { image, title, description, price, id } = product

    return (
        <div className="card  bg-base-100 shadow-xl">

            <figure><img className='h-[300px] object-cover w-full' src={image} alt={title} /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>

                <p className='text-orange-500 font-semibold'>${price}</p>


                <div className="card-actions justify-end">
                    <Link to={`/viewDetails/${id}`} className="btn bg-[#2b3440] text-white">View Details</Link >
                </div>
            </div>
        </div>
    );
};

export default Product;
Product.propTypes = {
    product: PropTypes.object
}