import React from "react";
import "./compra.css";
// Imagens serão adicionadas depois.
export default function Compra() {
  const listaProdutos = [
    {
      id: 1,
      nomeProduto: "Vinho Preto",
      precoProduto: 50,
    //   imagemProduto: "/imgs/vinho1.png",
      descricaoProduto:
        "Bem-vindo à nossa adega, onde o aroma de vinhos vintage habilmente elaborados preenche o ar. Mergulhe na rica história e nos sabores requintados da nossa coleção cuidadosamente selecionada.",
    },
    {
      id: 2,
      nomeProduto: "Vinho Preto",
      precoProduto: 100,
    //   imagemProduto: "/imgs/vinho2.png",
      descricaoProduto:
        "Bem-vindo à nossa adega, onde o aroma de vinhos vintage habilmente elaborados preenche o ar. Mergulhe na rica história e nos sabores requintados da nossa coleção cuidadosamente selecionada.",
    },
    {
      id: 3,
      nomeProduto: "Vinho Preto",
      precoProduto: 500,
    //   imagemProduto: "/imgs/vinho3.png",
      descricaoProduto:
        "Bem-vindo à nossa adega, onde o aroma de vinhos vintage habilmente elaborados preenche o ar. Mergulhe na rica história e nos sabores requintados da nossa coleção cuidadosamente selecionada.",
    },
  ];

  return (
    <div className="containerCompra">
      {listaProdutos.map((item) => (
        <div key={item.id} className="cardCompra">
          {/* <img src={item.imagemProduto} alt={item.nomeProduto} className="imagemProduto" /> */}

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
        {/* <img src="/imgs/logo.png" alt="Logo" className="logoFooter" /> */}

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
