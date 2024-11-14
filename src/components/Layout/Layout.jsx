import { Suspense } from "react";
import css from "./Layout.module.css";
import AppBar from "../AppBar/AppBar";

export const Layout = ({ children }) => {
  return (
    <div className={css.layoutContainer}>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </div>
  );
};
