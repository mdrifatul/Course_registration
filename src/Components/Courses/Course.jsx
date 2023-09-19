import PropTypes from 'prop-types';
import { BiBookOpen } from 'react-icons/bi';
import { FiDollarSign } from 'react-icons/fi';

const Course = ({card,handleSidebar}) => {
    const {img,courseName,credit,price,details} = card
    return (
        <>
        
        <div className="card_container">
        <div className="card w-auto bg-base-100 shadow-xl pt-5 rounded-t-2xl h-96">
        <figure><img className="px-4 " src={img} alt="Shoes" /></figure>
        <div className="card-body p-5">
            <h2 className="card-title text-base">{courseName}</h2>
            <p className="text-sm text-gray-500">{details}</p>
            <div className="card-actions justify-end">
            <p className='flex'><span className='flex items-center'><FiDollarSign/></span><span className='text-sm text-gray-500 ml-2'>Price: {price}</span></p>
            <p className='flex'><span className='flex items-center mr-2'><BiBookOpen></BiBookOpen></span> <span className='text-sm text-gray-500'>Credit: {credit} hr</span></p>
            </div>
        <button onClick={() =>handleSidebar(card)} className="btn bg-[#3b82f6] text-white">Buy Now</button>   
        </div>
        </div>
        </div>
            
        </>
    );
};

Course.propTypes = {
    card: PropTypes.object,
    handleSidebar: PropTypes.func 
}

export default Course;