import * as React from 'react';
import { Box,Typography,Button,Paper,Card, CardContent,CardMedia} from '@mui/material';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import defaultAnimalImage from '../assets/animal-default.png';
export default function AnimalCard({animalData,setSelectedAnimal}){
    function editAnimal(){
        setSelectedAnimal(animalData.id);
    }
    console.log(animalData)
    return(
        <Card onClick={editAnimal} elevation={10} sx={{borderRadius:3,minWidth:'150px'}} variant='elevation'>
            <CardMedia image={defaultAnimalImage}
                        sx={{height:100}}/>
            <CardContent>
                <Box sx={{display:'flex', justifyContent:'center'}}>
                    <Typography gutterBottom variant="h5" component="div">{animalData.name}</Typography>
                    {animalData.gender.toLowerCase() === "malle" ? <MaleIcon/>:<FemaleIcon/>}
                </Box>
      </CardContent>
        </Card>
    );
}