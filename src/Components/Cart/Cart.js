import React from 'react';
import './Cart.css'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = ({cart}) => {
        let time = 0;
        let sets = 0;
        let breaks = 0;
        // let totalTime  = 0;

        for (const resources of cart){
            time = time + resources.time;
            sets = sets + resources.sets;
            // totalTime = time / (breaks * sets);
        
        }
        const notify = ()=>{
            toast.error('Congrats on Your Achievement 🥳 !');
              
        }
        
        
        return (
            <div>
                {/* User Profile info */}
                <div className='profile'>
                    <img src="https://th.bing.com/th/id/OIP.hkZQy6TDZBEfcaYJCPd4ZAHaJN?pid=ImgDet&w=1126&h=1400&rs=1" alt="" width="70" height="70"/>
                    <div>
                        <h4>Solomon Grande</h4>
                        <p>Alabama, USA</p>
                    </div>
                </div>
                <div className='profile-info'>
                    <div>
                        <h1>76kg</h1>
                        <p>Weight</p>
                    </div>
                    <div>
                        <h1>6.1</h1>
                        <p>Height</p>
                    </div>
                    <div>
                        <h1>19yrs</h1>
                        <p>Age</p>
                    </div>
                </div>
                <div className='break'>
                    <h1>Add a break: "in mins"</h1>
                    <div className='btn-tab'>
                        <button>1</button>
                        <button>2</button>
                        <button>5</button>
                        <button>7</button>
                        <button>10</button>
                    </div>
                </div>
                <div className='cart'>
                    <h1>Exercise Details</h1>
                    <p>Breaks: {breaks} mins</p>
                    <p>Sets: {sets}</p>
                    <p>Time: {time} mins</p>
                    
                    {/* <h4>Total-time: {totalTime}</h4> */}
                </div>
                <div >
                    <ToastContainer/>
                     <button className='submit-btn' onClick={notify}>Activity Completed</button>
                </div>
            </div>
        );
};

export default Cart;