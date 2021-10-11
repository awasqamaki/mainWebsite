import React from 'react';
import alpaca from '../assets/leftSide.jpeg';
import '../styles/Contact.css';

function Contact() {
    return (
        <div className="contact">
            <div className="leftSide" style={{ backgroundImage: `url(${alpaca})` }}></div>
            <div className="rightSide">
                <h1> Contactanos </h1>
                <form id="contact-form" method="POST">
                    <label htmlFor="name">Nombre Completo</label>
                    <input name="name" placeholder="Su nombre completo aqui..." type="text" />
                    <label htmlFor="email">Nombre Completo</label>
                    <input name="email" placeholder="Su email aqui..." type="email" />
                    <label htmlFor="message">Mensaje</label>
                    <textarea rows="6" placeholder="Escriba su mensaje aqui..." name="message" required> </textarea>
                    <button type="submit">Enviar Mensaje</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;