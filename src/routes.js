import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import axios from 'axios';

import HomePage from './pages/homePage';
import Page404 from './pages/page404';
import BlogHomePage from './pages/blogPost/blogHomePage';
import BlogList from './pages/blogPost/blogPostList/blogPostList';

import { API } from './config/api';

import './index.css'
import Loading from './pages/loading';

const AppRouter = () => {
    const baseUrl = API + '/blog/categories';
    const [data, setData] = React.useState(null);
    const [categories, setCategories] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseUrl).then(res => {
            const temp = res.data;
            setData(temp);
        });
    }, [])

    React.useEffect(() => {
        if (data) {
            setCategories(data.map(cat => cat.categoryName));
        }
    }, [data])

    if (!categories) {
        return <Loading />
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/blog' element={<BlogHomePage />} />
                {categories?.map((cat, key) => {
                    const path = `/blog/${cat}`;
                    return (
                        <Route path={path} element={<BlogList category={cat} />} key={key} />
                    )
                })}
                <Route path="*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    )

}

export default AppRouter;