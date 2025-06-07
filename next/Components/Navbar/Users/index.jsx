import axios from "axios";
import Link from "next/link";

const Users = async () => {
  const { data } = await axios(process.env.BU);

  return (
    <div className="p-3 grid grid-cols-4 gap-4 mt-20">
      {data.map(({ id, username }) => {
        return (
          <div
            className=" border-1 border-gray-900 p-2 text-gray-500 relative"
            key={id}
          >
            <Link href={`/users/${id}`} className="absolute inset-0"></Link>
            <p>{username}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
