import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { styled } from "@mui/system";

const SubmitButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));

function AddProduct() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [pieces, setPieces] = useState("");
  const [remise, setDiscount] = useState("");
  const [focus, setFocus] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ productName, price, pieces, remise, image });

    setProductName("");
    setPrice("");
    setPieces("");
    setDiscount("");
    setImage(null);
  };

  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        // mt: 8,
      }}
    >
      <Typography
        variant="h4"
        style={{ fontWeight: "bold", marginBottom: "30px" }}
      >
        Ajouter un produit
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "white",
          borderRadius: "15px",
          padding: 4,
          border: "0.3px solid #D5D5D5",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            mt: 4,
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#F5F6FA",
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {!image && (
              <PhotoCamera
                style={{
                  fontSize: 30,
                  color: "#414141",
                }}
              />
            )}
          </div>
          <label
            htmlFor="icon-button-file"
            style={{ fontSize: 30, color: "#1A9CD3", cursor: "pointer" }}
          >
            <Typography component="span">Télécharger une photo</Typography>
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="icon-button-file"
              type="file"
              onChange={handleImageChange}
            />
          </label>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            mt: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mr: 8,
            }}
          >
            <label htmlFor="nom">Nom du produit</label>
            <TextField
              fullWidth
              id="nom"
              placeholder="Entrer le nom du produit"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              margin="none"
              onFocus={() => setFocus({ ...focus, productName: true })}
              onBlur={() => setFocus({ ...focus, productName: false })}
              InputProps={{
                style: {
                  height: "40px",
                  marginTop: "8px",
                  backgroundColor: focus.productName ? "white" : "#F5F6FA",
                  color: focus.productName ? "black" : "#A6A6A6",
                  border: focus.remise ? "none" : "0.6px solid #D5D5D5",
                },
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label htmlFor="prix">Prix</label>
            <TextField
              fullWidth
              id="prix"
              placeholder="1000"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              margin="none"
              onFocus={() => setFocus({ ...focus, price: true })}
              onBlur={() => setFocus({ ...focus, price: false })}
              InputProps={{
                style: {
                  height: "40px",
                  marginTop: "8px",
                  backgroundColor: focus.price ? "white" : "#F5F6FA",
                  color: focus.price ? "black" : "#A6A6A6",
                  border: focus.remise ? "none" : "0.6px solid #D5D5D5",
                },
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            mt: 6,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mr: 8,
            }}
          >
            <label htmlFor="remise">Remise</label>
            <TextField
              fullWidth
              id="remise"
              placeholder="20%"
              value={remise}
              onChange={(e) => setDiscount(e.target.value)}
              margin="none"
              onFocus={() => setFocus({ ...focus, remise: true })}
              onBlur={() => setFocus({ ...focus, remise: false })}
              InputProps={{
                style: {
                  height: "40px",
                  marginTop: "8px",
                  backgroundColor: focus.remise ? "white" : "#F5F6FA",
                  color: focus.remise ? "black" : "#A6A6A6",
                  border: focus.remise ? "none" : "0.6px solid #D5D5D5",
                },
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label htmlFor="pieces">Nombre de pièces</label>
            <TextField
              fullWidth
              id="pieces"
              placeholder="45"
              value={pieces}
              onChange={(e) => setPieces(e.target.value)}
              margin="none"
              onFocus={() => setFocus({ ...focus, pieces: true })}
              onBlur={() => setFocus({ ...focus, pieces: false })}
              InputProps={{
                style: {
                  height: "40px",
                  marginTop: "8px",
                  backgroundColor: focus.pieces ? "white" : "#F5F6FA",
                  color: focus.pieces ? "black" : "#A6A6A6",
                  border: focus.remise ? "none" : "0.6px solid #D5D5D5",
                },
              }}
            />
          </Box>
        </Box>
        <SubmitButton
          type="submit"
          variant="contained"
          style={{
            backgroundColor: "#1A9CD3",
            width: "35vh",
            height: "40px",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            margin: "auto",
            textTransform: "none",
            marginTop: "70px",
            // marginBottom: "15px",
            borderRadius: "8px",
          }}
        >
          Ajouter
        </SubmitButton>
      </Box>
    </Box>
  );
}

export default AddProduct;
