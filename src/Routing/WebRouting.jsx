import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from '../Screens/Main Page/MainPage';
import AddToCart from '../Screens/Add to Cart/AddToCart';
import Payment from '../Screens/Payment/Payment';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />            
                <Route path="/payment" element={<Payment />} />
                <Route path="/cart" element={<AddToCart />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
