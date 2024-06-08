'use client';

import React, { KeyboardEvent, useState } from 'react';
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import SearchResult from './SearchResult';
import { useQuery } from '@tanstack/react-query';

interface SearchResult {
    pageContent: string;
    metadata: {
        post_id: number,
        table: "posts" | "comments",
        text: string;
    };
}

const fetchResults = async (query: string) => {
    const response = await fetch(`/api/vectors/query?query=${query}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
};

const Search: React.FC = () => {

    const [query, setQuery] = useState<string>('');

    const { data, error, isLoading, refetch } = useQuery({
        queryKey: ['search', query],
        queryFn: () => fetchResults(query),
        enabled: false,
    });

    const handleSubmit = async (event: KeyboardEvent<HTMLInputElement>) => {
        console.log('submit query: ', query);
        event.preventDefault();
        refetch();
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
                className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-700"
            >
                {isLoading && <ComboboxOption value="Loading...">Loading...</ComboboxOption>}
                {data && data.length > 0 && data.map((result: SearchResult) => (
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