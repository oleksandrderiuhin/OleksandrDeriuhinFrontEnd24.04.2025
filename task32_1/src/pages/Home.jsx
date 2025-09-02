import React from "react";
import { Typography, Box, Chip } from "@mui/material";

export default function Home() {
    return (
        <Box>
            <Typography variant="h4" gutterBottom>Привіт! Я Олександр</Typography>
            <Typography variant="body1">
                Я Front-End розробник з досвідом у React.js, UI/UX дизайні та створенні сучасних веб-додатків.
            </Typography>
            <Box mt={2}>
                <Typography variant="h6">Навички:</Typography>
                <Chip label="React" sx={{ mr: 1, mt: 1 }} />
                <Chip label="JavaScript" sx={{ mr: 1, mt: 1 }} />
                <Chip label="HTML/CSS" sx={{ mr: 1, mt: 1 }} />
                <Chip label="UI/UX Design" sx={{ mr: 1, mt: 1 }} />
            </Box>
        </Box>
    );
}
