import React from 'react';
import Item from '../Item/Item';
import './Cart.css';


const Cart = ({ cart }) => {

    return (
        <div className='sticky top-5'>
            <div className="bg-[#19223C] shadow-xl cart-box rounded-lg relative">
                <div className="card-body">
                    <h2 className="font-semibold text-3xl text-center">Total Added Product: {cart.length}</h2>
                    <hr />
                    {
                        cart.map(meal => <Item key={meal.idMeal} meal={meal}></Item>)
                    }
                    <div className="card-actions justify-end">
                        <button className="btn btn-info text-white">checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
