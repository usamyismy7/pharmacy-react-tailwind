import React from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';

import { categories, medicines, selectCategory, selectSorting } from './pharmacyData';

function BrowseMedicine() {

    return (
        <div className='grid grid-cols-[20%_80%] bg-gray-50 p-4'>

            {/* sidebar */}
            <section className='p-4 m-4 ml-6 bg-white rounded-lg h-fit'>
                <h2 className='pb-2 text-xl font-bold text-teal-600'>Categories</h2>
                {
                    categories.map((item, index) => (
                        <ul className='' key={index}>
                            <li className='flex flex-row justify-between pb-3'>
                                <p className='text-base font-medium cursor-pointer'>{item.name}</p>
                                <p className='text-sm text-gray-500'>({item.value})</p>
                            </li>
                        </ul>
                    ))
                }
            </section>


            {/* main */}
            <section className='m-4 mr-10'>
                <div className='flex flex-row justify-between mr-4'>
                    <h2 className='pb-4 text-2xl font-bold text-teal-600'>Medicines</h2>
                    <div className='flex flex-row gap-8 pb-2'>
                        <div className='flex flex-row items-center gap-4'>
                            <p className='font-bold'>Category</p>
                            <Select options={selectCategory} />
                        </div>
                        <div className='flex flex-row items-center gap-4'>
                            <p className='font-bold'>Sort By</p>
                            <Select options={selectSorting} />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-5 gap-4">
                    {
                        medicines.map((item, index) => (
                            <ul className="h-64 bg-white border border-gray-300 rounded-md" key={index}>
                                <li className="grid grid-rows-2">
                                    <Link to='/medicine-details'>
                                        <div className="flex items-center justify-center w-full h-40">
                                            <img alt="medicine" height="40px" width="170px" src={item.img} className="" />
                                        </div>
                                    </Link>
                                    <div className="px-2 py-1">
                                        <h2 className="font-semibold">{item.name}</h2>
                                        <p className="">Rs <span className="font-medium text-red-700">{item.price}</span></p>
                                        <Link to="/medicine-cart">
                                            <div className="flex items-center justify-center mt-1">
                                                <button className="w-full h-8 font-semibold text-center text-gray-200 bg-teal-500 rounded-3xl">Add to Cart</button>
                                            </div>
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}

export default BrowseMedicine;