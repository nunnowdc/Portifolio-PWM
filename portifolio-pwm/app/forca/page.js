"use client";

import { useState, useEffect } from 'react';
import styles from './forca.module.css';
import Link from 'next/link';
import Image from "next/image";

const palavras = [
  "BULBASAUR", "IVYSAUR", "VENUSAUR", "CHARMANDER", "CHARMELEON", "CHARIZARD",
  "SQUIRTLE", "WARTORTLE", "BLASTOISE", "CATERPIE", "METAPOD", "BUTTERFREE",
  "WEEDLE", "KAKUNA", "BEEDRILL", "PIDGEY", "PIDGEOTTO", "PIDGEOT",
  "RATTATA", "RATICATE", "SPEAROW", "FEAROW", "EKANS", "ARBOK", "PIKACHU",
  "RAICHU", "SANDSHREW", "SANDSLASH", "NIDORANF", "NIDORINA", "NIDOQUEEN",
  "NIDORANM", "NIDORINO", "NIDOKING", "CLEFAIRY", "CLEFABLE", "VULPIX",
  "NINETALES", "JIGGLYPUFF", "WIGGLYTUFF", "ZUBAT", "GOLBAT", "ODDISH",
  "GLOOM", "VILEPLUME", "PARAS", "PARASECT", "VENONAT", "VENOMOTH",
  "DIGLETT", "DUGTRIO", "MEOWTH", "PERSIAN", "PSYDUCK", "GOLDUCK",
  "MANKEY", "PRIMEAPE", "GROWLITHE", "ARCANINE", "POLIWAG", "POLIWHIRL",
  "POLIWRATH", "ABRA", "KADABRA", "ALAKAZAM", "MACHOP", "MACHOKE", "MACHAMP",
  "BELLSPROUT", "WEEPINBELL", "VICTREEBEL", "ENTACOOL", "TENTACRUEL",
  "GEODUDE", "GRAVELER", "GOLEM", "PONYTA", "RAPIDASH", "SLOWPOKE", "SLOWBRO",
  "MAGNEMITE", "MAGNETON", "FARFETCHD", "DODUO", "DODRIO", "SEEL", "DEWGONG",
  "GRIMER", "MUK", "SHELLDER", "CLOYSTER", "GASTLY", "HAUNTER", "GENGAR",
  "ONIX", "DROWZEE", "HYPNO", "KRABBY", "KINGLER", "VOLTORB", "ELECTRODE",
  "EXEGGUTE", "EXEGGUTOR", "CUBONE", "MAROWAK", "HITMONLEE", "HITMONCHAN",
  "LICKITUNG", "KOFFING", "WEEZING", "RYHORN", "RHYDON", "CHANSEY",
  "TANGELA", "KANGASKHAN", "HORSEA", "SEADRA", "GOLDEEN", "SEAKING",
  "STARYU", "STARMIE", "MRMIME", "SCYTHER", "JYNX", "ELECTABUZZ",
  "MAGMAR", "PINSIR", "TAUROS", "MAGIKARP", "GYARADOS", "LAPRAS", "DITTO",
  "EEVEE", "VAPOREON", "JOLTEON", "FLAREON", "PORYGON", "OMANYTE", "OMASTAR",
  "KABUTO", "KABUTOPS", "AERODACTYL", "SNORLAX", "ARTICUNO", "ZAPDOS",
  "MOLTRES", "DRATINI", "DRAGONAIR", "DRAGONITE", "MEWTWO", "MEW"
];

function getPalavraAleatoria() {
  const index = Math.floor(Math.random() * palavras.length);
  return palavras[index];
}

