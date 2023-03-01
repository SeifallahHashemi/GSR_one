import React from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";

function RootLayout() {
  return (
    <div className="min-h-screen pb-6 md:pb-8 xl:pb-4 w-screen flex justify-start items-center flex-col gap-2 bg-gradient-to-r from-cyan-300 to-blue-500 text-slate-800">
      <div className="xl:max-w-5xl lg:max-w-full xl:w-full lg:w-4/5 md:w-10/12 w-3/4">
        <MainHeader />
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
