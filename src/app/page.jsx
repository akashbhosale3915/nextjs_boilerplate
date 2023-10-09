"use client";
import { toggleTheme } from "@/src/store/slices/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  signIn,
  useSession,
  signOut,
} from "next-auth/react";

export default function Home() {
  const dispatch = useDispatch();
  const { data: session } = useSession();
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
      <h1 className="text-xl font-semibold my-5">
        {session?.user.name
          ? `Hi ${session?.user.name}`
          : "Not logged in"}
      </h1>
      {session?.user.name ? (
        <button
          onClick={() => signOut()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign Out
        </button>
      ) : (
        <button
          onClick={() => signIn("credentials")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign In
        </button>
      )}
    </main>
  );
}
