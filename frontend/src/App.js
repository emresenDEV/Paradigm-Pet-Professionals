import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Birds from './pages/Birds';
import Cats from './pages/Cats';
import Dogs from './pages/Dogs';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/birds" element={<Birds />} />
                    <Route path="/cats" element={<Cats />} />
                    <Route path="/dogs" element={<Dogs />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
