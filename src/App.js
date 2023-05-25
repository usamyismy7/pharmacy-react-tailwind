import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./components/Main";
import PharmacyHome from "./components/pharmacyHome";
import BrowseMedicine from "./components/browseMedicine";
import MedicineDetails from "./components/medicineDetails";
import MedicineCart from "./components/medicineCart";

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route index element={<PharmacyHome />} />
          <Route path='/browse-medicine' element={<BrowseMedicine />} />
          <Route path='/medicine-details' element={<MedicineDetails />} />
          <Route path='/medicine-cart' element={<MedicineCart />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
