import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <img src="/components/images/foto de perfil.jpg" alt="Foto de perfil" width="200" height="200" className={styles.profileImage}/>
        
        <h1 className={styles.name}> Nunno Wakiyama Diniz Carvalho </h1>
        <h2 className={styles.title}> Estudante 5º período de Ciência da Computação</h2>
        <h3 className={styles.title}> nunnowdcarvalho@gmail.com</h3>

        <div className={styles.socialMedia}>
          <a href="https://github.com/nunnowdc" target="_blank" rel="noopener noreferrer">
            <Image src="/components/images/github image.jpg" alt="GitHub" width={24} height={24} />
          </a>
          <a href="https://www.linkedin.com/in/nunnowakiyama/" target="_blank" rel="noopener noreferrer">
            <Image src="/components/images/linkedin image.jpg" alt="LinkedIn" width={24} height={24} />
          </a>
          {/* Adicione mais links de redes sociais aqui se desejar, como Behance, etc. */}
        </div>

        <hr className={styles.divider}></hr>

        <p className={styles.description}>Sou estudante de Ciência da Computação, atualmente cursando o 5º período, com grande interesse em ingressar no mercado de trabalho e adquirir experiência prática na área de tecnologia. No último ano, participei de um projeto de Iniciação Científica (PIBIC - voluntário), onde fui responsável pelo treinamento de uma rede neural para detecção de patologias em edificações, experiência que me proporcionou contato direto com inteligência artificial e aprendizado de máquina. Com o término desse projeto, estou em busca de novas oportunidades que me permitam transformar minhas habilidades em resultados reais, gerar renda e impulsionar minha carreira profissional. Sou comunicativo, proativo, tenho facilidade em trabalhar em equipe e me comprometo com dedicação e esforço em tudo o que faço.</p>
      
        <hr className={styles.divider}></hr>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Educação</h3>
          <p className={styles.sectionContent}>Universidade Católica de Pernambuco (UNICAP), Ciência da Computação - 2023/2 - 2027/1</p>
        </section>

        <hr className={styles.divider}></hr>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Tecnologias</h3>
          <ul className={styles.skillsList}>
            <li className={styles.skillItem}>?</li>
            <li className={styles.skillItem}>?</li>
            <li className={styles.skillItem}>?</li>
            {/* Adicione mais tecnologias aqui */}
          </ul>
        </section>
        
        <hr className={styles.divider}></hr>
        
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Projetos</h3>
          <ol className={styles.projectList}>
            <li className={styles.projectItem}>
              <h4 className={styles.projectTitle}>Sistema de Receituário (FASTRX) - Receitas pré-prontas para você | 03/2025 - 06/2025 </h4>
              <p className={styles.projectDescription}>Projeto Django com conceito CRUD para gerenciamento de uma aplicação web destinada para uso médico e com fins pediátricos. A aplicação foi desenvolvida usando o princípio de arquitetura em 3 camadas, ou seja, desenvolvemos o FrontEnd, o BackEnd e garantimos que as interação na aplicação iriam interagir de alguma forma com nosso banco de dados, seja ler, alterar, adicionar ou excluir dados</p>
              <p className={styles.projectSkills}><b>Skills: </b>Trabalho em Equipe, Python, Django, Fullstack & SQLite3. </p>
              <p className={styles.projectRepo}><b>Repositório: </b> <a href="https://github.com/nunnowdc/Projeto_Engenharia_De_Software" target="_blank" rel="noopener noreferrer">Repositório do Projeto 1</a> </p>
            </li>
            <li className={styles.projectItem}>
              <h4 className={styles.projectTitle}>Sistema Integrado de Gerenciamento | 07/2024 - 11/2024 </h4>
              <p className={styles.projectDescription}>Projeto Java com conceito CRUD para gerenciamento de 3 áreas distintas: restaurante, eventos e clínica médica. O sistema utiliza princípios de POO como encapsulamento, abstração e reutilização de código. </p>
              <p className={styles.projectRepo}><b>Repositório: </b> <a href="https://github.com/nunnowdc/Sistema-Integrado-de-Gerenciamento-Java" target="_blank" rel="noopener noreferrer">Repositório do Projeto 2</a> </p>
            </li>
          </ol>
        </section>
      </main>
    </div>
  );
}