import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <img src="/components/images/foto de perfil.jpg" alt="Foto de perfil" width="200" height="200" />
        
        <h1> Nunno Wakiyama Diniz Carvalho </h1>
        <h2> Estudante 5° período de Ciência da Computação</h2>

        <br/>

        <hr></hr>

        <p>Sou estudante de Ciência da Computação, atualmente cursando o 5º período, com grande interesse em ingressar no mercado de trabalho e adquirir experiência prática na área de tecnologia. No último ano, participei de um projeto de Iniciação Científica (PIBIC - voluntário), onde fui responsável pelo treinamento de uma rede neural para detecção de patologias em edificações, experiência que me proporcionou contato direto com inteligência artificial e aprendizado de máquina. Com o término desse projeto, estou em busca de novas oportunidades que me permitam transformar minhas habilidades em resultados reais, gerar renda e impulsionar minha carreira profissional. Sou comunicativo, proativo, tenho facilidade em trabalhar em equipe e me comprometo com dedicação e esforço em tudo o que faço.</p>
      
        <hr></hr>
        
        
        {/* Seção de Projetos */}
        <div>
          <h3>Projetos</h3>
          <ol>
            <li>
              <h4>Sistema de Receituário (FASTRX) - Receitas pré-prontas para você | 03/2025 - 06/2025 </h4>
              <p>Projeto Django com conceito CRUD para gerenciamento de uma aplicação web destinada para uso médico e com fins pediátricos. A aplicação foi desenvolvida usando o princípio de arquitetura em 3 camadas, ou seja, desenvolvemos o FrontEnd, o BackEnd e garantimos que as interação na aplicação iriam interagir de alguma forma com nosso banco de dados, seja ler, alterar, adicionar ou excluir dados</p>
              <p><b>Skills: </b>Trabalho em Equipe, Python, Django, Fullstack & SQLite3. </p>
              <p><b>Repositório: </b> https://github.com/nunnowdc/Projeto_Engenharia_De_Software </p>
            </li>
            <li>
              <h4>Sistema Integrado de Gerenciamento | 07/2024 - 11/2024 </h4>
              <p>rojeto Java com conceito CRUD para gerenciamento de 3 áreas distintas: restaurante, eventos e clínica médica. O sistema utiliza princípios de POO como encapsulamento, abstração e reutilização de código. </p>
              <p><b>Repositório: </b> https://github.com/nunnowdc/Sistema-Integrado-de-Gerenciamento-Java </p>
            </li>
          </ol>
        </div>
      </main>
      
    </div>
  );
}