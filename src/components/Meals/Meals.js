import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Meals.css';

const Meals = () => {
    const [meals, setMeals] = useState([]);
    let [cart, setCart] = useState([]);




    // fetch api data
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, []);




    const addToCart = (meal) => {
        setCart([...cart,meal])
        
    }
    console.log(cart)

    return (
        <div className='my-5'>
            <div className='meals_container'>
                <div className="grid lg:grid-cols-2 grid-cols-1  gap-5">
                    {
                        meals.map(meal => <Meal key={meal.idMeal} meal={meal} addToCart={addToCart}></Meal>)
                    }
                </div>
                <div className="Cart">
                    {cart.map(meal=> <Cart cart={meal}></Cart>)}
                </div>
            </div>
        </div>
    );
};

export default Meals;
