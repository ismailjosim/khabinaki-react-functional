import React from 'react';

const Item = ({ meal }) => {
    const { idMeal, strMeal, strMealThumb } = meal;

    return (
        <div>
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
        </div>

    );
};

export default Item;
