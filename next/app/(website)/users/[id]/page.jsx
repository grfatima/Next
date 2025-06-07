import React from "react";

const page = async ({ params }) => {
  const { id } = await params;
  return (
    <div className="text-3xl text-center mt-20 text-gray-600"> ID: {id}</div>
  );
};

export default page;
