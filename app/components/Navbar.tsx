import React from 'react';
import Link from "next/link";



function Navbar() {
    return (
        <nav className="flex items-center justify-center h-28">
            <div className="flex items-center justify-center gap-4">
                <Link href="/" className="flex justify-center items-center p-3 md:p-4 bg-bg rounded-3xl text-base font-bold">Home</Link>
                <Link href="/about" className="flex justify-center items-center p-3 md:p-4 bg-bg rounded-3xl text-base font-bold">About</Link>
                <Link href="/works" className="flex justify-center items-center p-3 md:p-4 bg-bg rounded-3xl text-base font-bold">Works</Link>
                <Link href="/contacts" className="flex justify-center items-center p-3 md:p-4 bg-bg rounded-3xl text-base font-bold">Contacts</Link>
            </div>
        </nav>
    );
}

export default Navbar;