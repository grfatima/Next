import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-900 flex gap-30 text-2xl justify-center items-center text-white h-[10vh]">
      <Link href="/">Users ssr</Link>
      <Link href="/usersCsr">Users csr</Link>
      <Link href="/users">Users</Link>
    </div>
  );
};

export default Navbar;
