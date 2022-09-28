import React from 'react';
import './Card.css';

const Card = ({resource, handleAddToCart}) => {
    const {name, img, sets, time} = resource; 
    return (
        <div>
            <img src={img} alt="" />
            <div>
                <p>Name: {name}</p>
                <p>Sets: {sets}</p>
                <p>Time: {time}</p>
            </div>
            <button onClick={ () => {handleAddToCart(resource)}} className='btn-cart'>
            <p>Add to card</p>
          </button>
        </div>
    );
};

export default Card;