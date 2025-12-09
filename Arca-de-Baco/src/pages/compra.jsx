import React from "react";
import { Link } from "react-router-dom";
import "./compra.css";

export default function Compra() {
  const listaProdutos = [
    {
      id: 1,
      nomeProduto: "Vinho Preto",
      precoProduto: 50,
      descricaoProduto:
        "Bem-vindo à nossa adega, onde o aroma de vinhos vintage habilmente elaborados preenche o ar. Mergulhe na rica história e nos sabores requintados da nossa coleção cuidadosamente selecionada.",
    },
    {
      id: 2,
      nomeProduto: "Vinho Preto",
      precoProduto: 100,
      descricaoProduto:
        "Bem-vindo à nossa adega, onde o aroma de vinhos vintage habilmente elaborados preenche o ar. Mergulhe na rica história e nos sabores requintados da nossa coleção cuidadosamente selecionada.",
    },
    {
      id: 3,
      nomeProduto: "Vinho Preto",
      precoProduto: 500,
      descricaoProduto:
        "Bem-vindo à nossa adega, onde o aroma de vinhos vintage habilmente elaborados preenche o ar. Mergulhe na rica história e nos sabores requintados da nossa coleção cuidadosamente selecionada.",
    },
  ];

  return (
    <div className="containerCompra">

      <nav className="navTopo">
              <h2 className="navLogo">Arca de Baco</h2>
              <ul className="navLinks">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/compra">Compra</Link></li>
                <li><Link to="/vinhos">Vinhos</Link></li>
                <li><Link to="/login">Login</Link></li>
              </ul>
            </nav>

      {listaProdutos.map((item) => (
        <div key={item.id} className="cardCompra">
          <div className="conteudoCompra">
            <h2 className="nomeProduto">{item.nomeProduto}</h2>
            <p className="descricaoProduto">{item.descricaoProduto}</p>

            <div className="iconesAvaliacao">
              <span>🍇</span>
              <span>🍷</span>
              <span>⭐</span>
              <span>🏆</span>
            </div>

            <div className="precoBotao">
              <p className="precoProduto">R${item.precoProduto}</p>
              <button className="botaoComprar">Comprar</button>
            </div>
          </div>

          <button className="botaoExcluir">🗑</button>
        </div>
      ))}

      <div className="paginacaoCompra">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>...</span>
        <span>67</span>
      </div>

      <footer className="footerCompra">
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
      </footer>
    </div>
  );
}
