import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Swapi from "./pages/Swapi";

export default function App() {
    return (
        <>
            <Header />
            <Container sx={{ minHeight: "80vh", mt: 4 }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/todo" element={<Todo />} />
                    <Route path="/swapi" element={<Swapi />} />
                </Routes>
            </Container>
            <Footer />
        </>
    );
}
