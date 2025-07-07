import React from "react";
import axios from "axios";
import Link from "next/link";

const Authors = async () => {
  const { data } = await axios.get(process.env.AU);

  return (
    <div className="space-y-4 p-4">
      {data.map(({ _id, surname, name, age }) => (
        <div key={_id} className="border p-3 rounded shadow bg-white">
          <Link
            href={`/authors/${_id}`}
            className="text-pink-600 hover:underline"
          >
            <p className="text-lg font-medium">
              {surname} {name}
            </p>
          </Link>
          <p className="text-sm text-gray-600">{age} yaş</p>
        </div>
      ))}
    </div>
  );
};

export default Authors;
