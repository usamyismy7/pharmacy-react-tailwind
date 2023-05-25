import React from 'react';

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
                    <img
                        src="/assets/medxCure.png"
                        alt="logo"
                        width="100px"
                        height="100px"
                    />
                </ div>


                {/* search div */}
                < div className="grid grid-cols-[80%_20%] my-3 mx-10" >
                    <div className="border-2 border-gray rounded-l-full p-2 grid grid-cols-[5%_95%] hover:ring hover:ring-3 ring-gray-200">
                        <div className="flex justify-center items-center">
                            <ion-icon className="" style={{ color: "gray" }} size="small" name="search-sharp"></ion-icon>
                        </div>
                        <input
                            className="outline-none"
                            placeholder="Search for any product"
                        />
                    </div>
                    <button className="focus:ring focus:ring-3 ring-teal-300  bg-teal-500 rounded-r-full text-white font-semibold">Search</button>
                </ div >


                {/* more items div */}
                < div className="grid grid-cols-3 mr-4" >

                    {/* location div */}
                    < div className="my-3" >
                        <Listbox value={selected} onChange={setSelected}>
                            <div className="relative">
                                <Listbox.Button className="relative cursor-default bg-white text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm w-full">
                                    <span className="block truncate text-sm text-gray-500">Deliver to</span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 bottom-6">
                                        <ChevronDownIcon
                                            className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </span>
                                    <span className="block truncate text-base font-bold">{selected.name}</span>
                                </Listbox.Button>
                                <Transition
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Listbox.Options className="w-32 absolute mt-1 max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
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
                                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
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
                    < div className="flex justify-center gap-1 items-center border-l-2 my-5" >
                        <p className="text-base font-bold">Wishlist</p>
                        <ion-icon name="heart-outline" size="large"></ion-icon>
                    </ div >

                    {/* service div */}
                    < div className="flex justify-center gap-1 items-center border-l-2 my-5" >
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