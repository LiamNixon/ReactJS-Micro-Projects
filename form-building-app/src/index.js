// Import dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// CSS
import './css/tailwind.css';
import './css/GlobalStyles.css';

// Pages
import HomePage from './pages/HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Routes>
            <Route path ='/' element={<HomePage/>}/>
        </Routes>
    </Router>
);