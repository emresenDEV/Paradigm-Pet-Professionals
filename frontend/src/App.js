import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dogs from './pages/Dogs';
import Cats from './pages/Cats';
import Birds from './pages/Birds';
import Contact from './pages/Contact';
import SearchResults from './pages/SearchResults';
import { SearchProvider } from './context/SearchContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
    return (
        <Router>
            <SearchProvider>
                <Header />
                <Navbar />
                <Routes>
                <Route path="/" element={<Home/>} />
                    <Route path="/dogs" element={<Dogs/>} />
                    <Route path="/cats" element={<Cats/>} />
                    <Route path="/birds" element={<Birds/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/search-results" element={<SearchResults/>} />
                </Routes>
                <Footer />
            </SearchProvider>
        </Router>
    );
}

export default App;
