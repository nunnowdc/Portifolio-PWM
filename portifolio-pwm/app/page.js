import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <img src="/components/images/foto de perfil.jpg" alt="Foto de perfil" width="200" height="200" className={styles.profileImage}/>
        
        <h1 className={styles.name}> Nunno Wakiyama Diniz Carvalho </h1>
        <h2 className={styles.title}> Estudante 5º período de Ciência da Computação</h2>
        <h3 className={styles.title}> nunnowdcarvalho@gmail.com</h3>

        <div className={styles.socialMedia}>
          <a href="https://github.com/nunnowdc" target="_blank" rel="noopener noreferrer">
            <Image src="/components/images/github image.png" alt="GitHub" width={36} height={36} />
          </a>
          <a href="https://www.linkedin.com/in/nunnowakiyama/" target="_blank" rel="noopener noreferrer">
            <Image src="/components/images/linkedin image.png" alt="LinkedIn" width={36} height={36} />
          </a>
          <a href="https://www.instagram.com/nunno_wdc/" target="_blank" rel="noopener noreferrer">
            <Image src="/components/images/instagram logo.jpg" alt="Instagram" width={36} height={36} />
          </a>
        </div>

        <hr className={styles.divider}></hr>

        <p className={styles.description}>Sou estudante de Ciência da Computação, atualmente cursando o 5º período, com grande interesse em ingressar no mercado de trabalho e adquirir experiência prática na área de tecnologia. No último ano, participei de um projeto de Iniciação Científica (PIBIC - voluntário), onde fui responsável pelo treinamento de uma rede neural para detecção de patologias em edificações, experiência que me proporcionou contato direto com inteligência artificial e aprendizado de máquina. Com o término desse projeto, estou em busca de novas oportunidades que me permitam transformar minhas habilidades em resultados reais, gerar renda e impulsionar minha carreira profissional. Sou comunicativo, proativo, tenho facilidade em trabalhar em equipe e me comprometo com dedicação e esforço em tudo o que faço.</p>
      
        <hr className={styles.divider}></hr>

        <section id="educacao" className={styles.section}>
          <h3 className={styles.sectionTitle}>Educação</h3>
          <ul className={styles.sectionContent}>
            <li>Universidade Católica de Pernambuco (UNICAP), Ciência da Computação - 2023/2 - 2027/1</li>
            <li>SENAC Idiomas PE, Inglês (Curso de Idiomas) - 2023/1 - 2026/2</li>
          </ul>
        </section>

        <hr className={styles.divider}></hr>

        <section id="tecnologias" className={styles.section}>
          <h3 className={styles.sectionTitle}>Tecnologias</h3>
          <ul className={styles.skillsList}>
            <li className={styles.skillItem}>
              <div className={styles.skillIcons}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JS" width={42} height={42}/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5" width={42} height={42}/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3" width={42} height={42}/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" width={42} height={42}/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" width={42} height={42}/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg" alt="Jquerry" width={42} height={42}/>
              </div>
            </li>
            <li className={styles.skillItem}>
              <div className={styles.skillIcons}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" width={42} height={42}/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" width={42} height={42}/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" alt="C" width={42} height={42}/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" alt="C++" width={42} height={42}/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL" width={42} height={42}/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" alt="SQLite3" width={42} height={42}/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" alt="SQL" width={42} height={42}/>
              </div>
            </li>
            <li className={styles.skillItem}>
              <div className={styles.skillIcons}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg" alt="Keras" width={42} height={42}/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" width={42} height={42}/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" alt="Django" width={42} height={42}/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/raspberrypi/raspberrypi-original.svg" alt="RaspBerry" width={42} height={42}/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg" alt="Arduino" width={42} height={42}/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubcodespaces/githubcodespaces-original.svg" alt="GithubCodespace" width={42} height={42}/>
              </div>
            </li>
          </ul>
        </section>
        
        <hr className={styles.divider}></hr>
        
        <section id="projetos" className={styles.section}>
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
              <p className={styles.projectSkills}><b>Skills: </b>Trabalho em Equipe, Java, POO, & SOLID. </p>
              <p className={styles.projectRepo}><b>Repositório: </b> <a href="https://github.com/nunnowdc/Sistema-Integrado-de-Gerenciamento-Java" target="_blank" rel="noopener noreferrer">Repositório do Projeto 2</a> </p>
            </li>
          </ol>
        </section>
        
        <a href="/forca" className={styles.callToActionButton}>
            Jogue o Jogo da Forca
        </a>
        
        <footer className={styles.footer}>
          <p>&copy; 2025 Nunno Wakiyama Diniz Carvalho. Todos os direitos reservados.</p>
        </footer>
      </main>
    </div>
  );
}