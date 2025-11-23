import { useCar } from '../context/CarContext';
import styles from '../styles/Perfil.module.scss';

export default function Perfil() {
  const { carrinho } = useCar();

  return (  

    <div className={styles.containerUser}>
      
      <h1>Perfil</h1>
      <h2>Compras realizadas:</h2>

      {carrinho.length === 0 ? <p>Nenhuma compra ainda</p> : (
        <ul>
          {carrinho.map(item => (
            <li key={item.id}>{item.nome} - R$ {item.preco.toFixed(2)}</li>
          ))}
        </ul>
      )}
      
    </div>
  );
}
