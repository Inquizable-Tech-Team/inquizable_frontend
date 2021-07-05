
import React from 'react'
import ReactCircleModal from 'react-circle-modal'
import  ChatRoom from './ChatRoom'
import './popupBtn.css'

const PopUpBtn = () => {
  return (
    <ReactCircleModal
      backgroundColor="transparent"
      toogleComponent={onClick => (
        <button onClick={onClick} class="bg-blue-500 openBtn hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Chat 
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
        </button>
      )}
      // Optional fields and their default values
      //offsetX={30}
      //offsetY={30}
    >
      {(onClick) => (
        <div >
       <ChatRoom />
          <button className='closeBtn' onClick={onClick} style={{ padding: '1em' }}>
            Close
          </button>
          
        </div>
      )}
    </ReactCircleModal>
  )
}

export default PopUpBtn;





// const PopupBtn = () => {
  
//   return (
    
// <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick='im'>
//   Chat
//   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
// </svg>
// </button>
//   ); 
// };

// export default PopupBtn;
