import React from "react";
import "./home.css";
import logo from "./logoBaco.png";
import vinhos from "./vinhos.png";
import adega from "./adega.png";

export default function Home() {
  return (
    <div className="home-container">
      <div className="top-block">
        <div className="top-text">
          <h1>
            ARCA DE BACO, OS MELHORES VINHOS SOMENTE AQUI
          </h1>

          <p>
            Bem-vindo à nossa adega, onde o aroma de vinhos vintage habilmente
            elaborados preenche o ar. Mergulhe na rica história e nos sabores
            requintados da nossa coleção cuidadosamente selecionada.
          </p>

          <button className="btn">Saiba mais</button>
        </div>

        <div className="top-image">
          <img src={vinhos} alt="imagem vinhos"/>
        </div>
      </div>

      <div className="logo">
        <img src={logo} alt="logo da adega" className="logoImg" />
      </div>

      <div className="adega">
        <img src={adega} alt="imagem adega" className="adegaImg"/>
      </div>

      <div className="about-container">
        <h2>Arca De Baco</h2>

        <div className="about-columns">
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
    </div>
  );
}
