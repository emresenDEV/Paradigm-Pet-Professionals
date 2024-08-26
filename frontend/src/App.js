import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
            <div>
                <Header />
                <Navbar />
                <Routes>
                <Route path="/" exact component={Home} />
                    <Route path="/dogs" component={Dogs} />
                    <Route path="/cats" component={Cats} />
                    <Route path="/birds" component={Birds} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/search-results" component={SearchResults} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
