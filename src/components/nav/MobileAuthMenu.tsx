'use client'

import React from "react"
import Link from "next/link"
import { UserIcon } from "@heroicons/react/24/outline";
import { UserAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import ThemeSelector from "@/components/nav/ThemeSelector";
import { useCookies } from 'next-client-cookies';
import clsx from 'clsx';

const MobileAuthMenu: React.FC = () => {

    const { user, logIn, logOut } = UserAuth();
    const router = useRouter();
    const cookies = useCookies();
    const theme = cookies.get('x-theme') || 'light';

    console.log(user);

    return (
        <div className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-t border-gray-200 pb-3 pt-4">
            <div className="mx-auto flex max-w-3xl items-center px-4 sm:px-6">
                <div className="rounded-full flex-shrink-0 p-1 text-gray-400 hover:text-gray-500 dark:text-gray-300">
                    <Link href="/protected/profile">
                        <UserIcon className="h-6 w-6" aria-hidden="true" />
                        {/* Use the user's profile image here */}
                        {/* <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" /> */}
                    </Link>
                </div>
                <div className="ml-3">
                {/* <div className="text-base font-medium text-gray-800">{user.name}</div>
                <div className="text-sm font-medium text-gray-500">{user.email}</div> */}
                </div>
                <ThemeSelector theme={theme} />
                {/* <button
                type="button"
                className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <MoonIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}
            </div>
            <div className="mx-auto mt-3 max-w-3xl space-y-1 px-2 sm:px-4">
                {!user ? (
                    <button onClick={() => logIn(router)} className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-500">
                        Login
                    </button>
                ) : (
                    <button onClick={() => logOut(router)} className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-500">
                        Logout
                    </button>
                )}
            </div>
        </div>
    )
}

export default MobileAuthMenu;