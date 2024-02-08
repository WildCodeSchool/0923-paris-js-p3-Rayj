import React, { useState } from "react";
import Grid from "@mui/joy/Grid";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import { Modal, Box } from "@mui/material";
import ContactCandidat from "../contact_candidat/ContactCandidat";
import "./offeradmin.css";
import "../informationemploye/informationemploye.css";

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
            <div>
              <h1>{offer}</h1>
              <Card
                sx={{
                  width: 320,
                  marginTop: "20px",
                  backgroundColor: "transparent",
                  border: "none",
                }}
              >
                {usersInOffer.map((user) => (
                  <button
                    type="button"
                    className="card_user"
                    onClick={() => handleopenModal(user)}
                  >
                    <Typography>
                      <p> {user?.Firstname}</p>
                      <p>{user?.Lastname}</p>
                    </Typography>
                    <img
                      className="candidate_photo"
                      src={user?.Picture}
                      alt={user.Firstname}
                    />
                  </button>
                ))}
              </Card>
            </div>
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
