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
      className={`${
        darkMode
          ? "bg-black text-white"
          : "bg-white text-black"
      } h-screen`}
    >
      <h1>Nextjs Boilerplate Project</h1>
      <button
        onClick={() => {
          dispatch(toggleTheme());
        }}
      >
        Toggle BG
      </button>
    </main>
  );
}
