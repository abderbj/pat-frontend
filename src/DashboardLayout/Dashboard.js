import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

import Link from '@mui/material/Link';

import SideBar from './SideBar';
import NavBar from './NavBar';

export default function Dashboard(props) {
  return (
    
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <NavBar></NavBar>
        <SideBar></SideBar>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
        {/* insert main content here */}
        {props.children}
        </Box>
      </Box>

  );
}