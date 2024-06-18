import React from 'react';
import { Box, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import StarBorderRounded from '@mui/icons-material/StarBorderRounded';
import StarRounded from '@mui/icons-material/StarRounded';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const ToDoTask = ({ taskData, onSelect, onDelete, onToggleChecked, onToggleFavorite }) => {
    const handleSelect = (e) => {
        e.stopPropagation();
        onSelect(taskData.id);
    };

    const handleDelete = (e) => {
        e.stopPropagation();
        onDelete(taskData.id);
    };

    const handleToggleChecked = () => {
        onToggleChecked(taskData.id);
    };

    const handleToggleFavorite = (e) => {
        e.stopPropagation();
        onToggleFavorite(taskData.id);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: 1.5,
                borderRadius: 1,
                border: taskData.isSelected ? 'none' : '1px solid #D5D5D5',
                backgroundColor: taskData.isSelected ? '#019ADD' : '#FBFCFF',
            }}
            onClick={handleSelect}
        >
            <Box display={'flex'} alignItems="center">
                <Checkbox
                    sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}
                    checked={taskData.isChecked}
                    onChange={handleToggleChecked}
                />
                <p style={{ margin: '0 8px' }}>{taskData.title}</p>
            </Box>

            <Box display={'flex'}>
                <IconButton aria-label="delete" onClick={handleDelete}>
                    {taskData.isSelected ? <DeleteIcon /> : <HighlightOffIcon />}
                </IconButton>

                {/* Conditionally render favorite Checkbox */}
                {!taskData.isSelected && (
                    <div onClick={handleToggleFavorite}>
                        <Checkbox
                            sx={{
                                color: '#B3B3B3',
                                '&.Mui-checked': {
                                    color: '#FFD56D',
                                    '& .MuiSvgIcon-root': { fontSize: 26 },
                                },
                                '& .MuiSvgIcon-root': { fontSize: 26 },
                            }}
                            icon={<StarBorderRounded />}
                            checkedIcon={<StarRounded />}
                            checked={taskData.isFavourite}
                            onChange={() => {}}
                        />
                    </div>
                )}
            </Box>
        </Box>
    );
};

export default ToDoTask;
