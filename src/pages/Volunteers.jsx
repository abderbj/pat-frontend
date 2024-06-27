import * as React from 'react';
import { Box, Typography, Button, TextField, Grid } from '@mui/material';
import AnimalCard from '../components/AnimalCard';
import defaultAnimalImage from '../assets/animal-default.png';
import { useState } from 'react';

import VolunteerCard from '../components/VolunteerCard';
import VolunteerProfile from '../components/VolunteerProfile';
import useFetchData from '../hooks/useFetchData';

export default function Volunteers({ teamList }) {
    const [team, setTeam] = useState({ teamList: [], selectedTeamMember: -1 });
    function getTeam(data){
        setTeam({teamList:data,selectedTeamMember:-1});
    }
    /* const [searchInput, setSearchInput] = useState(""); */
    useFetchData("http://localhost:5000/volunteer","GET",getTeam);
    const deleteTeamMember = (id) => {
        const newTeam = team.teamList.filter((teamMember) => teamMember.id !== id);
        setTeam({
            teamList: newTeam,
            selectedTeamMember: -1
        });
    };

    const searchTeamMemberHandler = (event) => {
        const lowerCaseInput = event.target.value.toLowerCase();
        setSearchInput(lowerCaseInput);
    };

    /* const searchResultTeam = team.teamList.filter((teamMember) => {
        if (searchInput === '') {
            return true; // Include all animals if search input is empty
        } else {
            return teamMember.name.toLowerCase().includes(searchInput);
        }
    }); */

    const findTeamMemberById = (id) => {
        return team.teamList.find(teamMember => teamMember.id === id);
    };

    const hadnleTeamMemberClick = (id) => {
        setTeam({
            ...team,
            selectedTeamMember: id
        });
    };

    return (
        <Box bgcolor={"#F5F6FA"}>
            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} p={2} paddingBlockEnd={5}>
                <Typography variant='h5' fontWeight={'bold'}>{team.selectedTeamMember === -1 ? 'Bénévoles' : "Profile du bénévole"}</Typography>
                {team.selectedTeamMember === -1 ?
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
                            Ajouter un bénévole
                        </Button>
                        {/* <TextField
                            id="outlined-basic"
                            label="Search animal name"
                            variant="outlined"
                            onChange={searchAnimalHandler}
                            value={searchInput}
                        /> */}
                    </Box> : null
                }
            </Box>
            {team.selectedTeamMember === -1 ?
                <Grid container spacing={5}>
                    {team.teamList.map((teamMember) => (
                        <Grid item key={teamMember.id}>
                            <VolunteerCard
                                key={teamMember.id}
                                teamMemberData={teamMember}
                                setSelectedTeamMember={() => hadnleTeamMemberClick(teamMember.id)}
                            />
                        </Grid>
                    ))}
                </Grid> :
                <VolunteerProfile onDelete={deleteTeamMember} teamMemberData={findTeamMemberById(team.selectedTeamMember)} />
            }
        </Box>
    );
}
