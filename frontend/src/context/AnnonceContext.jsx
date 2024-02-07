import { useMemo, useState, createContext, useEffect } from "react";

const AnnonceContext = createContext();

function AnnonceProvider({ children }) {
  const [offre, setOffre] = useState([]);
  const [filter, setFilter] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [followedOffers, setFollowedOffers] = useState([]);

  useEffect(() => {
    const fetchOffers = async () => {
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
          console.error("Unable to fetch offers. Please try again later.");
        }
      } catch (error) {
        console.error(error);
      }
    };

    const fetchFavorites = async () => {
      try {
        const favresponse = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/favorites`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (favresponse.status === 200) {
          const data = await favresponse.json();
          setFavorites(data);
        } else {
          console.error("Unable to fetch favorites. Please try again later.");
        }
      } catch (error) {
        console.error(error);
      }
    };
    const fetchCandidates = async () => {
      try {
        const canresponse = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/candidates`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (canresponse.status === 200) {
          const data = await canresponse.json();
          setFollowedOffers(data);
        } else {
          console.error("Unable to fetch Candidates. Please try again later.");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCandidates();
    fetchOffers();
    fetchFavorites();
  }, []);

  const contextValue = useMemo(
    () => ({
      offre,
      setOffre,
      filter,
      setFilter,
      favorites,
      setFavorites,
      followedOffers,
      setFollowedOffers,
    }),
    [offre, filter, favorites, followedOffers]
  );

  return (
    <AnnonceContext.Provider value={contextValue}>
      {children}
    </AnnonceContext.Provider>
  );
}

export { AnnonceProvider };
export default AnnonceContext;
