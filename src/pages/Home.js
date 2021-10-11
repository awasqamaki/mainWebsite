import React from 'react';
import { Link } from 'react-router-dom';
import alpacaHomepage from '../assets/homepage.jpeg';
import '../styles/Home.css';

function Home() {
    return (
        <div className="home" style={{ background: `#C0C0C0` }}>
            <div className="homeRightSide" style={{ backgroundImage: `url(${alpacaHomepage})` }}> </div>
            <div className="headerContainer">
                <h1>Awasqa Maki</h1>
                <p>ROPA DE ALTA CALIDAD</p>
                <Link to="/menu">
                    <button> COMPRA AHORA</button>
                </Link>
            </div>
        </div>
    );
}

export default Home