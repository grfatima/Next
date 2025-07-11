import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className=" bg-pink-300 text-white flex justify-evenly h-20 items-center text-2xl">
      <Link href="/author">Author</Link>
      <Link href="/genre">Genre</Link>
      <Link href="/book">Book</Link>
    </div>
  );
};

export default Navbar;
