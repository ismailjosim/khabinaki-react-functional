import React from 'react';
import './Cart.css';


const Cart = ({ cart }) => {
    const { idMeal, strMeal, strMealThumb } = cart;

    return (
        <div className='sticky top-5'>
            <div className="bg-[#19223C] shadow-xl cart-box rounded-lg relative">
                <div className="card-body">
                    <h2 className="font-semibold text-3xl text-center">Total Added Product</h2>
                    <hr />
                    <div className='flex justify-between align-middle p-3 rounded-md shadow-md bg-indigo-500'>
                        <div className='w-20'>
                            <img className='rounded-full shadow-lg' src={strMealThumb} alt="image" />
                        </div>
                        <div>
                            <h4 className='text-sm font-semibold uppercase text-white mt-7'>{strMeal}</h4>

                        </div>
                        <div>
                            <h4 className='text-sm font-medium uppercase text-white mt-7'>${idMeal}</h4>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-info text-white absolute bottom-5 left-1/3">checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
