"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const Authors = () => {
  const [authors, setAuthors] = useState([]);
  const [newAuthor, setNewAuthor] = useState({
    name: "",
    surname: "",
    age: "",
  });
  const [formuGoster, setFormuGoster] = useState(false);

  useEffect(() => {
    axios.get(process.env.NEXT_PUBLIC_AU).then(({ data }) => {
      setAuthors(data);
    });
  }, []);

  const deleteAuthor = (_id) => {
    if (confirm("Silmek istediyinize eminsiniz?")) {
      axios.delete(process.env.NEXT_PUBLIC_AU + _id).then((res) => {
        if (res.status === 200) {
          alert("Silindi");
          setAuthors(authors.filter((author) => author._id !== _id));
        } else {
          alert("xeta!");
        }
      });
    }
  };

  const addAuthor = (e) => {
    e.preventDefault();

    axios.post(process.env.NEXT_PUBLIC_AU, newAuthor).then(({ data }) => {
      alert("Elave olundu");

      setAuthors([data, ...authors]);
      setNewAuthor({ name: "", surname: "", age: "" });
      setFormuGoster(false);
    });
  };

  return (
    <div className="space-y-4 p-4">
      {authors.map(({ _id, surname, name, age }) => (
        <div key={_id} className="border p-3 rounded shadow bg-white">
          <div className="flex gap-15">
            <div>
              <Link href={`/author/${_id}`}>
                <p className="text-pink-600 hover:underline text-lg font-medium">
                  {surname} {name}
                </p>
              </Link>
              <p className="text-sm text-gray-600">{age} yas</p>
            </div>

            <div className="mt-2">
              <button
                onClick={() => deleteAuthor(_id)}
                className="bg-pink-400 text-white px-5 transition-colors duration-300 py-1 rounded hover:bg-pink-600 "
              >
                Sil
              </button>
            </div>
          </div>
        </div>
      ))}
      {formuGoster && (
        <form
          onSubmit={addAuthor}
          className="space-y-2 bg-gray-100 p-4 rounded mb-4"
        >
          <input
            type="text"
            placeholder="Soyad"
            value={newAuthor.surname}
            onChange={(e) =>
              setNewAuthor({ ...newAuthor, surname: e.target.value })
            }
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="text"
            placeholder="Ad"
            value={newAuthor.name}
            onChange={(e) =>
              setNewAuthor({ ...newAuthor, name: e.target.value })
            }
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="number"
            placeholder="Yas"
            value={newAuthor.age}
            onChange={(e) =>
              setNewAuthor({ ...newAuthor, age: e.target.value })
            }
            className="border p-2 rounded w-full"
            required
          />
          <button
            type="submit"
            className="bg-pink-400 text-white px-4 py-2 rounded hover:bg-pink-600 transition-colors duration-300"
          >
            Elave et
          </button>
        </form>
      )}

      <button
        onClick={() => setFormuGoster(!formuGoster)}
        className="bg-pink-400 text-white px-4 py-2 rounded hover:bg-pink-600 transition-colors duration-300"
      >
        {formuGoster ? " Bagla" : "+ Elave Et"}
      </button>
    </div>
  );
};

export default Authors;
