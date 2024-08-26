import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchResults, setSearchResults] = useState([]);

    const searchWebsite = (query, content) => {
        const results = [];
        query = query.toLowerCase();

        content.forEach(page => {
            const matchedSections = [];

            // Search for the query in the page's content
            page.sections.forEach(section => {
                if (section.content.toLowerCase().includes(query)) {
                    matchedSections.push({
                        sectionTitle: section.title,
                        sectionLink: section.link
                    });
                }
            });

            if (matchedSections.length > 0) {
                results.push({
                    pageTitle: page.title,
                    pageLink: page.link,
                    matchedSections
                });
            }
        });

        setSearchResults(results);
    };

    return (
        <SearchContext.Provider value={{ searchResults, searchWebsite }}>
            {children}
        </SearchContext.Provider>
    );
};
