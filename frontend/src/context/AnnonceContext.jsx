import { useMemo, useState, createContext, useEffect } from "react";
// import armees from "../assets/cards/cardannonce/armees.png";
// import interieur from "../assets/cards/cardannonce/interieur.png";
// import mtfp from "../assets/cards/cardannonce/mtfp.png";

const AnnonceContext = createContext();

function AnnonceProvider({ children }) {
  const [offre, setOffre] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    const annonce = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/offers`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        if (response.status === 200) {
          const data = await response.json();
          setOffre(data);
        } else {
          console.error("Pas d'annonce veuillez nous excuser");
        }
      } catch (error) {
        console.error(error);
      }
    };
    annonce();
  }, []);
  const data = useMemo(
    () => ({ offre, setOffre, filter, setFilter }),
    [offre, filter]
  );
  return (
    <AnnonceContext.Provider value={data}>{children}</AnnonceContext.Provider>
  );
}
export { AnnonceProvider };
export default AnnonceContext;
