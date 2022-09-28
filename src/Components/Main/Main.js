import React, { useEffect } from 'react';
import './Main.css'
import Card from '../Card/Card';
import Cart from '../Cart/Cart';

const Main = () => {
    const [resources, setResources] = useState ([]);
    const [cart, setCart] = useState([]);
    useEffect ( () => {
        fetch ('../../Resources/Resource Package/resources.json')
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
        const exists = cart.find(product => product.id === resources);
        if (!exists){
            resources.quantity = 1;
            newCart = [...cart, resources];
        }
        else {
            const rest = cart.filter(product => product.id !== resources.id);
            exists.quantity = exists.quantity +1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(resources.id);
    };
    return (
        <div>
           <div className='card-container'>
           {
                resources.map(resource=><Card key={resource.id} product={resource}handleAddToCart={handleAddToCart}></Card>)
            }
            </div> 
            <div className='info-container'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Main;