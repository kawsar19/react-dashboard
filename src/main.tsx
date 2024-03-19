import React from "react";
import ReactDOM from "react-dom/client";
import AllFarm from "./routes/allFarms.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./routes/home.tsx";
import Tasks from "./routes/tasks.tsx";
import Reports from "./routes/Reports.tsx";
import Help from "./routes/Help.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "all-farms",
    element: <AllFarm />,
  },
  {
    path: "tasks",
    element: <Tasks />,
  },
  {
    path: "reports",
    element: <Reports />,
  },
  {
    path: "help",
    element: <Help />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
