import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

import 'aos/dist/aos.css'

const Product = ({ product }) => {
    const { image, title, description, price, _id, } = product

    return (
        <div className="card  bg-base-100 shadow-xl">

            <figure><img className='h-[110px] md:h-[220px] object-cover w-full' src={image} alt={title} /></figure>
            <div className="p-3 space-y-2">
                <h2 className="font-semibold text-[14px] md:text-[18px]">{title}</h2>
                <p className='text-xs text-[#737373]'>{description}</p>

                <p className='text-orange-500 font-semibold text-[14px]'>${price}</p>


                <div className="card-actions justify-end">
                    <Link to={`/viewDetails/${_id}`} className="btn bg-[#2b3440] text-white">View Details</Link >
                </div>
            </div>
        </div>
    );
};

export default Product;
Product.propTypes = {
    product: PropTypes.object
}