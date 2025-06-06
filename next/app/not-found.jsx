import React from "react";
import "@/public/css/globals.css";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-100">
      <div className="bg-pink-300 text-white shadow-2xl rounded-xl p-10 text-center max-w-md">
        <h1 className="text-9xl font-extrabold drop-shadow-md">404</h1>
        <h2 className="text-3xl font-semibold mt-4">Sayfa Bulunamadı</h2>
        <p className="mt-2 text-lg text-pink-50">
          Aradığınız sayfa mevcut değil.
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-6 py-3 bg-white text-pink-500 font-semibold rounded-md shadow hover:bg-pink-50 transition duration-300"
        >
          Ana Sayfaya Dön
        </a>
      </div>
    </div>
  );
};

export default NotFound;
