import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { LoginRegisterPage, TodoAppPage } from './pages';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<LoginRegisterPage />} />
                <Route path='/app' element={<TodoAppPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
