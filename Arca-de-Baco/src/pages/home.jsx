import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import logo from "./logoBaco.png";
import vinhos from "./vinhos.png";
import adega from "./adega.png";
import barricas from "./barricas.png";

export default function Home() {
  return (
    <div className="containerHome">
      <nav className="navTopo">
              <h2 className="navLogo">Arca de Baco</h2>
      
              <ul className="navLinks">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/compra">Compra</Link></li>
                <li><Link to="/vinhos">Vinhos</Link></li>
                <li><Link to="/login">Login</Link></li>
              </ul>
            </nav>

      <div className="blocoTopo">
        <div className="textoTopo">
          <h1>ARCA DE BACO, OS MELHORES VINHOS SOMENTE AQUI</h1>

          <p>
            Bem-vindo à nossa adega, onde o aroma de vinhos vintage habilmente
            elaborados preenche o ar. Mergulhe na rica história e nos sabores
            requintados da nossa coleção cuidadosamente selecionada.
          </p>

          <button className="btn">Saiba mais</button>
        </div>

        <div className="imagemTopo">
          <img src={vinhos} alt="imagem vinhos" />
        </div>
      </div>

      <div className="logo">
        <img src={logo} alt="logo da adega" className="logoImg" />
      </div>

      <div className="adega">
        <img src={adega} alt="imagem adega" className="adegaImg" />
      </div>

      <div className="containerSobre">
        <h2>Arca De Baco</h2>

        <div className="colunaSobre">
          <p>
            Bem-vindo à nossa adega, onde o aroma de vinhos vintage habilmente
            elaborados preenche o ar. Mergulhe na rica história e nos sabores
            requintados da nossa coleção cuidadosamente selecionada.
          </p>

          <p>
            Bem-vindo à nossa adega, onde o aroma de vinhos vintage habilmente
            elaborados preenche o ar. Mergulhe na rica história e nos sabores
            requintados da nossa coleção cuidadosamente selecionada.
          </p>

          <p>
            Bem-vindo à nossa adega, onde o aroma de vinhos vintage habilmente
            elaborados preenche o ar. Mergulhe na rica história e nos sabores
            requintados da nossa coleção cuidadosamente selecionada.
          </p>
        </div>
      </div>

      <div className="containerExplore">
        <div className="imagemExplore">
          <img src={barricas} alt="imagem barricas" className="imagemExplore" />
        </div>

        <div className="explore">
          <img src={logo} alt="logo da adega" className="logoExplore" />
          <h2>Explore nossa coleção</h2>

          <p>
            Descubra os melhores vinhos de todo o mundo, cuidadosamente
            selecionados e meticulosamente cuidados em nossa adega de última
            geração.
          </p>
        </div>
      </div>

      <div className="barraContatos">
        <p>Entre em contato</p>

        <div className="iconesSociais">
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-tiktok"></i>
          <i className="fa-brands fa-whatsapp"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
        </div>
      </div>

      <div className="footer">
        <div className="logoFooter">
          <img src={logo} alt="logo da adega" className="logoFooter" />
        </div>

        <div className="colunaFooter">
          <p>Sobre</p>
          <p>Home</p>
          <p>Opções</p>
          <p>Contatos</p>
        </div>
      </div>

    </div>
  );
}
