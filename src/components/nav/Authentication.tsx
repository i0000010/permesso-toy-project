/**
 * Authentication component with user login and logout functionality.
 * 
 * Mean to be used in the Navbar component, but abstracted away
 * for use in provider pattern.
 */
'use client';

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const Authentication: React.FC = () => {
    const { user, logIn, logOut } = useAuth();
    const router = useRouter();

    return (
        <>
        {!user ? (
            <ul className="flex">
            <li onClick={() => logIn(router)} className="p-2 cursor-pointer">
                Login
            </li>
            <li onClick={() => logIn(router)} className="p-2 cursor-pointer">
                Sign up
            </li>
            </ul>
        ) : (
            <div>
            <p>Welcome, {user.displayName}</p>
            <p className="cursor-pointer" onClick={() => logOut(router)}>
                Sign out
            </p>
            </div>
        )}
      </>
    )
}

export default Authentication;