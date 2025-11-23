import { useCar } from '../context/CarContext';
import styles from '../styles/App.module.scss';

export default function Carrinho() {

  const { carrinho, remover } = useCar();

  const total = carrinho.reduce((acc, item) => acc + item.preco, 0);

  return (

    <div className={styles.containerCarrinho}>

      <h1>Carrinho</h1>

      {carrinho.map(item => (

        <div key={item.carItemId} className={styles.containerCartItems}>
          
          <span>{item.nome} - R$ {item.preco.toFixed(2)}</span>
          <button
            className={styles.removeButton}
            onClick={() => remover(item.carItemId)}
          >
            Remover
          </button>
        </div>
        
      ))}

      <h2>Total: R$ {total.toFixed(2)}</h2>

    </div>
  );
}