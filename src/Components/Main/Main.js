import React, { useEffect } from 'react';
import './Main.css'
import Card from '../Card/Card';

const Main = () => {
    const [resources, setResources] = useState ([]);
    const [cart, setCart] = useState([]);
    useEffect ( () => {
        fetch ('../../Resources/Resource Package/resources.json')
        .then(res => res.json())
        .then (data => setResources(data));
    }, [])
    return (
        <div>
           <div className='card-container'>
           {
                resources.map(resource=><Card key={resource.id} product={resource} ></Card>)
            }
            </div> 
            <div className='info-container'>

            </div>
        </div>
    );
};

export default Main;