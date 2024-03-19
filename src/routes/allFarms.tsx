import React from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

export default function allFarms() {
  return (
    <>
      <Sidebar />
      <div className=" sm:ml-56">
        <Header />
        <>
          <h1>All Farm Page</h1>
        </>
      </div>
    </>
  );
}
