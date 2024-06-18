import React from "react";
import { Box, CssBaseline } from "@mui/material";
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
import AddProduct from "../components/AddProduct";

function AddProducts() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* <Navbar /> */}
      {/* <Sidebar /> */}
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, bgcolor: "#F5F6FA", height: "100vh" }}
      >
        <AddProduct />
      </Box>
    </Box>
  );
}

export default AddProducts;
