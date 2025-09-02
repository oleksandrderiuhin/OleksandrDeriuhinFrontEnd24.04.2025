import React, { useEffect, useState } from "react";
import axios from "axios";
import { List, ListItem, ListItemText, Typography } from "@mui/material";

export default function Swapi() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        axios.get("https://swapi.dev/api/people/")
            .then((res) => setPeople(res.data.results))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <Typography variant="h5" gutterBottom>SWAPI Персонажі</Typography>
            <List>
                {people.map((person, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={person.name} secondary={`Стать: ${person.gender}`} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
}
