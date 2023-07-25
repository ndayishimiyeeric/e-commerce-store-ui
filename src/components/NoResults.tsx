import React from 'react';

interface NoResultsProps {
    message?: string;
}
const NoResults = ({message}: NoResultsProps) => {
    return (
        <div className="flex items-center justify-center h-full w-full text-neutral-500">
            {message ? `${message}` : "No results found"}
        </div>
    );
};

export default NoResults;
