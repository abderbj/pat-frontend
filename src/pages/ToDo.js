import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import ToDoTask from '../components/ToDoTask';

function ToDo({ toDoTasks }) {

    const [selectedTask, setSelectedTask] = useState(-1);
    const [tasks, setTasks] = useState(toDoTasks);

    const deleteTask = (id) => {
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks);
    };

    const toggleTaskProperty = (taskId, propertyName) => {
        const updatedTasks = tasks.map((task) =>
            task.id === taskId ? { ...task, [propertyName]: !task[propertyName] } : task
        );
        setTasks(updatedTasks);
    };

    const toggleChecked = (taskId) => {
        toggleTaskProperty(taskId, 'isChecked');
    };

    const toggleFavorite = (taskId) => {
        toggleTaskProperty(taskId, 'isFavourite');
    };

    return (
        <Box sx={{ backgroundColor: '#F5F6FA' }}>
            <Box display="flex" justifyContent="space-between" padding={3}>
                <Typography variant="h4" fontWeight="600">
                    To-Do Liste
                </Typography>
                <Button variant="contained" sx={{backgroundColor:"#019CDD"}}>
                    Ajouter une tache
                </Button>
            </Box>

            <Box display={'flex'} flexDirection={'column'} gap={3}>
                {tasks.map((task) => (
                    <ToDoTask
                        key={task.id}
                        taskData={{
                            id: task.id,
                            title: task.title,
                            isChecked: task.isChecked,
                            isFavourite: task.isFavourite,
                            isSelected: selectedTask === task.id,
                        }}
                        onSelect={setSelectedTask}
                        onDelete={deleteTask}
                        onToggleChecked={toggleChecked}
                        onToggleFavorite={toggleFavorite}
                    />
                ))}
            </Box>
        </Box>
    );
}

export default ToDo;

