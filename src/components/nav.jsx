import React from "react";
import '../hojas-de-estilo/nav.css';
import LogoStone from '../imagenes/stone.png';

function Nav() {
    return ( 
    <div className="nav-container">
        <nav className="nav-bar">
            <ul className="nav-menu">
                <li className="nav-menu-item"><a className="nav-link nav-menu-link_active" href="#productos">Productos</a></li>
                <li className="nav-menu-item"><a className="nav-link nav-menu-link_active" href="#sobreNosotros">Sobre Nosotros</a></li>
                <div>
                <img
                    src="https://i.imgur.com/1H7vDNH.png"
                    className='logo'
                    alt='logo de Stone' />
                </div>
                <li className="nav-menu-item"><a className="nav-link nav-menu-link_active" href="#contacto">Contacto</a></li>
                <li className="nav-menu-item"><a className="nav-link nav-menu-link_active" href="#porque-vapear">Porque Vapear?</a></li>
            </ul>
        </nav>
    </div>
    );
}

export default Nav;
