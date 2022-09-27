import React from 'react';
import './Meal.css';

const Meal = ({ meal, addToCart }) => {
    const { idMeal, strMeal, strInstructions, strMealThumb } = meal;

    // const handleAdd = item => { console.log(item) }


    return (
        <div className="card w-96 bg-[#19223C] shadow-xl">
            <figure><img src={strMealThumb} alt="Food item" /></figure>
            <div className="card-body">
                <h2 className="card-title">{strMeal}</h2>
                <p className='text-justify'>{strInstructions.length < 200 ? strInstructions : strInstructions.slice(0, 200)}</p>
                <div className="card-actions justify-between align-middle">
                    <div className="btn btn-warning">${idMeal}</div>
                    <button onClick={() => addToCart(meal)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Meal;

