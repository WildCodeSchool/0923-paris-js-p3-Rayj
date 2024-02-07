import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import { AnnonceProvider } from "./context/AnnonceContext";
import { AuthProvider } from "./context/AuthContext";

import App from "./App";
import HomePage from "./pages/HomePage/HomePage";

import Following from "./pages/Following/Following";
import Post from "./pages/Posts/Post";
import Profil from "./pages/Profil/Profil";
import Validation from "./pages/Validation/Validation";
import ProfilModif from "./pages/Profil/ProfilModif";
import Connection from "./pages/Connection/Connection";
import OfferDescription from "./components/offerdescription/OfferDescription";
import ContactCandidat from "./components/contact_candidat/ContactCandidat";
import Inscription from "./pages/Inscription/inscription";
import ProfilPage1 from "./pages/Profil_ad/Profil_page1/ProfilPage1";

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
        path: "/homepage",
        element: <HomePage />,
        loader: () => {
          return fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users`, {
            credentials: "include",
          });
        },
      },

      {
        path: "/following",
        element: <Following />,
      },
      {
        path: "/annonce",
        element: <Post />,
      },
      {
        path: "/profil",
        element: <Profil />,
      },

      {
        path: "/candidatespage",
        element: <ProfilPage1 />,
      },

      // {
      //       path="/profil1/:data" element={<ProfilPage1 />}
      // }

      {
        path: "/contact-candidat/:id",
        element: <ContactCandidat />,
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
        path: "/ProfilModif/:id",
        element: <ProfilModif />,
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
