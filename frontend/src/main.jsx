import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import { AnnonceProvider } from "./context/AnnonceContext";
import { AuthProvider } from "./context/AuthContext";
import App from "./App";
import HomePage from "./pages/HomePage/HomePage";
import Candidate from "./pages/Candidate/Candidate";
import Following from "./pages/Following/Following";
import Post from "./pages/Posts/Post";
import Profil from "./pages/Profil/Profil";
import ProfilPage2 from "./pages/Profil_ad/Profil_page2/ProfilPage2";
import ProfilPage3 from "./pages/Profil_ad/Profil_page3/ProfilPage3";
import Descriptiondeloffre from "./pages/DescriptionOffre/Descriptiondeloffre";
import Validation from "./pages/Validation/Validation";
import ProfilModif from "./pages/ProfilModif/ProfilModif";
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
        path: "/profil1",
        element: <ProfilPage1 />,
      },

      {
        path: "/profil2",
        element: <ProfilPage2 />,
      },
      {
        path: "/profil3",
        element: <ProfilPage3 />,
      },

      {
        path: "/contact-candidat/:id",
        element: <ContactCandidat />,
      },

      {
        path: "/validation",
        element: <Validation />,
      },

      {
        path: "/profilmodif",
        element: <ProfilModif />,
      },
      {
        path: "/OfferDescription/:offer",
        element: <OfferDescription />,
      },
      {
        path: "/descriptionoffre",
        element: <Descriptiondeloffre />,
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
