import { useEffect, useState } from 'react';
import PokemonCard from '../shared/PokemonCard';
import NotFoundImg from '../assets/404.svg';


// Página para mostrar 10 Pokémon aleatorios de la Gen3
const Gen3 = () => {
  // Estado para los pokémon y para errores
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Generamos 10 IDs aleatorios únicos de la Gen3 (252-386)
    const ids: number[] = [];
    while (ids.length < 10) {
      const id = Math.floor(Math.random() * (386 - 252 + 1)) + 252;
      if (!ids.includes(id)) ids.push(id);
    }

    // Pedimos los datos de cada Pokémon
    const fetchPokemons = async () => {
      try {
        const arr = [];
        for (const id of ids) {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
          if (!res.ok) throw new Error('Error');
          const data = await res.json();
          arr.push({
            numero: data.id,
            img: data.sprites.front_default,
            imgJuego: data.sprites.front_default,
            imgCvg: data.sprites.front_default,
            nombre: data.name,
            experiencia: data.base_experience,
            hp: data.stats[0].base_stat,
            ataque: data.stats[1].base_stat,
            defensa: data.stats[2].base_stat,
            especial: data.stats[3].base_stat,
          });
        }
        setPokemons(arr);
      } catch {
        setError(true);
      }
    };
    fetchPokemons();
  }, []);

  // Si hay error, mostramos mensaje
  if (error) return <div style={{ textAlign: 'center' }}><img src={NotFoundImg} alt="404" style={{ width: 200 }} /><p>Error al cargar los Pokémon</p></div>;

  // Si aún no hay datos, mostramos "Cargando..."
  if (!pokemons.length) return <p>Cargando...</p>;

  // Mostramos las cartas de Pokémon en fila horizontal
  return (
    <div className="cards-container">
      {pokemons.map(p => <PokemonCard key={p.numero} {...p} />)}
    </div>
  );
};

export default Gen3;
