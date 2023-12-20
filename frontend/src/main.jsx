import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage/HomePage";
import Candidate from "./pages/Candidate/Candidate";
import Following from "./pages/Following/Following";
import Post from "./pages/Posts/Post";
import Profil from "./pages/Profil/Profil";
import Validation from "./pages/Validation/Validation";
import Connection from "./pages/Connection/Connection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/candidate",
        element: <Candidate />,
      },
      {
        path: "/following",
        element: <Following />,
      },
      {
        path: "/post",
        element: <Post />,
      },
      {
        path: "/profil",
        element: <Profil />,
      },
      {
        path: "/validation",
        element: <Validation />,
      },
      {
        path: "/connection",
        element: <Connection />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
