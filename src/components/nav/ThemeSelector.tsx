'use client';

import React from 'react';
import { useCookies } from 'next-client-cookies';
import { useRouter } from 'next/navigation';
import { MoonIcon } from '@heroicons/react/24/outline';

interface ThemeSelectorProps {
    theme: string;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ theme }) => {
    const router = useRouter();
    const cookies = useCookies();

    const handleThemeChange = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        cookies.set('x-theme', newTheme);
        router.refresh();
    }

    return (
        <button onClick={handleThemeChange} className="relative ml-5 flex-shrink-0 rounded-full bg-gray-100 dark:bg-gray-700 p-1 text-gray-400 hover:text-gray-500 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue">
            <span className="absolute -inset-1.5" />
            <span className="sr-only">Change theme</span>
            <MoonIcon className="h-6 w-6" aria-hidden="true" />
        </button>
    );
}

export default ThemeSelector;