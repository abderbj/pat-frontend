import React , {useState} from 'react';
import { Card, CardMedia, CardContent, Typography, IconButton, Box } from '@mui/material';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const ActionCard = ({ currentArticle }) => {
    return (
      <Card sx={{ maxWidth: 600, margin: 'auto', borderRadius: 2, padding: 2, border: 'none', boxShadow: 'none', backgroundColor: '#f4f6f8' }}>
        <Box sx={{ display: 'flex', justifyContent: 'right', marginBottom: 2 }}>
          <Box 
            sx={{ 
              display: 'flex', 
              border: '1px solid #e0e0e0', 
              borderRadius: 2, 
              overflow: 'hidden',
              padding: '2',
            }}
          >
            <IconButton aria-label="edit" sx={{ borderRadius:0, height:28, padding:'0 5' }}>
              <ModeOutlinedIcon sx={{ width:25, height:20 }} />
            </IconButton>
            <Box sx={{ width: '1px', backgroundColor: '#e0e0e0' }}></Box>
            <IconButton aria-label="delete" sx={{ borderRadius:0, padding:'0 5', height:28 }}>
              <DeleteOutlinedIcon sx={{ color: 'red', width:25, height:20 }} />
            </IconButton>
          </Box>
        </Box>
        <Box sx={{ margin:'30px 10%' }}>
          <CardMedia
            component="img"
            image={currentArticle.imageUrl}
            alt={currentArticle.title}
            sx={{ borderRadius: 2 }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
              {currentArticle.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" sx={{ textAlign: 'justify' }}>
              {currentArticle.description}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    );
  };

export default ActionCard;
