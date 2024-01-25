import React from 'react';
import { Routes, Route, BrowserRouter, NavLink } from "react-router-dom";
import { Inicio } from '../components/Inicio';
import { Servicios } from '../components/Servicios';
import { Portafolio } from '../components/Portafolio';
import { Curriculum } from '../components/Curriculum';
import { Contacto } from '../components/Contacto';
import { HeaderNav } from '../components/layout/HeaderNav';
import { Footer } from '../components/layout/Footer';

export const MisRutas = () => {
    return (
        <BrowserRouter >
            {/* HEADER Y NAVEGACION */}
            <HeaderNav />
            {/* CONTENIDO CENTRAL */}
            <section className="content">
                <Routes >
                    <Route path="/" element={<Inicio />} />
                    <Route path="inicio" element={<Inicio />} />
                    <Route path="portafolio" element={<Portafolio />} />
                    <Route path="servicios" element={<Servicios />} />
                    <Route path="curriculum" element={<Curriculum />} />
                    <Route path="contacto" element={<Contacto />} />
                </Routes>
            </section>

            {/* FOOTER */}
            <Footer />
        </BrowserRouter>
    )
}
