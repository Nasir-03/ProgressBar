// import React, { useEffect, useState } from 'react'
// import './Progress.css'

// function ProgressBar() {
//     const[count, setCount] = useState(0);
//     const [show, setShow] = useState(true);

//       useEffect(() => {
//         let interval
//         if (show){
//           interval = setInterval(() =>{
//             console.log("interval");
            
//             setCount((prev) =>{
//               if (prev >= 100){
//                 clearInterval(interval)
//                 return prev;
//               }
//               return prev + 5;
//             })
//           },150)
//         }
//         return () => clearInterval(interval);
//       },[show])

//      useEffect(() =>{
//         if (count >= 100){
//             setShow(false)
//             setCount(100);
//         }
//      }, [count])

//   return (
//     <>
//     <div className="main-container">
//       <div className="container">
//         <div className="progress" style={{transform:`translateX(${count - 100}%)`}}>
//           {count}
//         </div>
//       </div>
//       <div className="btn">
//         <button onClick={() => setShow(!show)}>
//         {show ? 'Downloading...' : 'Start Download'}
//         </button>
//       </div>
//       </div>
//     </>
//   )
// }

// export default ProgressBar






import React, { useEffect, useState } from 'react';
import './Progress.css';

function ProgressBar() {
    const [count, setCount] = useState(0);
    const [show, setShow] = useState(true);

    useEffect(() => {
        let interval;
        if (show) {
            interval = setInterval(() => {
                console.log("interval");

                setCount((prev) => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        return prev;
                    }
                    return prev + 5; // Increase progress by 5% every 150ms
                });
            }, 150);
        }
        return () => clearInterval(interval);
    }, [show]);

    useEffect(() => {
        if (count >= 100) {
            setShow(false);
        }
    }, [count]);

    return (
        <div className="main-container">
            <div className="container">
                <div className="progress" style={{ width: `${count}%` }}>
                  <div className="count-show">
                  {count}%
                  </div>
                </div>
            </div>
            <div className="btn">
                <button onClick={() => setShow(!show)}>
                    {show ? 'Downloading...' : 'Start Download'}
                </button>
            </div>
        </div>
    );
}

export default ProgressBar;
