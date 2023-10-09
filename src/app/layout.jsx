"use client";
import "./globals.css";
import { store } from "../store/store";
import { ReduxProvider } from "../store/provider";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider store={store}>
          <SessionProvider>{children}</SessionProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
