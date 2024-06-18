import React from 'react';
import { Box, Button, TextField, Typography, Avatar, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

const Container = styled(Box)(({ theme }) => ({
  maxWidth: 600,
  margin: 'auto',
  padding: theme.spacing(4),
  backgroundColor: '#fff',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
}));

const Header = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const Form = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

const PhotoUpload = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: theme.spacing(4),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const AddActionForm = () => {
  return (
    <Container>
      <Header variant="h4">Ajouter une Action</Header>
      <PhotoUpload>
        <Avatar sx={{ width: 72, height: 72 }}>
          <IconButton component="label">
            <PhotoCameraIcon />
            <input type="file" hidden />
          </IconButton>
        </Avatar>
        <Typography color="primary" variant="body2" component="a" href="#">
          Télécharger une photo
        </Typography>
      </PhotoUpload>
      <Form noValidate autoComplete="off">
        <TextField
          label="Nom de l'action"
          placeholder="Entrer le nom de l'action"
          fullWidth
          variant="outlined"
        />
        <TextField
          label="Adresse"
          placeholder="Adresse"
          fullWidth
          variant="outlined"
        />
        <TextField
          label="Début"
          placeholder="11-09-2019/10h"
          fullWidth
          variant="outlined"
          type="datetime-local"
        />
        <TextField
          label="Fin"
          placeholder="11-09-2019/00:00"
          fullWidth
          variant="outlined"
          type="datetime-local"
        />
        <TextField
          label="Description"
          placeholder="Describe your action here"
          fullWidth
          multiline
          rows={4}
          variant="outlined"
        />
        <StyledButton variant="contained" color="primary">
          Ajouter
        </StyledButton>
      </Form>
    </Container>
  );
};

export default AddActionForm;
