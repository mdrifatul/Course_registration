import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Course from './Course';

const Courses = ({handleSidebar}) => {
    const [card, setCard] = useState([])

        useEffect(()=>{
            fetch('./course.json')
            .then(res => res.json())
            .then(data => setCard(data))
        },[])

    return (
        <div>
            <div className='grid grid-cols-3 gap-3'>
            {
                card.map(card => <Course key={card.id} card={card} handleSidebar={handleSidebar}></Course>)
            }
            </div>
        </div>
    );
};

Courses.propTypes = {
    handleSidebar: PropTypes.func
}

export default Courses;