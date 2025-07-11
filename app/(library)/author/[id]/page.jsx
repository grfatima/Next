import React from "react";
import Link from "next/link";

const Page = async ({ params }) => {
  const { id } = params;

  return (
    <div className="flex flex-col items-center mt-20 space-y-6">
      <h1 className="text-3xl text-gray-600">ID: {id}</h1>

      <Link href="/author">
        <button className="bg-pink-300 text-white px-4 py-2 rounded hover:bg-pink-300">
          Geri qayıt
        </button>
      </Link>
    </div>
  );
};

export default Page;
