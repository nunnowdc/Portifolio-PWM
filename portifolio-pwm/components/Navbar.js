import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>Nunno W. D. Carvalho</div>
      <ul className={styles.navLinks}>
        <li><Link href="#educacao">Educação</Link></li>
        <li><Link href="#tecnologias">Tecnologias</Link></li>
        <li><Link href="#projetos">Projetos</Link></li>
        <li><Link href="/forca">Jogo da Forca</Link></li>
      </ul>
    </nav>
  );
}