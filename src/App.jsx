import { useState } from 'react';
import swal from 'sweetalert';
import './App.css';
import Courses from './Components/Courses/Courses';
import Sidebar from './Components/Courses/Sidebar';


function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [totalcost, setTotalCost] = useState(0);
  const [totalcredit, setTotalCredit] = useState(0)
  const [creditRemaining, setCreditRemainig] = useState(0);

  const handleSidebar = (card) =>{  

    let count = card.price;
    let credit = card.credit
    
    const isExist = bookmarks.find(item => item.id === card.id)
    if(isExist){
      swal("You already add this course.");
    }else{

      bookmarks.forEach(item =>{count += item.price})
      setTotalCost(count)
      bookmarks.forEach(item =>{credit += item.credit}) 
      
      const totalRemaining = 20 - credit   
      
      if(credit > 20){
        return swal("You don't have enough credit");
      }else{
        setTotalCredit(credit)
        setCreditRemainig(totalRemaining)
        setBookmarks([...bookmarks, card]);
      }
    }
    
  }



  return (
    <>

      <div className='w-11/12 mx-auto py-10'>
      <h1 className='text-3xl font-semibold text-center pb-10'>Course Registration</h1>
      <div className='flex gap-6'>
        <div className='w-3/4'>
          <Courses handleSidebar={handleSidebar}></Courses>
        </div>
        <div className="w-1/4">
        <Sidebar bookmarks={bookmarks} totalcost={totalcost} totalcredit={totalcredit} creditRemaining={creditRemaining}></Sidebar>
        </div>      
      </div>
      </div>
    </>
  )
}



export default App
