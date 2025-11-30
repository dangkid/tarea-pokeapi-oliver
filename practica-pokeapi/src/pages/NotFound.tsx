
// Página para mostrar error 404 si la ruta no existe
import NotFoundImg from '../assets/404.svg';

const NotFound = () => (
  <div style={{ textAlign: 'center', marginTop: 40 }}>
    <img src={NotFoundImg} alt="404 No encontrado" style={{ width: 200 }} />
    <h2>Página no encontrada</h2>
  </div>
);

export default NotFound;
