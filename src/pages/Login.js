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
  paddingTop: theme.spacing(7),
  paddingBottom: theme.spacing(7),
  marginTop: theme.spacing(2),
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  width: "fit-content",
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

function Login() {
  const navigate = useNavigate();
  const navigateTo = () => {
    navigate(`/signup`);
  };
  const navigateTo2 = () => {
    navigate(`#`);
  };

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [rememberMe, setRememberMe] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from being submitted in the traditional way

    // Here you can do whatever you need to do with the form data
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    console.log(`Remember me: ${rememberMe}`);
  };
  return (
    <RootContainer>
      <Background />
      <FormContainer>
        <Typography variant="h5" component="h1" style={{ fontWeight: "bold" }}>
          Connexion au compte
        </Typography>
        <Typography
          style={{
            display: "flex",
            textAlign: "center",
            margin: "10px",
            marginBottom: "25px",
            fontSize: "0.9rem",
          }}
        >
          Veuillez entrer votre email et votre mot de passe pour continuer
        </Typography>
        <Form onSubmit={handleSubmit}>
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            marginBottom="-8px"
          >
            <Typography variant="body1" style={{ marginBottom: "0px" }}>
              Mot de passe
            </Typography>
            <button
              onClick={navigateTo2}
              style={{
                color: "#1A9CD3",
                border: "none",
                background: "none",
                cursor: "pointer",
                padding: "0px",
              }}
            >
              Mot de passe oublié?
            </button>
          </Box>
          <TextField
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            InputLabelProps={{ shrink: true }}
            InputProps={{
              style: {
                height: "40px",
                padding: "0px",
                lineHeight: "1",
                marginBottom: "0px",
              },
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<StyledCheckbox value="remember" />}
            label="Se souvenir de moi"
            onChange={(e) => {
              setRememberMe(e.target.checked);
            }}
          />
          <SubmitButton
            type="submit"
            variant="contained"
            style={{
              backgroundColor: "#1A9CD3",
              width: "100%",
              height: "40px",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              margin: "auto",
              textTransform: "none",
              marginTop: "30px",
              marginBottom: "15px",
              borderRadius: "6px",
            }}
          >
            Se connecter
          </SubmitButton>

          <Typography variant="body2" align="center">
            Vous n'avez pas de compte?{" "}
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
              Créer un compte
            </button>
          </Typography>
        </Form>
      </FormContainer>
    </RootContainer>
  );
}

export default Login;
