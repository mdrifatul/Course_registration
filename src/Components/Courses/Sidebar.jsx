import PropTypes from 'prop-types';


const Sidebar = ({bookmarks, totalcost, totalcredit, creditRemaining}) => {
    return (
        <>
        <div className="p-5 bg-white rounded-xl">
        <h1 className="text-[#2F80ED] font-bold border-b border-gray-400 pb-4">Credit Hour Remaining {creditRemaining} hr</h1>
        <h1 className="text-[#1C1B1B] font-bold py-2">Course Name
        </h1>
        {
            bookmarks.map((bookmark, idx) =>{
                const {id, courseName} = bookmark
                // console.log(idx);
                return( 
                    <p className="text-gray-500 text-sm pt-1" key={id}>{idx + 1}. {courseName}</p>
                )
            })
        }
        
        <p className="border-y border-gray-400 py-4 mt-4">Total Credit Hour: {totalcredit} </p>
        <p className="pt-4">Total Price: {totalcost} USD</p>
        </div>

        </>
    );
};

Sidebar.propTypes = {
    bookmarks: PropTypes.array,
    totalcost: PropTypes.number,
    totalcredit: PropTypes.number,
    creditRemaining: PropTypes.number
}

export default Sidebar;