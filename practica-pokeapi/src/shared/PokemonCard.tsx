
// Tipos de datos que recibe la tarjeta de Pokémon
export interface PokemonData {
  numero: number;
  img: string;
  imgJuego: string;
  imgCvg: string;
  nombre: string;
  experiencia: number;
  hp: number;
  ataque: number;
  defensa: number;
  especial: number;
}


// Componente para mostrar la tarjeta de un Pokémon
const PokemonCard = ({
  numero,
  img,
  imgJuego,
  imgCvg,
  nombre,
  experiencia,
  hp,
  ataque,
  defensa,
  especial,
}: PokemonData) => (
  <div className="poke-card">
    <h3>Número: {numero} - {nombre}</h3>
    <img src={img} alt={nombre} style={{ width: 120, height: 120 }} />
    {/* Imágenes adicionales del Pokémon */}
    <div style={{ display: 'flex', justifyContent: 'center', gap: 10, margin: '8px 0' }}>
      <img src={imgJuego} alt="sprite" style={{ width: 48, height: 48 }} />
      <img src={imgCvg} alt="dream world" style={{ width: 48, height: 48 }} />
    </div>
    {/* Estadísticas básicas */}
    <p>Exp: {experiencia}</p>
    <p>HP: {hp} | Ataque: {ataque} | Defensa: {defensa} | Esp: {especial}</p>
  </div>
);

export default PokemonCard;
