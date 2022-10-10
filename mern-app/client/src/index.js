// Import dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// CSS
import './css/index.css';

// Components./components/functions/NewUserPage
import LoginPage from './pages/LoginPage';
import NewUserPage from './pages/NewUserPage';
import ErrorPage from './pages/ErrorPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Routes>
            <Route path ='/' element={<LoginPage/>}/>
            <Route path ='/signup' element={<NewUserPage/>}/>
            <Route path ='*' element={<ErrorPage/>}/>
        </Routes>
    </Router>
);