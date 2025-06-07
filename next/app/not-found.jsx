import React from "react";
import "@/public/css/globals.css";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-300">
      <div className="bg-gray-900 text-white shadow-2xl rounded-xl p-10 text-center max-w-md">
        <h1 className="text-9xl font-extrabold drop-shadow-md">404</h1>
        <h2 className="text-3xl font-semibold mt-4">Səhifə tapılmadı</h2>
        <p className="mt-2 text-lg text-gray-300">
          Axtardığınız səhifə mövcud deyil və ya silinmişdir.
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-6 py-3 bg-white text-gray-700 font-semibold rounded-md shadow hover:bg-gray-300 transition duration-300"
        >
          Əsas səhifəyə qayıt
        </a>
      </div>
    </div>
  );
};

export default NotFound;
