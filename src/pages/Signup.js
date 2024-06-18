import React from "react";
import {
  Checkbox,
  FormControlLabel,
  Link,
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const FormContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(1),
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(5),
  marginTop: theme.spacing(2),
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  width: "69vh",
  height: "fit-content",
  backgroundColor: "white",
  borderRadius: "15px",
}));
const Form = styled("form")(({ theme }) => ({
  width: "85%",
  marginTop: theme.spacing(1),
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
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

const StyledCheckbox = styled(Checkbox)({
  "& .MuiSvgIcon-root": {
    fontSize: "1.3rem",
  },
  marginLeft: "5px",
  marginRight: "-2px",
});

function Signup() {
  const navigate = useNavigate();
  const navigateTo = () => {
    navigate(`/`);
  };
  return (
    <RootContainer>
      <Background />
      <FormContainer>
        <Typography
          component="h1"
          variant="h5"
          style={{ marginBottom: "2px", fontWeight: "bold" }}
        >
          Créer un compte
        </Typography>
        <Typography
          style={{
            display: "flex",
            textAlign: "center",
            margin: "10px",
            marginBottom: "15px",
          }}
        >
          Créer un compte pour continuer
        </Typography>
        <Form>
          <label htmlFor="email">Adresse e-mail</label>
          <TextField
            variant="outlined"
            margin="none"
            required
            fullWidth
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            autoFocus
            InputLabelProps={{ shrink: true }}
            InputProps={{
              style: {
                height: "40px",
                padding: "0px",
                lineHeight: "1",
                marginTop: "8px",
                marginBottom: "25px",
              },
            }}
          />
          <label htmlFor="username">Nom d'utilisateur</label>
          <TextField
            variant="outlined"
            margin="none"
            required
            fullWidth
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            InputLabelProps={{ shrink: true }}
            InputProps={{
              style: {
                height: "40px",
                padding: "0px",
                lineHeight: "1",
                marginTop: "8px",
                marginBottom: "25px",
              },
            }}
          />
          <label htmlFor="password">Mot de passe</label>
          <TextField
            variant="outlined"
            margin="none"
            required
            fullWidth
            name="password"
            type="password"
            id="password"
            autoComplete="current-password"
            InputLabelProps={{ shrink: true }}
            InputProps={{
              style: {
                height: "40px",
                padding: "0px",
                lineHeight: "1",
                marginTop: "8px",
                marginBottom: "10px",
              },
            }}
          />
          <FormControlLabel
            control={<StyledCheckbox value="confidentiality" />}
            label="J'ai lu et compris la Politique de confidentialité"
            onChange={(e) => {
              console.log(e.target.checked);
            }}
          />
          <SubmitButton
            type="submit"
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
            Créer un compte
          </SubmitButton>
          <Typography variant="body2" align="center">
            Vous avez déjà un compte ?{" "}
            <button
              onClick={navigateTo}
              style={{
                color: "#75D275",
                border: "none",
                background: "none",
                cursor: "pointer",
                textDecoration: "underline",
                padding: "0px",
              }}
            >
              Connexion
            </button>
          </Typography>
        </Form>
      </FormContainer>
    </RootContainer>
  );
}

export default Signup;
