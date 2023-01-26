import "./Prato.css";

type PratoProps = {
  nome: string;
  descricao: string;
  imagem: string;
  preco: number;
};

export const Prato = ({ nome, descricao, imagem, preco }: PratoProps) => (
  <div className="prato">
    <div className="imagem-container">
      <img src={imagem} alt={descricao} />
    </div>
    <div className="conteudo">
      <p className="nome">
        <strong>{nome}</strong>
      </p>
      <p className="descricao">{descricao}</p>
      <p className="preco">
        <strong>R$ {preco}</strong>
      </p>
    </div>
  </div>
);
