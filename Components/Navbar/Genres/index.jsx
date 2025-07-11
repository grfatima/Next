"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const Genres = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios.get(process.env.NEXT_PUBLIC_GU).then(({ data }) => {
      setGenres(data);
    });
  }, []);

  const deleteGenre = (_id) => {
    if (confirm("Silmek istediyinize eminsiniz?")) {
      axios.delete(process.env.NEXT_PUBLIC_GU + _id).then(() => {
        alert("Silindi");
        setGenres(genres.filter((genre) => genre._id !== _id));
      });
    }
  };

  return (
    <div className="space-y-4 p-4">
      {genres.map(({ _id, name }) => (
        <div
          key={_id}
          className="border p-3 rounded shadow bg-white flex gap-15"
        >
          <Link
            href={`/genres/${_id}`}
            className="text-pink-600 hover:underline"
          >
            <p className="text-lg font-medium">{name}</p>
          </Link>
          <button
            onClick={() => deleteGenre(_id)}
            className="bg-pink-400 text-white px-5 transition-colors duration-300 py-1 rounded hover:bg-pink-600 "
          >
            Sil
          </button>
        </div>
      ))}
    </div>
  );
};

export default Genres;
