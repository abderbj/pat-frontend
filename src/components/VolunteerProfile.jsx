import { Box, Paper, Typography,Button,ButtonGroup ,IconButton} from "@mui/material";
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import defaultAnimalImage from '../assets/animal-default.png';
import VolunteerInformation from "./VolunteerInformation";
export default function VolunteerProfile({teamMemberData,onDelete}) {
    function deleteTeamMemberHandler(){
        onDelete(teamMemberData.id);
    }
    return(<Box display={'grid'} gridTemplateColumns={'repeat(auto-fit,minmax(300px,1fr))'} alignItems={'center'} bgcolor={'#FFFFFF'} borderRadius={1} border={'1px solid #B9B9B9'} p={5}>
       
        <img style={{width:'100%',borderRadius:"50%"}}src={defaultAnimalImage} alt="animal image" />
        <Box>
            <VolunteerInformation label={"NOM"} value={teamMemberData.lastName}></VolunteerInformation>
            <VolunteerInformation label={"PRÉNOM"} value={teamMemberData.firstName}></VolunteerInformation>
            <VolunteerInformation label={"EMAIL"} value={teamMemberData.email}></VolunteerInformation>
            <VolunteerInformation label={"NUMÉRO"} value={teamMemberData.phoneNumber}></VolunteerInformation>
            

            <ButtonGroup color={"secondary"} variant="contained" disableElevation>
                <Button><ModeOutlinedIcon sx={{ width:25, height:20 }} /></Button>
                <Button><DeleteOutlinedIcon onClick={deleteTeamMemberHandler} sx={{ color: 'red', width:25, height:20 }} /></Button>
            </ButtonGroup>
        </Box>
    </Box>);
}