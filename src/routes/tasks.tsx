import React from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

export default function Tasks() {
  return (
    <>
      <Sidebar />
      <div className=" sm:ml-56">
        <Header />
        <>
          <h1>Task Page</h1>
        </>
      </div>
    </>
  );
}
