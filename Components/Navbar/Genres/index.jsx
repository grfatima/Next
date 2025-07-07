import axios from "axios";
import Link from "next/link";
import React from "react";

const Genres = async () => {
  const { data } = await axios.get(process.env.GU);

  return (
    <div className="space-y-4 p-4">
      {data.map(({ _id, name, books }) => (
        <div key={_id} className="border p-3 rounded shadow bg-white">
          <Link
            href={`/genres/${_id}`}
            className="text-pink-600 hover:underline"
          >
            <p className="text-lg font-medium">{name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Genres;
