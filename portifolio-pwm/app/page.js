import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <img src="/components/images/foto de perfil.jpg" alt="Foto de perfil" width="300" height="300" /> 
      <h1> Nunno Wakiyama Diniz Carvalho </h1>

      <br/>

      <hr></hr>
      <p> <b>Sou estudante do 5º período de Ciência da Computação na Universidade Católica de</b> </p>
      <p> <b>Pernambuco. Tenho formação acadêmica em Python, C, Java e SQL, adquirida ao longo da</b> </p>
      <p> <b>graduação, e costumo aprofundar meus conhecimentos por meio de projetos e estudos pessoais.</b> </p>
      <hr></hr>
    </div>
  );
}