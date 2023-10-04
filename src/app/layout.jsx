"use client";
import "./globals.css";
import { store } from "../store/store";
import { ReduxProvider } from "../store/provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider store={store}>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
