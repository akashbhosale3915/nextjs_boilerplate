"use client";
import { toggleTheme } from "@/src/store/slices/themeSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const darkMode = useSelector(
    (state) => state.themeReducer.darkMode
  );
  return (
    <main
      className={`flex flex-col justify-center items-center h-screen ${
        darkMode ? "dark" : "light"
      }`}
    >
      <h1 className="text-5xl mb-10 w-1/2 text-center leading-tight gradient font-bold">
        Nextjs boilerplate project with redux and nextauth
      </h1>
      <button
        onClick={() => dispatch(toggleTheme())}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Toggle BG
      </button>
    </main>
  );
}
