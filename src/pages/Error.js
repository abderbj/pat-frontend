import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";

const ErrorContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(5),
  paddingTop: theme.spacing(7),
  paddingBottom: theme.spacing(7),
  marginTop: theme.spacing(2),
  backgroundColor: "white",
  width: "65vh",
  height: "70vh",
  borderRadius: "15px",
  boxShadow: theme.shadows[5],
}));

const RootContainer = styled(Box)(({ theme }) => ({
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
}));

const Background = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "#1A9CD3",
  backgroundImage: `url(${process.env.PUBLIC_URL}/shape.png)`,
  backgroundSize: "100% 100%",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  opacity: 1,
  zIndex: -1,
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));

function Error() {
  const navigate = useNavigate();

  return (
    <RootContainer>
      <Background />
      <ErrorContainer>
        <img
          src={`${process.env.PUBLIC_URL}/404.png`}
          alt="Error"
          style={{ width: "300px", height: "230px", marginBottom: "65px" }}
        />{" "}
        <Typography variant="h5" component="h1" style={{ fontWeight: "bold" }}>
          Erreur
        </Typography>
        <SubmitButton
          onClick={() => navigate("/")}
          variant="contained"
          style={{
            backgroundColor: "#1A9CD3",
            width: "75%",
            height: "40px",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            margin: "auto",
            textTransform: "none",
            marginTop: "25px",
            marginBottom: "15px",
            borderRadius: "6px",
          }}
        >
          Retourner à l'accueil
        </SubmitButton>
      </ErrorContainer>
    </RootContainer>
  );
}

export default Error;
