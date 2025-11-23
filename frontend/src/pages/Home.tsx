import styles from '../styles/Produtos.module.scss';
import { useCar } from '../context/CarContext';

const cars = [
  {
    id: 1,
    nome: "Golf GTI",
    preco: 120.000,
  },
  {
    id: 2,
    nome: "Jetta GLI",
    preco: 200.000,
  },
  {
    id: 3,
    nome: "Audi A3",
    preco: 80.00,
  }
];

export default function Home() {

  const { adicionar } = useCar();

  return (

    <div className={styles.products}>
      {cars.map(p => (

        <div key={p.id} className={styles.productsCard}>
          <h2>{p.nome}</h2>
          <p>R$ {p.preco.toFixed(2)}</p>
          <button className={styles.productsButton} onClick={() => adicionar(p)}>
            Adicionar ao carrinho
          </button>
        </div>

      ))}
    </div>
  );
}
