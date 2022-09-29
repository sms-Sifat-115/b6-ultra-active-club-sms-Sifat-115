import React, { useEffect, useState } from 'react';
import './Main.css'
import { addToDb, getStoredCart }  from '../../Resources/StorageDB/storageDB';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';

const Main = () => {
    const [resources, setResources] = useState ([]);
    const [cart, setCart] = useState([]);
    useEffect ( () => {
        fetch ('resources.json')
        .then(res => res.json())
        .then (data => setResources(data));
    }, []);
    useEffect(() =>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart){
            const addedResource = resources.find(resource=> resource.id === id);
            if (addedResource) {
                const quantity = storedCart[id];
                addedResource.quantity = quantity;
                savedCart.push(addedResource);
            }
            setCart(savedCart);
        }
    }, [resources]);
    const handleAddToCart = (resources) => {
        let newCart = [];
        const exists = cart.find(resource => resource.id === resources);
        if (!exists){
            resources.quantity = 1;
            newCart = [...cart, resources];
        }
        else {
            const rest = cart.filter(resource => resource.id !== resources.id);
            exists.quantity = exists.quantity +1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(resources.id);
    };
    
    return (
        <div className='main-container'>
           <div className='card-container'>
           {
            resources.map(resource=><Card key={resource.id} resource={resource}handleAddToCart={handleAddToCart}></Card>)
            }
            
            </div> 
            <div className='info-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Main;