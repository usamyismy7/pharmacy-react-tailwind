import React from 'react';

import { medicines } from './pharmacyData';

function MedicineDetails() {

    // top section -> about product div -> counter function
    const start = 1;
    const [count, setCount] = React.useState(start);
    function addCount() {
        return setCount(count + 1);
    }
    function subCount() {
        return setCount(count - 1);
    }
    function counter(myFunc) {
        if (count < start) {
            return setCount(start);
        }
        else {
            return myFunc;
        }
    }


    // bottom section -> product details div -> switch details function
    const [description, setDescription] = React.useState(true);
    const [activeDescription, setActiveDescription] = React.useState(true);
    const [activeReview, setActiveReview] = React.useState(false);
    function showDetails() {
        if (description) {
            return medicines[0].description;
        }
        else {
            return <p>Stars: {medicines[0].reviews}</p>
        }
    }
    function showDescription() {
        if (!description) {
            setDescription(true);
            setActiveDescription(true);
            setActiveReview(false);
        }
    }
    function showReviews() {
        if (description) {
            setDescription(false);
            setActiveDescription(false);
            setActiveReview(true);
        }
    }

    return (
        <div className='bg-gray-50'>

            {/* top section */}
            <div className='grid grid-cols-[50%_50%] justify-center items-center py-10'>

                {/* product image div */}
                <div className='flex items-center justify-center py-24 ml-64 mr-6 bg-white'>
                    <img height="80px" width="200px" src={medicines[0].img} alt="medicines" />
                </div>

                {/* about product div */}
                <div className='flex flex-col gap-4'>
                    <p className='text-sm font-medium text-gray-400 capitalize'>{medicines[0].category}</p>
                    <h2 className='text-2xl font-semibold'>{medicines[0].name}</h2>
                    <p className='text-sm text-gray-500'>Rs <span className="text-xl font-bold text-red-700">{medicines[0].price}</span></p>
                    <div className='flex flex-row gap-2'>
                        <div className='flex items-center justify-center w-10 h-10 rounded-full cursor-pointer bg-slate-100'>
                            <ion-icon name="heart-outline" style={{ fontSize: 25 }}></ion-icon>
                        </div>
                        <div className='flex items-center justify-center w-10 h-10 rounded-full cursor-pointer bg-slate-100'>
                            <ion-icon name="share-social" style={{ fontSize: 25 }}></ion-icon>
                        </div>
                    </div>
                    <div className='flex items-center justify-center w-64 h-8 gap-2 rounded-lg bg-slate-100'>
                        <ion-icon name="bicycle-outline" style={{ fontSize: 20 }}></ion-icon>
                        <p className='font-medium font'>Delivery By Tomorrow 10 AM</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='px-1 font-semibold'>Quantity</p>
                        <div className='flex flex-row gap-8 p-1 rounded-lg bg-slate-100 w-fit'>
                            <button className='flex items-center px-1 rounded-md bg-slate-200' onClick={() => counter(subCount())}>
                                <ion-icon name="remove-outline"></ion-icon>
                            </button>
                            <div className='flex items-center'>
                                <p className=''>{count}</p>
                            </div>
                            <button className='flex items-center px-1 rounded-md bg-slate-200' onClick={() => counter(addCount())}>
                                <ion-icon name="add-outline"></ion-icon>
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <button className='h-10 font-semibold text-center text-gray-200 bg-blue-800 hover:bg-blue-900 w-52 rounded-3xl focus:ring focus:ring-3 ring-blue-500'>Add to Cart</button>
                        <button className='h-10 font-semibold text-center text-gray-200 bg-green-600 hover:bg-green-700 w-52 rounded-3xl focus:ring focus:ring-3 ring-green-400'>Buy Now</button>
                    </div>
                </div>
            </div>


            {/* bottom section */}
            {/* product details div */}
            <div className='px-10'>
                <div className=''>
                    <button className={activeDescription ? 'border-b-2 border-blue-800 text-blue-700 hover:bg-blue-200 text-center h-10 w-32 font-medium' : 'font-medium h-10 w-32 hover:bg-blue-100 text-center'} onClick={() => showDescription()}>Description</button>
                    <button className={activeReview ? 'border-b-2 border-blue-800 text-blue-700 hover:bg-blue-200 text-center h-10 w-32 font-medium' : 'h-10 w-32 font-medium text-center hover:bg-blue-100'} onClick={() => showReviews()}>Reviews</button>
                </div>
                <hr />
                <div className='px-2 pt-4 pb-10'>
                    <p className='w-1/2'>{showDetails()}</p>
                </div>
            </div>
        </div>
    )
}

export default MedicineDetails