import { Box, Paper, Typography } from "@mui/material";
import defaultAnimalImage from '../assets/animal-default.png';

export default function TeaamMemberInformation(props) {

    return(
            <Box m={5} marginTop={0} display={'flex'} gap={1}>
                <Typography fontWeight={'bold'}>{props.label}</Typography>
                <Typography fontWeight={'bold'}>{':'}</Typography>
                <Typography>{props.value}</Typography>
            </Box>
       );
}