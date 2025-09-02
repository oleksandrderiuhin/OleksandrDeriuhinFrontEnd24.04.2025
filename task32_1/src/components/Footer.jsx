import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Box sx={{ textAlign: "center", py: 2, bgcolor: "#f5f5f5", mt: 4 }}>
            <Typography variant="body2">
                © 2025 My Portfolio | Контакти: oleksandrderiuhin97@gmail.com
            </Typography>
        </Box>
    );
}
