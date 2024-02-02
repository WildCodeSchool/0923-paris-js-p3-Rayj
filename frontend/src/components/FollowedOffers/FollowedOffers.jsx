import React, { useContext } from "react";
import AnnonceContext from "../../context/AnnonceContext";
import CardAnnonce from "../cards/CardAnnonce";

function FollowedOffers() {
  const { followedOffers } = useContext(AnnonceContext);

  return (
    <div className="followed_posts">
      <p className="header_fav">Suivi</p>
      <div className="block_post_candidates">
        {followedOffers.map((candidates) => (
          <CardAnnonce
            isCandidate={1}
            key={candidates.id_Offers}
            poste={candidates}
          />
        ))}
      </div>
    </div>
  );
}

export default FollowedOffers;
