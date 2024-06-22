import * as React from 'react';
import { Box, Typography, Button, TextField, Grid } from '@mui/material';
import AnimalCard from '../components/AnimalCard';
import defaultAnimalImage from '../assets/animal-default.png';
import { useState } from 'react';
import AnimalProfile from '../components/AnimalProfile';

export default function Animals({ animalList }) {
    const [animals, setAnimals] = useState({ animalList: animalList, selectedAnimal: -1 });
    const [searchInput, setSearchInput] = useState("");

    const deleteAnimal = (id) => {
        const newAnimals = animals.animalList.filter((animal) => animal.id !== id);
        setAnimals({
            animalList: newAnimals,
            selectedAnimal: -1
        });
    };

    const searchAnimalHandler = (event) => {
        const lowerCaseInput = event.target.value.toLowerCase();
        setSearchInput(lowerCaseInput);
    };

    const searchResultAnimals = animals.animalList.filter((animal) => {
        if (searchInput === '') {
            return true; // Include all animals if search input is empty
        } else {
            return animal.name.toLowerCase().includes(searchInput);
        }
    });

    const findAnimalById = (id) => {
        return animals.animalList.find(animal => animal.id === id);
    };

    const handleAnimalClick = (id) => {
        setAnimals({
            ...animals,
            selectedAnimal: id
        });
    };

    return (
        <Box bgcolor={"#F5F6FA"}>
            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} p={2} paddingBlockEnd={5}>
                <Typography variant='h5' fontWeight={'bold'}>{animals.selectedAnimal === -1 ? 'Animaux' : "Profile de l'animal"}</Typography>
                {animals.selectedAnimal === -1 ?
                    <Box display={'flex'} flexWrap={'wrap'} alignItems={'center'} gap={5}>
                        <Button
                            sx={{
                                textTransform: 'none',
                                paddingInline: 5,
                                backgroundColor: '#019ADD',
                                whiteSpace: 'nowrap'
                            }}
                            disableElevation
                            variant='contained'
                        >
                            + Ajouter un animal
                        </Button>
                        <TextField
                            id="outlined-basic"
                            label="Search animal name"
                            variant="outlined"
                            onChange={searchAnimalHandler}
                            value={searchInput}
                        />
                    </Box> : null
                }
            </Box>
            {animals.selectedAnimal === -1 ?
                <Grid container spacing={10}>
                    {searchResultAnimals.map((animal) => (
                        <Grid item key={animal.id}>
                            <AnimalCard
                                key={animal.id}
                                animalData={animal}
                                setSelectedAnimal={() => handleAnimalClick(animal.id)}
                            />
                        </Grid>
                    ))}
                </Grid> :
                <AnimalProfile onDelete={deleteAnimal} animalData={findAnimalById(animals.selectedAnimal)} />
            }
        </Box>
    );
}
