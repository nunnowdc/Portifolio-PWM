import Link from 'next/link';
import styles from './forca.module.css';

export default function Forca() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Jogo da Forca</h1>
      <p className={styles.description}>
        xxxxxxxxxx
      </p>
      <Link href="/" className={styles.backButton}>Voltar para o Portfólio</Link>
    </div>
  );
}