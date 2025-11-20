// src/components/pages/Home.tsx
import React from "react";
import styles from '../styles/App.module.scss';
import { useCart } from '../context/CartContext';

const produtos = [
  { id: 1, nome: "Produto A", preco: 49.9 },
  { id: 2, nome: "Produto B", preco: 79.9 },
  { id: 3, nome: "Produto C", preco: 120.0 },
];

export default function Home() {

  const { adicionar } = useCart();

  return (

    <div className={styles.grid}>

      {produtos.map(p => (

        <div key={p.id} className={styles.card}>
          <h2>{p.nome}</h2>
          <p>R$ {p.preco.toFixed(2)}</p>
          <button className={styles.addButton} onClick={() => adicionar(p)}>
            Adicionar ao carrinho
          </button>
        </div>
        
      ))}
      
    </div>
  );
}
