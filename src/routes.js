import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import HomePage from './pages/homePage';
import Page404 from './pages/page404';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;