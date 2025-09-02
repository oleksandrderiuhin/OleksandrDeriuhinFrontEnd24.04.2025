import React, { useState } from "react";
import { TextField, Button, List, ListItem, ListItemText } from "@mui/material";

export default function Todo() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");

    const addTask = () => {
        if (!input.trim()) return;
        setTasks([...tasks, input]);
        setInput("");
    };

    return (
        <div>
            <TextField
                label="Нове завдання"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                sx={{ mr: 2 }}
            />
            <Button variant="contained" onClick={addTask}>Додати</Button>
            <List>
                {tasks.map((task, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={task} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

