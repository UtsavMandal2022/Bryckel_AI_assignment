import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-200 via-purple-200 to-slate-100">
            <h1 className="text-4xl font-bold animate-bounce">Hello, There!</h1>
            <p className="text-lg mt-10 text-blue-700 italic">Welcome to your new Notes app by <p className="text-sm animate-pulse">Utsav Mandal</p>!!!</p>
            <Link to="/notes">
        <button className="bg-pink-600  mt-8 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
            Go To Notes
          </button>
        </Link>
        </div>
    );
}