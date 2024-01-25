import React from 'react'

export const Contacto = () => {
  return (
    <div className="page">
      <h1 className="heading">Contacto</h1>
      
      <form className="contact" action="mailto:mpluisacarolina@gmail.com"> 
        <input type="text" plasceholder="Nombres: " />
        <input type="text" plasceholder="Apellidos: " />
        <input type="text" plasceholder="Email: " />
        <textarea placeholder="Motivo de Contacto" />
        <input type="submit" value="Enviar" />

      </form>

    </div>
  )
}
