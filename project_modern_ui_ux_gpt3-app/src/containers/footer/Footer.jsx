import React from 'react';
import gpt3Logo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Você quer entrar no futuro antes dos outros</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Solicitar acesso antecipado</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>999 3rd Ave, Seattle, WA 98104, Estados Unidos, <br /> Todos os Direitos Reservados</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Sobre nós</p>
        <p>Midias Sociais</p>
        <p>Nossa História</p>
        <p>Contatos</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Companhia</h4>
        <p>Termos & Condições </p>
        <p>Política de Privacidade</p>
        <p>Políticas de Cooks</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Entre em Contato</h4>
        <p>999 3rd Ave, Seattle, WA 98104, Estados Unidos</p>
        <p>+12078551707</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2021 GPT-3. Todos os direitos reservados.</p>
    </div>
  </div>
);

export default Footer;
