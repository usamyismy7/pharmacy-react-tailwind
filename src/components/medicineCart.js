import React from 'react'

import { medicines } from './pharmacyData';

function MedicineCart() {

    // my orders section -> title div -> total Items count logic
    const [totalItems, setTotalItems] = React.useState(1);
    const medicine = medicines.slice(0, 3);
    React.useEffect(() => {
        const len = medicine.length;
        setTotalItems(len);
    }, [medicine.length])

    // my orders section -> body div -> counter function
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

    return (
        <div className='bg-gray-50 py-20 px-32 grid grid-cols-[65%_35%] gap-5'>

            {/* my orders section */}
            <div className=''>

                {/* title div */}
                <div className='flex flex-row items-center gap-5 pb-3'>
                    <h1 className='text-xl font-bold'>My Orders</h1>
                    <p className='mt-1 text-sm text-gray-500'>{totalItems} Item(s)</p>
                </div>

                {/* body div */}
                <div className='w-full bg-white rounded-lg h-fit'>
                    <div className=''>
                        {
                            medicine.map((item, index) => (
                                <>
                                    <div className='grid grid-cols-[20%_60%_20%] py-4'>

                                        {/* img div */}
                                        <div className='flex items-center justify-center'>
                                            <img src={item.img} alt="medicine" height="40px" width="100px" />
                                        </div>

                                        {/* details div */}
                                        <div className='flex flex-col gap-2'>
                                            <p className='text-sm text-gray-500'>
                                                Rs{" "}
                                                <span className="text-xl font-bold text-red-700">
                                                    {item.price}
                                                </span>
                                            </p>
                                            <p className='font-semibold text-gray-600'>
                                                {item.name}
                                            </p>
                                            <div className='flex flex-row gap-4'>
                                                <div className='flex flex-row items-center gap-1'>
                                                    <button className='flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full'>
                                                        <ion-icon name="heart-outline" style={{ fontSize: 20 }}></ion-icon>
                                                    </button>
                                                    <p className='text-sm text-gray-500'>Add to Wishlist</p>
                                                </div>

                                                <div className='flex flex-row items-center gap-1'>
                                                    <button className='flex items-center justify-center w-8 h-8 bg-red-100 rounded-full'>
                                                        <ion-icon name="trash-outline" style={{ fontSize: 20 }}></ion-icon>
                                                    </button>
                                                    <p className='text-sm text-gray-500'>
                                                        Remove
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* counter div */}
                                        <div className='flex flex-row gap-8 p-1 mt-5 rounded-lg bg-slate-100 w-fit h-fit'>
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
                                    <hr />
                                </>
                            ))
                        }
                    </div>
                </div>
            </div>


            {/* orders summary section */}
            <div className=''>

                {/* title div */}
                <h1 className='pb-3 text-xl font-bold'>Order Summary</h1>

                {/* body div */}
                <div className='w-full bg-white rounded-lg h-fit'>
                    <div className="flex flex-row items-center justify-between p-4">
                        <div className=''>
                            <p className="font-medium text-gray-500">Subtotal ({totalItems} item)</p>
                            <p className="font-medium text-gray-500">Discount</p>
                            <p className="font-medium text-gray-500">Coupon</p>
                            <p className="font-medium text-gray-500">You Saved</p>
                            <p className="font-medium text-gray-500">Shipping Fees</p>
                        </div>
                        <div className=''>
                            <p className="font-bold">Rs 120</p>
                            <p className="font-bold">Rs 120</p>
                            <p className="font-bold text-blue-500">Rs 120</p>
                            <p className="font-bold">Rs 120</p>
                            <p className="font-bold text-green-500">Free</p>
                        </div>
                    </div>
                    <hr />
                    <div className='p-4'>
                        <div className='flex flex-row justify-between'>
                            <h2 className='font-extrabold'>Total</h2>
                            <p className='font-extrabold'>Rs 120</p>
                        </div>
                        <button className='w-full h-10 mx-1 my-2 font-semibold text-center text-white uppercase bg-blue-800 rounded-2xl'>
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MedicineCart