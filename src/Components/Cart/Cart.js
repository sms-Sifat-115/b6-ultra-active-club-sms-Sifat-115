import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
        let time = 0;
        let sets = 0;
        let breaks = 0;
        let totalTime  = 0;

        for (const resources of cart){
            time = time + resources.time;
            sets = sets + resources.sets;
            totalTime = time / (breaks * sets);
        
        }
        
        
        return (
            <div>
                <div className='profile'>
                    <img src="" alt="" />
                    <div>
                        <h5>Solomon Grande</h5>
                        <p>Alabama, USA</p>
                    </div>

                </div>
                <div className='break'>
                    <h1>Add a break: "in mins"</h1>
                    <div>
                        <button>1</button>
                        <button>2</button>
                        <button>5</button>
                        <button>7</button>
                        <button>10</button>
                    </div>
                </div>
                <div className='cart'>
                    <h1>Exercise Details</h1>
                    <p>Sets: {sets}</p>
                    <p>Time: {time}</p>
                    <p>Breaks: {breaks}</p>
                    <h4>Total-time: {totalTime}</h4>
                </div>
            </div>
        );
};

export default Cart;