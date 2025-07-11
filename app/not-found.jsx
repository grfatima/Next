import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 text-pink-400 px-4">
      <h1 className="text-6xl font-bold mb-2">404</h1>
      <p className="text-xl mb-6 text-center">
        Səhifə tapılmadı. Axtardığınız səhifə mövcud deyil və ya silinmişdir.
      </p>
      <Link
        href="/author"
        className="px-6 py-3 bg-pink-300 text-white rounded-full shadow-md hover:bg-pink-300 transition"
      >
        Ana Səhifəyə qayıt
      </Link>
    </div>
  );
};

export default NotFound;
