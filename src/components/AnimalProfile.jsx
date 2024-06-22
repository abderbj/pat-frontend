import { Box, Paper, Typography,Button,ButtonGroup ,IconButton} from "@mui/material";
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import defaultAnimalImage from '../assets/animal-default.png';
import AnimalInformation from "./AnimalInformation";
export default function AnimalProfile({animalData,onDelete}) {
    function deleteAnimalHandler(){
        onDelete(animalData.id);
    }
    return(<Box display={'grid'} gridTemplateColumns={'repeat(auto-fit,minmax(300px,1fr))'} bgcolor={'#FFFFFF'} borderRadius={1} border={'1px solid #B9B9B9'} p={5}>
        <Paper elevation={16} sx={{overflow:'hidden'}} square>
            <img style={{width:'100%'}}src={defaultAnimalImage} alt="animal image" />
        </Paper>
        <Box>
            <AnimalInformation label={"NOM"} value={animalData.name}></AnimalInformation>
            <AnimalInformation label={"ESPÈCES"} value={animalData.species}></AnimalInformation>
            <AnimalInformation label={"RACES/APPARENCE"} value={animalData.race}></AnimalInformation>
            <AnimalInformation label={"SEXE"} value={+animalData.isMale ? "MALE" : "FEMELLE"}></AnimalInformation>
            <AnimalInformation label={"ÂGE"} value={animalData.ageInYears} age></AnimalInformation>
            <AnimalInformation label={"ÉTAT"} value={animalData.state}></AnimalInformation>

            <ButtonGroup color={"secondary"} variant="contained" disableElevation>
                <Button><ModeOutlinedIcon sx={{ width:25, height:20 }} /></Button>
                <Button><DeleteOutlinedIcon onClick={deleteAnimalHandler} sx={{ color: 'red', width:25, height:20 }} /></Button>
            </ButtonGroup>
        </Box>
    </Box>);
}