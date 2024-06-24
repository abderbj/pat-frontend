import * as React from 'react';
import { Box,Typography,Button,Paper,Card, CardContent,CardMedia} from '@mui/material';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import defaultAnimalImage from '../assets/animal-default.png';
import {Avatar} from '@mui/material';
import { color } from '@mui/system';
export default function VolunteerCard({teamMemberData,setSelectedTeamMember}){
    function editTeamMember(){
        setSelectedTeamMember(teamMemberData.id);
    }

    return(
        <Card variant='outlined' sx={{maxWidth:262,borderRadius:3,padding:2}} onClick={setSelectedTeamMember}>
            <Avatar src={defaultAnimalImage} sx={{width:100,height:100,margin:'auto'}}></Avatar>
            <CardContent sx={{textAlign:'center'}}>
                <Typography fontWeight="bold" variant="h6" component="div">{"Kousay Jebir"}</Typography>
                <Typography variant="subtitle1" component="div" sx={{color:'#202224'}}>{teamMemberData.phoneNumber}</Typography>
                <Typography variant="subtitle2" component="div" sx={{color:'#202224'}}>{teamMemberData.email}</Typography>
            </CardContent>
        </Card>
    );
}