import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>Nunno W. D. Carvalho</div>
      <ul className={styles.navLinks}>
        <li><Link href="#educacao" className={styles.navButton}>Educação</Link></li>
        <li><Link href="#tecnologias" className={styles.navButton}>Tecnologias</Link></li>
        <li><Link href="#projetos" className={styles.navButton}>Projetos</Link></li>
        <li><Link href="/forca" className={styles.navButton}>Jogo da Forca</Link></li>
      </ul>
    </nav>
  );
}