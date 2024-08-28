import React, { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';


function SearchResults() {
    const { searchResults } = useContext(SearchContext);

    return (
        <div>
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
        </div>
    );
}

export default SearchResults;
