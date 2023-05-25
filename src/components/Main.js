import React from 'react';
import { Outlet } from 'react-router-dom';

import PharmacyHeader from "./pharmacyHeader";

function Main() {
    return (
        <>
            <PharmacyHeader />
            <Outlet />
        </>
    )
}

export default Main;