import React from 'react'

import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import { ChevronRightIcon } from '@heroicons/react/20/solid';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { categories, prescription, medicines } from './pharmacyData';
import './pharmacyStyles.css';

function PharmacyHome() {

    // react slick configurations
    function Arrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style }}
                onClick={onClick}
            />
        )
    }
    const slickSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />
    }

    return (
        <div className="">

            {/* categories section */}
            <section className="px-2 py-6">
                <h1 className="px-4 pt-2 pb-4 text-lg font-semibold text-teal-600">Categories</h1>
                <div className="grid grid-cols-8 gap-5 px-4">
                    {categories.map((item, index) => (
                        <ul className="" key={index}>
                            <li className="grid justify-center grid-rows-2">
                                <div className="flex items-center justify-center w-20 h-20 my-2 bg-white border border-gray-300 rounded-full cursor-pointer hover:bg-gray-100">
                                    <img alt="" src={item.img} className="" />
                                </div>
                                <p className="mr-8 text-sm font-semibold text-center text-gray-500 overflow-clip">{item.name}</p>
                            </li>
                        </ul>
                    ))}
                </div>
            </section>


            {/* prescription */}
            <section className="px-16">
                <div className="grid grid-cols-[30%_70%] justify-center bg-teal-400 px-10 py-5 rounded-2xl">

                    {/* illustration div */}
                    <div className="">
                        <img alt="illustration" src="/assets/medicine.svg" height="300px" width="300px" />
                    </div>

                    {/* buttons div */}
                    <div className="grid items-center justify-center grid-cols-3">
                        {
                            prescription.map((item, index) => (
                                <ul className="" key={index}>
                                    <li className="px-20">
                                        <p className="font-semibold text-gray-500">{item.id}</p>
                                        <div className="flex flex-col items-center justify-center">
                                            <div className="flex items-center justify-center w-16 h-16 bg-gray-300 rounded-full opacity-50 cursor-pointer hover:bg-gray-400">
                                                <ion-icon name={item.icon} size='large' style={{ color: 'teal' }}></ion-icon>
                                            </div>
                                            <p className="pt-4 text-sm font-semibold text-center overflow-clip">{item.desc}</p>
                                        </div>
                                    </li>
                                </ul>
                            ))
                        }
                    </div>
                </div>
            </section>

            {/* 5 carousels */}
            <section className="px-10 py-6">

                {/* offers carousel */}
                <div className="py-6">
                    <div className='flex flex-row justify-between px-2'>
                        <h1 className="pt-2 pb-4 text-lg font-semibold text-teal-600">Offers</h1>
                        <Link className='flex flex-row items-center' to="/browse-medicine">
                            <p className='font-semibold text-teal-600'>View All</p>
                            <ChevronRightIcon className="w-5 h-5 text-teal-600" aria-hidden="true" />
                        </Link>
                    </div>
                    <Slider {...slickSettings} className="">
                        {
                            medicines.map((item, index) => (
                                <div className="">
                                    <ul className="h-64 mx-2 border border-gray-300 rounded-md" key={index}>
                                        <Link to='/medicine-details'>
                                            <li className="grid grid-rows-2">
                                                <div className="flex items-center justify-center w-full h-40">
                                                    <img alt="medicine" height="40px" width="170px" src={item.img} className="" />
                                                </div>
                                                <div className="px-2 py-1">
                                                    <h2 className="font-semibold">{item.name}</h2>
                                                    <p className="">Rs <span className="font-medium text-red-700">{item.price}</span></p>
                                                    <Link to="medicine-cart">
                                                        <div className="flex items-center justify-center mt-1">
                                                            <button className="w-full h-8 font-semibold text-center text-gray-200 bg-teal-500 rounded-3xl">Add to Cart</button>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </li>
                                        </Link>
                                    </ul>
                                </div>
                            ))
                        }
                    </Slider>
                </div>

                {/* medicines carousel */}
                <div className="py-6">
                    <div className='flex flex-row justify-between px-2'>
                        <h1 className="pt-2 pb-4 text-lg font-semibold text-teal-600">Medicines</h1>
                        <Link className='flex flex-row items-center' to="/browse-medicine">
                            <p className='font-semibold text-teal-600'>View All</p>
                            <ChevronRightIcon className="w-5 h-5 text-teal-600" aria-hidden="true" />
                        </Link>
                    </div>
                    <Slider {...slickSettings} className="">
                        {
                            medicines.map((item, index) => (
                                <div className="">
                                    <ul className="h-64 mx-2 border border-gray-300 rounded-md" key={index}>
                                        <Link to='/medicine-details'>
                                            <li className="grid grid-rows-2">
                                                <div className="flex items-center justify-center w-full h-40">
                                                    <img alt="medicine" height="40px" width="170px" src={item.img} className="" />
                                                </div>
                                                <div className="px-2 py-1">
                                                    <h2 className="font-semibold">{item.name}</h2>
                                                    <p className="">Rs <span className="font-medium text-red-700">{item.price}</span></p>
                                                    <Link to="medicine-cart">
                                                        <div className="flex items-center justify-center mt-1">
                                                            <button className="w-full h-8 font-semibold text-center text-gray-200 bg-teal-500 rounded-3xl">Add to Cart</button>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </li>
                                        </Link>
                                    </ul>
                                </div>
                            ))
                        }
                    </Slider>
                </div>

                {/* hair care carousel */}
                <div className="py-6">
                    <div className='flex flex-row justify-between px-2'>
                        <h1 className="pt-2 pb-4 text-lg font-semibold text-teal-600">Hair Care</h1>
                        <Link className='flex flex-row items-center' to="/browse-medicine">
                            <p className='font-semibold text-teal-600'>View All</p>
                            <ChevronRightIcon className="w-5 h-5 text-teal-600" aria-hidden="true" />
                        </Link>
                    </div>
                    <Slider {...slickSettings} className="">
                        {
                            medicines.map((item, index) => (
                                <div className="">
                                    <ul className="h-64 mx-2 border border-gray-300 rounded-md" key={index}>
                                        <Link to='/medicine-details'>
                                            <li className="grid grid-rows-2">
                                                <div className="flex items-center justify-center w-full h-40">
                                                    <img alt="medicine" height="40px" width="170px" src={item.img} className="" />
                                                </div>
                                                <div className="px-2 py-1">
                                                    <h2 className="font-semibold">{item.name}</h2>
                                                    <p className="">Rs <span className="font-medium text-red-700">{item.price}</span></p>
                                                    <Link to="medicine-cart">
                                                        <div className="flex items-center justify-center mt-1">
                                                            <button className="w-full h-8 font-semibold text-center text-gray-200 bg-teal-500 rounded-3xl">Add to Cart</button>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </li>
                                        </Link>
                                    </ul>
                                </div>
                            ))
                        }
                    </Slider>
                </div>

                {/* skin care carousel */}
                <div className="py-6">
                    <div className='flex flex-row justify-between px-2'>
                        <h1 className="pt-2 pb-4 text-lg font-semibold text-teal-600">Skin Care</h1>
                        <Link className='flex flex-row items-center' to="/browse-medicine">
                            <p className='font-semibold text-teal-600'>View All</p>
                            <ChevronRightIcon className="w-5 h-5 text-teal-600" aria-hidden="true" />
                        </Link>
                    </div>
                    <Slider {...slickSettings} className="">
                        {
                            medicines.map((item, index) => (
                                <div className="">
                                    <ul className="h-64 mx-2 border border-gray-300 rounded-md" key={index}>
                                        <Link to='/medicine-details'>
                                            <li className="grid grid-rows-2">
                                                <div className="flex items-center justify-center w-full h-40">
                                                    <img alt="medicine" height="40px" width="170px" src={item.img} className="" />
                                                </div>
                                                <div className="px-2 py-1">
                                                    <h2 className="font-semibold">{item.name}</h2>
                                                    <p className="">Rs <span className="font-medium text-red-700">{item.price}</span></p>
                                                    <Link to="medicine-cart">
                                                        <div className="flex items-center justify-center mt-1">
                                                            <button className="w-full h-8 font-semibold text-center text-gray-200 bg-teal-500 rounded-3xl">Add to Cart</button>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </li>
                                        </Link>
                                    </ul>
                                </div>
                            ))
                        }
                    </Slider>
                </div>

                {/* gym products carousel */}
                <div className="py-6">
                    <div className='flex flex-row justify-between px-2'>
                        <h1 className="pt-2 pb-4 text-lg font-semibold text-teal-600">Gym Products</h1>
                        <Link className='flex flex-row items-center' to="/browse-medicine">
                            <p className='font-semibold text-teal-600'>View All</p>
                            <ChevronRightIcon className="w-5 h-5 text-teal-600" aria-hidden="true" />
                        </Link>
                    </div>
                    <Slider {...slickSettings} className="">
                        {
                            medicines.map((item, index) => (
                                <div className="">
                                    <ul className="h-64 mx-2 border border-gray-300 rounded-md" key={index}>
                                        <Link to='/medicine-details'>
                                            <li className="grid grid-rows-2">
                                                <div className="flex items-center justify-center w-full h-40">
                                                    <img alt="medicine" height="40px" width="170px" src={item.img} className="" />
                                                </div>
                                                <div className="px-2 py-1">
                                                    <h2 className="font-semibold">{item.name}</h2>
                                                    <p className="">Rs <span className="font-medium text-red-700">{item.price}</span></p>
                                                    <div className="flex items-center justify-center mt-1">
                                                        <button className="w-full h-8 font-semibold text-center text-gray-200 bg-teal-500 rounded-3xl">Add to Cart</button>
                                                    </div>
                                                </div>
                                            </li>
                                        </Link>
                                    </ul>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </section>
        </div >
    )
}

export default PharmacyHome