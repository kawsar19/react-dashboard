import React from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

export default function Reports() {
  return (
    <>
      <Sidebar />
      <div className=" sm:ml-56">
        <Header />
        <>
          <h1>Report Page</h1>
        </>
      </div>
    </>
  );
}
