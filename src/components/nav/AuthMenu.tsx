'use client'

import React from "react"
import Link from "next/link"
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import clsx from 'clsx';

interface AuthMenuProps {
    active: boolean;
}

const AuthMenu: React.FC<AuthMenuProps> = ({ active }) => {

    const { user, logIn, logOut } = useAuth();
    const router = useRouter();

    return (
        !user ? (
            <button onClick={() => logIn(router)} className={clsx(
                {'bg-gray-100': active},
                'block px-4 py-2 text-sm text-gray-700'
                )}
            >
                Login
            </button>
        ) : (
            <>
                <Link href="/protected/profile" className={
                    clsx(
                        {'bg-gray-100': active},
                        'block px-4 py-2 text-sm text-gray-700'
                    )
                }>
                    Profile
                </Link>
                <button onClick={() => logOut(router)} className={clsx(
                    {'bg-gray-100': active},
                    'block px-4 py-2 text-sm text-gray-700'
                    )}
                >
                    Logout
                </button>
            </>
        )
    )
}

export default AuthMenu;