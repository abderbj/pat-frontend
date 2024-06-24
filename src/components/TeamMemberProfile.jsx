import { Box, Paper, Typography,Button,ButtonGroup ,IconButton} from "@mui/material";
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import defaultAnimalImage from '../assets/animal-default.png';
import TeaamMemberInformation from "./TeamMemberInformation";
export default function TeaamMemberProfile({teamMemberData,onDelete}) {
    function deleteTeamMemberHandler(){
        onDelete(teamMemberData.id);
    }
    return(<Box display={'grid'} gridTemplateColumns={'repeat(auto-fit,minmax(300px,1fr))'} alignItems={'center'} bgcolor={'#FFFFFF'} borderRadius={1} border={'1px solid #B9B9B9'} p={5}>
       
        <img style={{width:'100%',borderRadius:"50%"}}src={defaultAnimalImage} alt="animal image" />
        <Box>
            <TeaamMemberInformation label={"NOM"} value={teamMemberData.lastName}></TeaamMemberInformation>
            <TeaamMemberInformation label={"PRÉNOM"} value={teamMemberData.firstName}></TeaamMemberInformation>
            <TeaamMemberInformation label={"EMAIL"} value={teamMemberData.email}></TeaamMemberInformation>
            <TeaamMemberInformation label={"NUMÉRO"} value={teamMemberData.phoneNumber}></TeaamMemberInformation>
            <TeaamMemberInformation label={"SEXE"} value={teamMemberData.isMale ? "MALE" : "FEMELLE"}></TeaamMemberInformation>
            <TeaamMemberInformation label={"POSTE"} value={teamMemberData.post}></TeaamMemberInformation>

            <ButtonGroup color={"secondary"} variant="contained" disableElevation>
                <Button><ModeOutlinedIcon sx={{ width:25, height:20 }} /></Button>
                <Button><DeleteOutlinedIcon onClick={deleteTeamMemberHandler} sx={{ color: 'red', width:25, height:20 }} /></Button>
            </ButtonGroup>
        </Box>
    </Box>);
}