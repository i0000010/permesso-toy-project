'use client';

import React, { KeyboardEvent, useState } from 'react';
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import SearchResult from './SearchResult';

interface SearchResult {
    pageContent: string;
    metadata: {
        post_id: number,
        table: "posts" | "comments",
        text: string;
    };
}

const Search: React.FC = () => {

    const [query, setQuery] = useState<string>('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const [error, setError] = useState(null);

    const handleSubmit = async (event: KeyboardEvent<HTMLInputElement>) => {
        console.log('submit query: ', query);
        event.preventDefault();
        setError(null);
        setResults([]);
    
        try {
          const response = await fetch('/api/vectors/query', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query }),
          });
    
          if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
          }
    
          const data = await response.json();
          console.log('data: ', data);
          setResults(data);
        } catch (err: any) {
          setError(err.message);
        }
      };

    return (
        <Combobox>
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute my-2 mx-3" aria-hidden="true" />    
            <ComboboxInput
                className="block w-full rounded-md border-0 bg-white dark:bg-gray-700 py-1.5 pl-10 pr-3 text-gray-900 dark:text-gray-300 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6"
                placeholder="Search"
                type="search"
                autoComplete="off"
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleSubmit(e);
                    }
                }}
            />
            <ComboboxOptions
                className="absolute py-1 mt-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg z-10 sm:text-sm sm:leading-5"
            >
                {error && <p>{error}</p>}
                {results && results.length > 0 && results.map((result) => (
                    <ComboboxOption key={result.metadata.post_id} value={result.pageContent}>
                        <SearchResult
                            post_id={result.metadata.post_id}
                            table={result.metadata.table}
                            content={result.pageContent}
                        />
                    </ComboboxOption>
                ))}
            </ComboboxOptions>
        </Combobox>
    )


    return (
      <>
        <label htmlFor="search" className="sr-only">
            Search
            </label>
            <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
                id="search"
                name="search"
                className="block w-full rounded-md border-0 bg-white dark:bg-gray-700 py-1.5 pl-10 pr-3 text-gray-900 dark:text-gray-300 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6"
                placeholder="Search"
                type="search"
                autoComplete="off"
            />
            </div>
        </>  
    )
}

export default Search;