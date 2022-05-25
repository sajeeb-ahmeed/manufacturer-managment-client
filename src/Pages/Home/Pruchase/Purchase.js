import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Purchase = () => {
    const { id } = useParams();

    // console.log(id);
    const [user, setUser] = useState([]);
    const { _id, name, img, description, price, quantity, minimumOrder } = user;
    console.log(user);
    const [isReload, setIsReload] = useState(false);
    useEffect(() => {
        fetch(`http://localhost:5000/service/${id}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [isReload, id]);

    const handleUpdateQuantity = e => {
        e.preventDefault();

        const quantity = e.target.quantity.value;
        const newQuantity = parseInt(quantity) - parseInt(user?.quantity)
        const updateQuantity = { newQuantity: newQuantity }

        const url = `http://localhost:5000/service/${id}`
        if (!quantity) {
            toast.error('Please add some quantity', { id: 'error' })
        } else {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateQuantity)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsReload(!isReload);
                    e.target.reset();
                    toast.success("Stock add Successful", { id: 'success' });
                });
        }
    };
    const handleDeliveryProduct = e => {

        const quantity = user?.quantity;
        const inputQuantity = e.target.quantity.value;

        const newQuantity = parseInt(inputQuantity) - parseInt(quantity)
        const updateQuantity = { newQuantity: newQuantity }



        const url = `http://localhost:5000/delivery/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setIsReload(!isReload);
                toast.success('Delivery Successful', { id: 'success' })
            })
    }

    return (

        <div className='container my-5 inventory-container purchease-container'>
            <div className='service'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10 card-bg2">
                        <img src={img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body nav-bg items-center text-center">
                        <h2 className="card-title">{name}</h2>
                        <p> {description?.slice(0, 150) + '...'}</p>
                        <code className='text-blue-500'>Price ${price}</code>

                        <p> Current Stock: {quantity}</p>
                        <code className='font-bold text-red-400'> Minimum Order: {minimumOrder}</code>

                    </div>
                </div>
            </div>

            <div className="bg-slate-400">
                <div className=''>

                    {/* <button className=" cta">
                            <span onClick={() => handleDeliveryProduct(user?._id)}>Delivered </span>
                            <input className='cards p-2 me-2 mb-3' type="text" name='quantity' placeholder='Decrase Quantity?' />

                            <svg viewBox="0 0 13 10" height="10px" width="15px">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                        </button> */}

                    <form onSubmit={handleDeliveryProduct}>
                        <input className='cards p-2 me-2 mb-3' type="text" name='quantity' placeholder='Decrase Quantity?' />
                        <button className='cta cta4'>
                            <span>
                                <input className='cta4 fw-bold' type="submit" value="Add quantity" />
                            </span>

                        </button>
                    </form>


                    <>
                        <form onSubmit={handleUpdateQuantity}>
                            <input className='cards p-2 me-2 mb-3' type="text" name='quantity' placeholder='Incrase Quantity?' />
                            <button className='cta cta4'>
                                <span>
                                    <input className='cta4 fw-bold' type="submit" value="Purchase quantity" />
                                </span>

                            </button>
                        </form>
                    </>
                </div>
            </div>




            <div className='text-center mt-4'>
                <Link to={`/ManageInventory`}>
                    <button className=" cta">
                        <span>Manage Inventory</span>
                        <svg viewBox="0 0 13 10" height="10px" width="15px">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Purchase;