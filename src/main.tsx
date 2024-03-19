import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Root from "./routes/root";
import About from "./routes/about.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sidebar from "./Components/Sidebar.tsx";
import Header from "./Components/Header.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Sidebar />
    <div className=" sm:ml-56">
      <Header />
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
