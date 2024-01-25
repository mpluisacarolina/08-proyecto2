import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div>
      <h1>
        Hola mi nombre es Luisa Carolina Marín Pietri,
        ofrezco mis servicios de programación y desarrollo 
        en todo tipo de proyectos web
      </h1>

      <h2>
        Te ayudo a crear tu sitio o aplicación web, tener mas
        visibilidad y relevancia en internet. <Link to="contacto">Contacta conmigo </Link>
      </h2>

      <section className="last-works">
        <h2> Algunos demis proyectos </h2>
        <p>Estos son algunos de mis trabajos de desarrollo web</p>
        <div className="works">

        </div>

      </section>
    </div>
  )
}
