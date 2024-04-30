import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">Hello, World!</h1>
            <p className="text-lg mt-4">Welcome to your new Tailwind CSS + React app!</p>
            <Link to="/notes">
        <button className="bg-pink-600  mt-6 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
            Go To Notes
          </button>
        </Link>
        </div>
    );
}