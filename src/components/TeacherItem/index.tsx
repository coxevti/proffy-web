import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import { Container } from "./styles";

const TeacherItem: React.FC = () => (
  <Container>
    <header>
      <img
        src="https://avatars0.githubusercontent.com/u/46493873?s=460&u=65bc8495bff62de3c530ac814cb7e9483f27e48d&v=4"
        alt="Avatar"
      />
      <div>
        <strong>Valdir Coxev</strong>
        <span>Química</span>
      </div>
    </header>
    <p>
      Estusiasta das melhores tecnologias de química avançada.
      <br />
      <br />
      Apaixonado por explodir coisas em labotatório e por mudar a vida das
      pessoas através de experiências. Mais de 200.000 pessoas já passaram por
      uma das minha explosões.
    </p>
    <footer>
      <p>
        Preço/hora
        <strong>R$ 80,00</strong>
      </p>
      <button>
        <img src={whatsappIcon} alt="Whatsapp" />
        Entrar em contato
      </button>
    </footer>
  </Container>
);

export default TeacherItem;
