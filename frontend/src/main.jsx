import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import { AnnonceProvider } from "./context/AnnonceContext";
import App from "./App";
import HomePage from "./pages/HomePage/HomePage";
import Candidate from "./pages/Candidate/Candidate";
import Following from "./pages/Following/Following";
import Post from "./pages/Posts/Post";
import Profil from "./pages/Profil/Profil";
import Validation from "./pages/Validation/Validation";
import Connection from "./pages/Connection/Connection";
import OfferDescription from "./components/offerdescription/OfferDescription";
import Inscription from "./pages/Inscription/inscription";
import { AuthProvider } from "./context/AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Connection />,
      },
      {
        path: "/homepage",
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
        loader: () => {
          return fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/:id`, {
            method: "GET",
            credentials: "include",
          });
        },
      },
      {
        path: "/validation",
        element: <Validation />,
      },
      {
        path: "/OfferDescription/:idOffers",
        element: <OfferDescription />,
      },
      {
        path: "/inscription",
        element: <Inscription />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <AnnonceProvider>
        <RouterProvider router={router} />
      </AnnonceProvider>
    </AuthProvider>
  </React.StrictMode>
);
