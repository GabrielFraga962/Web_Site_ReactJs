import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.svg';
import './navbar.css';

const Menu = () => (
  <>
    <p><a href="#home">Inicio</a></p>
    <p><a href="#wgpt3">O que é GPT3?</a></p>
    <p><a href="#possibility">Abra AI</a></p>
    <p><a href="#features">Estudos de Caso</a></p>
    <p><a href="#blog">Biblioteca</a></p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Entrar</p>
        <button type="button">Cadastrar</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <Menu />
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Entrar</p>
            <button type="button">Cadastrar</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
