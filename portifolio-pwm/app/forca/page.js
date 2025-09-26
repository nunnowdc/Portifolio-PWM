"use client";

import { useState, useEffect } from 'react';
import styles from './forca.module.css';

const pokemon = [
  "Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard",
  "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree",
  "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot",
  "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu",
  "Raichu", "Sandshrew", "Sandslash", "Nidoran♀", "Nidorina", "Nidoqueen",
  "Nidoran♂", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix",
  "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish",
  "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth",
  "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck",
  "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl",
  "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp",
  "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel",
  "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro",
  "Magnemite", "Magneton", "Farfetch’d", "Doduo", "Dodrio", "Seel", "Dewgong",
  "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar",
  "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode",
  "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan",
  "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey",
  "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking",
  "Staryu", "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz",
  "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto",
  "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar",
  "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos",
  "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew"
];

function getPokemonAleatoria() {
  const index = Math.floor(Math.random() * pokemon.length);
  return pokemon[index];
}

export default function JogoDaForca() {
  const [pokemon, setPokemon] = useState('');
  const [letrasAdivinhadas, setLetrasAdivinhadas] = useState([]);
  const [letrasErradas, setLetrasErradas] = useState([]);
  const maxErros = 6;

  useEffect(() => {
    if (pokemon.length > 0) {
      iniciarNovoJogo();
    }
  }, []);

  function iniciarNovoJogo() {
    const novoPokemon = getPokemonAleatoria().toUpperCase();
    setPokemon(novoPokemon);
    setLetrasAdivinhadas([]);
    setLetrasErradas([]);
  }

  function handleAdivinhar(letra) {
    if (letrasAdivinhadas.includes(letra) || letrasErradas.includes(letra)) {
      return;
    }

    if (pokemon.includes(letra)) {
      setLetrasAdivinhadas([...letrasAdivinhadas, letra]);
    } else {
      setLetrasErradas([...letrasErradas, letra]);
    }
  }

  const pokemonExibida = pokemon
    .split('')
    .map(letra => (letrasAdivinhadas.includes(letra) ? letra : '_'))
    .join(' ');

  const isVitoria = pokemon.split('').every(letra => letrasAdivinhadas.includes(letra));
  const isDerrota = letrasErradas.length >= maxErros;
  const jogoTerminado = isVitoria || isDerrota;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Jogo da Forca</h1>
      <div className={styles.jogo}>
        <ForcaDrawing erros={letrasErradas.length} />
        <div className={styles.pokemonContainer}>
          <p className={styles.pokemon}>{pokemonExibida}</p>
        </div>
        {jogoTerminado ? (
          <div>
            {isVitoria && <p className={styles.vitoria}>Parabéns! Você venceu!</p>}
            {isDerrota && <p className={styles.derrota}>Você perdeu! O pokemon era: {pokemon}</p>}
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
    </div>
  );
}

function ForcaDrawing({ erros }) {
  const parts = [
    <circle cx="50" cy="30" r="15" stroke="black" strokeWidth="2" fill="none" />,
    <line x1="50" y1="45" x2="50" y2="85" stroke="black" strokeWidth="2" />,
    <line x1="50" y1="50" x2="30" y2="70" stroke="black" strokeWidth="2" />,
    <line x1="50" y1="50" x2="70" y2="70" stroke="black" strokeWidth="2" />,
    <line x1="50" y1="85" x2="30" y2="105" stroke="black" strokeWidth="2" />,
    <line x1="50" y1="85" x2="70" y2="105" stroke="black" strokeWidth="2" />,
  ];

  return (
    <svg height="150" width="100" className={styles.forcaSvg}>
      <line x1="10" y1="140" x2="90" y2="140" stroke="black" strokeWidth="2" />
      <line x1="20" y1="140" x2="20" y2="10" stroke="black" strokeWidth="2" />
      <line x1="20" y1="10" x2="50" y2="10" stroke="black" strokeWidth="2" />
      <line x1="50" y1="10" x2="50" y2="15" stroke="black" strokeWidth="2" />
      {parts.slice(0, erros)}
    </svg>
  );
}