import React from "react";
import ReactDOM from "react-dom/client";
import AllFarm from "./routes/allFarms.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./routes/home.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/all-farms",
    element: <AllFarm />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
