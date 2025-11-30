
import { useEffect, useState } from 'react';
import NotFoundImg from '../assets/404.svg';


// Página para mostrar 10 Digimon aleatorios
const Digimon = () => {
  // Estado para los digimon y para errores
  const [digimons, setDigimons] = useState<any[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Pedimos todos los Digimon y seleccionamos 10 aleatorios únicos
    const fetchDigimons = async () => {
      try {
        const res = await fetch('https://digi-api.com/api/v1/digimon?pageSize=1000');
        if (!res.ok) throw new Error('Error');
        const data = await res.json();
        const all = data.content;
        const ids: number[] = [];
        while (ids.length < 10) {
          const id = Math.floor(Math.random() * all.length);
          if (!ids.includes(id)) ids.push(id);
        }
        setDigimons(ids.map(i => all[i]));
      } catch {
        setError(true);
      }
    };
    fetchDigimons();
  }, []);

  // Si hay error, mostramos mensaje
  if (error) return <div style={{ textAlign: 'center' }}><img src={NotFoundImg} alt="404" style={{ width: 200 }} /><p>Error al cargar los Digimon</p></div>;

  // Si aún no hay datos, mostramos "Cargando..."
  if (!digimons.length) return <p>Cargando...</p>;

  // Mostramos las cartas de Digimon en fila horizontal
  return (
    <div className="cards-container">
      {digimons.map(d => (
        <div className="poke-card" key={d.id}>
          <h3>{d.name}</h3>
          <img src={d.image} alt={d.name} style={{ width: 120 }} />
        </div>
      ))}
    </div>
  );
};

export default Digimon;
