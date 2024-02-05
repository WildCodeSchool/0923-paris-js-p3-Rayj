import React, { useState } from "react";
import Grid from "@mui/joy/Grid";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import { Modal, Box } from "@mui/material";
import ContactCandidat from "../contact_candidat/ContactCandidat";
import InformationEmploye from "../informationemploye/InformationEmploye";
import "./offeradmin.css";

function OfferGroup({ users, activeDomain }) {
  const [selectedUser, setSelectedUser] = useState();
  const [openModal, setOpenModal] = useState(false);

  const filteredUsers = users.filter(
    (user) => activeDomain === "" || user.Domaine === activeDomain
  );
  const groupedUsers = filteredUsers.reduce((acc, user) => {
    const offer =
      activeDomain === "" || user.Domaine === activeDomain
        ? user.Post_title
        : null;
    if (offer) {
      if (!acc[offer]) {
        acc[offer] = [];
      }
      acc[offer].push(user);
    }
    return acc;
  }, {});

  const handleopenModal = (user) => {
    setSelectedUser(user);
    setOpenModal(true);
  };
  const handlecloseModal = () => {
    setSelectedUser(null);
    setOpenModal(false);
  };
  return (
    <section>
      <div className="totocard">
        <Grid
          container
          spacing={{ xs: 3, md: 6 }}
          columns={{ xs: 4, sm: 8, md: 15 }}
          sx={{ flexGrow: 1 }}
        >
          {Object.entries(groupedUsers).map(([offer, usersInOffer]) => (
            <Grid xs={2} sm={4} md={4.6}>
              <Card sx={{ width: 320 }}>
                <div>
                  <Typography level="title-lg" key={offer}>
                    {offer}
                  </Typography>
                </div>
                <AspectRatio minHeight="120px" maxHeight="200px">
                  <div className="rowrow">
                    {usersInOffer.map((user) => (
                      <InformationEmploye
                        key={user.id}
                        user={user}
                        offer={offer}
                        onOpenModal={() => handleopenModal(user)}
                      />
                    ))}
                  </div>
                </AspectRatio>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
      <Modal
        className="modalcontactcandidat"
        open={openModal}
        onClose={handlecloseModal}
      >
        <Box>
          {selectedUser && (
            <ContactCandidat
              user={selectedUser}
              onCloseModal={handlecloseModal}
            />
          )}
        </Box>
      </Modal>
    </section>
  );
}
export default OfferGroup;
