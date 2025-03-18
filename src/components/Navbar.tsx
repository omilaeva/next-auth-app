import React from 'react';
import Link from "next/link";
import {SignIn} from "@/components/auth/signin-button";
import {auth} from "@/lib/auth";
import {SignOut} from "@/components/auth/signout-button";

async function Navbar() {
  const session = await auth();
  console.log(session);

  return (
    <nav className="bg-zinc-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link className="text-lg font-semibold text-gray-800" href="/">Home</Link>
          {session ? <SignOut/> : <SignIn />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;