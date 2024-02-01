import React from "react";

export const Navbar = () => {
  return (
    <div className="flex justify-between pt-2">
      <div className="flex items-center">
        <img src="../public/blogger-logo-blogger-icon-transparent-free-png.webp" alt="" className="w-11"/>
        <h2 className="text-xl">Blogger</h2>
      </div>
      <div className="text-md flex gap-4">
        <button>SIGN IN</button>
        <button className="focus:outline-none text-white bg-orange-600 hover:bg-orange-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
          CREATE YOUR BLOG
        </button>
      </div>
    </div>
  );
};
