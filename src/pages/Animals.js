import * as React from 'react';
import { Box,Typography,Button,TextField,Grid } from '@mui/material';
import AnimalCard from '../components/AnimalCard';
import defaultAnimalImage from '../assets/animal-default.png';
import {useState} from "react";
export default function Animals({animals}){
    const [searchInput, setSearchInput] = useState("");
    const searchAnimalHandler = (event)=>{
        const lowerCaseInput = event.target.value.toLowerCase();
       setSearchInput(lowerCaseInput);
    };
    const searchResultAnimals = animals.filter((animal)=>{if (searchInput === '') {
        return animal;
    }
    else {
        return animal.name.toLowerCase().includes(searchInput)
    }})

    return(
        <Box bgcolor={"#F5F6FA"}>
            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} p={2} paddingBlockEnd={5}>
                <Typography variant='h5' fontWeight={'bold'}>Animaux</Typography>
                <Box display={'flex'} flexWrap={'wrap'} alignItems={'center'} gap={5} >
                    <Button sx={{textTransform:'none',
                                paddingInline:5,
                                backgroundColor:'#019ADD',
                                whiteSpace:'nowrap'
                    }}disableElevation variant='contained'>+ Ajouter un animal</Button>
                    <TextField  id="outlined-basic" label="Search animal name" variant="outlined" onChange={searchAnimalHandler} value={searchInput}/>
                </Box>
            </Box>
            
            <Grid container spacing={10}>
            {searchResultAnimals.map((animal)=>{return(<Grid item key={animal.id}><AnimalCard key={animal.id} animalData={animal}>
                </AnimalCard></Grid>);})}
            </Grid>
            
        </Box>
    );
}