export default function JogoDaForca() {
  const [palavra, setPalavra] = useState('');
  const [letrasAdivinhadas, setLetrasAdivinhadas] = useState([]);
  const [letrasErradas, setLetrasErradas] = useState([]);
  const maxErros = 6;

  useEffect(() => {
    if (palavras.length > 0) {
      iniciarNovoJogo();
    }
  }, []);

  function iniciarNovoJogo() {
    const novaPalavra = getPalavraAleatoria();
    setPalavra(novaPalavra);
    setLetrasAdivinhadas([]);
    setLetrasErradas([]);
  }

  function handleAdivinhar(letra) {
    if (letrasAdivinhadas.includes(letra) || letrasErradas.includes(letra) || jogoTerminado) {
      return;
    }

    if (palavra.includes(letra)) {
      setLetrasAdivinhadas([...letrasAdivinhadas, letra]);
    } else {
      setLetrasErradas([...letrasErradas, letra]);
    }
  }

  const palavraExibida = palavra
    .split('')
    .map(letra => (letrasAdivinhadas.includes(letra) ? letra : '_'))
    .join(' ');

  const isVitoria = palavra.split('').every(letra => letrasAdivinhadas.includes(letra));
  const isDerrota = letrasErradas.length >= maxErros;
  const jogoTerminado = isVitoria || isDerrota;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Forca Pokémon gen 1</h1>
      <div className={styles.jogo}>
        <div className={styles.infoBox}>
          <p>Nota: ♀ = "F" e ♂ = "M"</p>
        </div>
        <ForcaDrawing erros={letrasErradas.length} />
        <div className={styles.palavraContainer}>
          <p className={styles.palavra}>{palavraExibida}</p>
        </div>
        {jogoTerminado ? (
          <div className={styles.endGameContainer}>
            {isVitoria && (
                <div>
                    <Image
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
                    alt='Pikachu feliz'
                    className={styles.resultadoSprite}
                    width={160}
                    height={160}
                    />
                    <p className={styles.vitoria}>Parabéns! Você venceu!</p>
                </div>
            )}
            {isDerrota && (
                <div>
                    <Image
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png"
                    alt='Snorlax'
                    className={styles.resultadoSprite}
                    width={160}
                    height={160}
                    />
                    <p className={styles.derrota}>Você perdeu! A palavra era: {palavra}</p>
                </div>
            )}
            <button className={styles.reiniciarButton} onClick={iniciarNovoJogo}>
              Reiniciar Jogo
            </button>
          </div>
        ) : (
          <div className={styles.inputContainer}>
            <p>Tentativas restantes: {maxErros - letrasErradas.length}</p>
            <div className={styles.letrasErradas}>
              <p>Letras erradas: {letrasErradas.join(', ')}</p>
            </div>
            <div className={styles.teclado}>
              {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letra => (
                <button
                  key={letra}
                  onClick={() => handleAdivinhar(letra)}
                  disabled={letrasAdivinhadas.includes(letra) || letrasErradas.includes(letra)}
                  className={letrasErradas.includes(letra) ? styles.tecladoLetraErrada : (letrasAdivinhadas.includes(letra) ? styles.tecladoLetraCorreta : styles.tecladoLetra)}
                >
                  {letra}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <Link href="/" className={styles.backButton}>Voltar para o Portfólio</Link>
        <div className={styles.footerSprites}>
            <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Bulbasaur" width={64} height={64} />
            <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" alt="Charmander" width={64} height={64} />
            <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" alt="Squirtle" width={64} height={64} />
            <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="Pikachu" width={64} height={64} />
            <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png" alt="Jigglypuff" width={64} height={64} />
            <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png" alt="Meowth" width={64} height={64} />
            <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png" alt="Psyduck" width={64} height={64} />
            <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png" alt="Eevee" width={64} height={64} />
            <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png" alt="Mewtwo" width={64} height={64} />
            <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png" alt="Mew" width={64} height={64} />
        </div>
    </div>
  );
}

function ForcaDrawing({ erros }) {
  const parts = [
    <circle key="cabeca" cx="50" cy="30" r="15" stroke="#4a4a4a" strokeWidth="2" fill="none" />,
    <line key="tronco" x1="50" y1="45" x2="50" y2="85" stroke="#4a4a4a" strokeWidth="2" />,
    <line key="bracoE" x1="50" y1="50" x2="30" y2="70" stroke="#4a4a4a" strokeWidth="2" />,
    <line key="bracoD" x1="50" y1="50" x2="70" y2="70" stroke="#4a4a4a" strokeWidth="2" />,
    <line key="pernaE" x1="50" y1="85" x2="30" y2="105" stroke="#4a4a4a" strokeWidth="2" />,
    <line key="pernaD" x1="50" y1="85" x2="70" y2="105" stroke="#4a4a4a" strokeWidth="2" />,
  ];

  return (
    <svg height="150" width="100" className={styles.forcaSvg}>
      <line x1="10" y1="140" x2="90" y2="140" stroke="#4a4a4a" strokeWidth="2" />
      <line x1="20" y1="140" x2="20" y2="10" stroke="#4a4a4a" strokeWidth="2" />
      <line x1="20" y1="10" x2="50" y2="10" stroke="#4a4a4a" strokeWidth="2" />
      <line x1="50" y1="10" x2="50" y2="15" stroke="#4a4a4a" strokeWidth="2" />
      {parts.slice(0, erros)}
    </svg>
  );
}