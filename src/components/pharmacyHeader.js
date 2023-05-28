import React from 'react';
import { Link } from 'react-router-dom';

import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';

import { people } from './pharmacyData';

function PharmacyHeader() {

    // for 'location' in 'more items div' in 'top section'
    const [selected, setSelected] = useState(people[0]);

    return (
        <div className=''>

            {/* top section */}
            < section className="grid grid-cols-[10%_60%_30%] pt-3" >

                {/* logo div */}
                < div className="flex justify-center pl-6" >
                    <Link to="/">
                        <img
                            src="/assets/medxCure.png"
                            alt="logo"
                            width="100px"
                            height="100px"
                        />
                    </Link>
                </ div>


                {/* search div */}
                < div className="grid grid-cols-[80%_20%] my-3 mx-10" >
                    <div className="border-2 border-gray rounded-l-full p-2 grid grid-cols-[5%_95%] hover:ring hover:ring-3 ring-gray-200">
                        <div className="flex items-center justify-center">
                            <ion-icon className="" style={{ color: "gray" }} size="small" name="search-sharp"></ion-icon>
                        </div>
                        <input
                            className="outline-none"
                            placeholder="Search for any product"
                        />
                    </div>
                    <button className="font-semibold text-white bg-teal-500 rounded-r-full focus:ring focus:ring-3 ring-teal-300">Search</button>
                </ div >


                {/* more items div */}
                < div className="grid grid-cols-3 mr-4" >

                    {/* location div */}
                    < div className="my-3" >
                        <Listbox value={selected} onChange={setSelected}>
                            <div className="relative">
                                <Listbox.Button className="relative w-full text-left bg-white cursor-default focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                                    <span className="block text-sm text-gray-500 truncate">Deliver to</span>
                                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none bottom-6">
                                        <ChevronDownIcon
                                            className="w-5 h-5 text-gray-400" aria-hidden="true" />
                                    </span>
                                    <span className="block text-base font-bold truncate">{selected.name}</span>
                                </Listbox.Button>
                                <Transition
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Listbox.Options className="absolute z-10 w-32 py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        {people.map((person, personIdx) => (
                                            <Listbox.Option
                                                key={personIdx}
                                                className={({ active }) => `relative cursor-default select-none py-2 pl-10 ${active ? 'bg-teal-100 text-teal-900' : 'text-gray-900'}`}
                                                value={person}>
                                                {({ selected }) => (
                                                    <>
                                                        <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                                            {person.name}
                                                        </span>
                                                        {selected ? (
                                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-teal-600">
                                                                <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                                            </span>
                                                        ) : null}
                                                    </>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </Listbox>
                    </ div >

                    {/* wishlist div */}
                    < div className="flex items-center justify-center gap-1 my-5 border-l-2" >
                        <p className="text-base font-bold">Wishlist</p>
                        <ion-icon name="heart-outline" size="large"></ion-icon>
                    </ div >

                    {/* service div */}
                    < div className="flex items-center justify-center gap-1 my-5 border-l-2" >
                        <p className="text-base font-bold">Service</p>
                        <ion-icon name="cart-outline" size="large"></ion-icon>
                        {/* cart items update functionality */}
                    </ div >
                </div >
            </section >
        </div>
    )
}

export default PharmacyHeader;