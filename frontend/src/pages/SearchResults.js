import React, { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function SearchResults() {
    const { searchResults } = useContext(SearchContext);

    return (
        <div>
            <Header />
            <Navbar />
            <div className="content">
                <h1>Search Results</h1>
                {searchResults.length > 0 ? (
                    searchResults.map((result, index) => (
                        <div key={index}>
                            <h2>
                                <a href={result.pageLink}>{result.pageTitle}</a>
                            </h2>
                            <ul>
                                {result.matchedSections.map((section, index) => (
                                    <li key={index}>
                                        <a href={section.sectionLink}>{section.sectionTitle}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                ) : (
                    <p>No results found for your search.</p>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default SearchResults;
