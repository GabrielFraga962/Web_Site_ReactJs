import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Vamos Construir Algo incrível Com GPT-3 OpenAI</h1>
      <p>Inteligência artificial é a capacidade de dispositivos eletrônicos de funcionar de maneira que lembra o pensamento humano. Isso implica em perceber variáveis, tomar decisões e resolver problemas.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Seu endereço de E-mail" />
        <button type="button">Iniciar</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
