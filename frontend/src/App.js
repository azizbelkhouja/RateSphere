import React from 'react';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import { Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';

function App() {

    const [books, setBooks] = useState();

    const getBooks = async () => {
        try {
            const response = await api.get('/api/v1/books');
            console.log(response.data);
            setBooks(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getBooks();
    }, []);

    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<Home />} ></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;