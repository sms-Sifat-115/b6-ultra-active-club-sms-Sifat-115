// use local storage to manage cart data

const addToDb = id =>{
    let resources = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('resources');
    if(storedCart){
        resources = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = resources[id];
    if(quantity){
        const newQuantity = quantity + 1;
        resources[id] = newQuantity;
    }
    else{
        resources[id] = 1;
    }
    localStorage.setItem('resources', JSON.stringify(resources));
}
 
const getStoredCart = () => {
    let resources = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('resources');
    if(storedCart){
        resources = JSON.parse(storedCart);
    }
    return resources;
}

const removeFromDb = id =>{
    const storedCart = localStorage.getItem('resources');
    if(storedCart){
        const resources = JSON.parse(storedCart);
        if(id in resources){
            delete resources[id];
            localStorage.setItem('resources', JSON.stringify(resources));
        }
    }
}

const deleteresources = () =>{
    localStorage.removeItem('resources');
}

export {
    addToDb, 
    removeFromDb,
    getStoredCart,
    deleteresources
}