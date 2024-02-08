import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AnnonceContext from "../../context/AnnonceContext";
import "./buttoncandidate.css";

function ButtonCandidate({ offer, offerId }) {
  const { followedOffers, setFollowedOffers } = useContext(AnnonceContext);
  const navigate = useNavigate();

  const handleCandidater = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/candidates`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            Offers_Id_offers: offerId,
            Status: "en cours",
          }),
        }
      );

      if (response.status === 201) {
        setFollowedOffers([...followedOffers, offer]);
        navigate("/following");
      } else {
        console.error("Unable to submit candidacy. Please try again later.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button className="candidate" type="button" onClick={handleCandidater}>
        <p className="textcandidate">CANDIDATER</p>
      </button>
    </div>
  );
}

export default ButtonCandidate;
