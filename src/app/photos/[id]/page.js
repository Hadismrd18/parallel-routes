import React from "react";

export default function page({ params }) {
  return (
    <div className="bg-pink-700 hover:shadow-md hover:scale-105 transition-all duration-150 hover:bg-pink-600 text-white rounded flex items-center justify-center size-[300px]">
      {params.id}
    </div>
  );
}
