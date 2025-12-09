import React from "react";
import "./vinhos.css";
// import imagemBanner from "./bannerVinhos.png";/* vou add as img depois */
// import vinhoUm from "./vinho1.png";/* vou add a img depois */
// import vinhoDois from "./vinho2.png";/* vou add a img depois */
// import vinhoTres from "./vinho3.png";/* vou add a img depois */
// import imagemRefinado from "./refinado.png";/* vou add as img depois */
// import imagemLogo from "./logoBaco.png";/* vou add as img depois */

export default function Vinhos() {
  return (
    <div className="containerVinhos">
      
      <div className="bannerVinhos">
        {/* <img src={imagemBanner} alt="garrafas de vinho" /> */}
      </div>

      <div className="tituloVinhos">
        {/* <img src={imagemLogo} alt="logo" className="logoTitulo" /> */}
        <h2>Nossos Vinhos</h2>
      </div>

      <div className="cardsVinhos">
        
        <div className="cardVinho">
          {/* <img src={vinhoUm} alt="Vinho 1" /> */}
          <span className="precoVinho">R$110</span>
          <p className="descricaoVinho">
            Um vinho encorpado com notas frutadas e final marcante.
          </p>
        </div>

        <div className="cardVinho">
          {/* <img src={vinhoDois} alt="Vinho 2" /> */}
          <span className="precoVinho">R$150</span>
          <p className="descricaoVinho">
            Elaborado com uvas selecionadas, ideal para ocasiões especiais.
          </p>
        </div>

        <div className="cardVinho">
          {/* <img src={vinhoTres} alt="Vinho 3" /> */}
          <span className="precoVinho">R$110</span>
          <p className="descricaoVinho">
            Suave, aromático e perfeito para harmonização refinada.
          </p>
        </div>

      </div>

      <div className="secaoRefinados">
        {/* <img src={imagemRefinado} alt="vinho refinado" /> */}

        <div className="textoRefinados">
          <h3>Refinados</h3>

          <p>
            Bem-vindo à nossa adega, onde o aroma de vinhos vintage habilmente
            elaborados preenche o ar. Mergulhe na rica história e nos sabores
            requintados da nossa coleção cuidadosamente selecionada.
          </p>
        </div>
      </div>

      <div className="vinhosFooter">
        {/* <img src={imagemLogo} alt="logo" className="logoFooter" /> */}

        <div className="colunaFooter">
          <p>Sobre</p>
          <p>Home</p>
          <p>Opções</p>
          <p>Contatos</p>
        </div>

        <div className="colunaFooter">
          <p>Sobre</p>
          <p>Home</p>
          <p>Opções</p>
          <p>Contatos</p>
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
