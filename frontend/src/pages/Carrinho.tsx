// src/components/pages/Carrinho.tsx
import React from "react";
import styles from '../styles/App.module.scss';
import { useCart } from '../context/CartContext';

export default function Carrinho() {

  const { carrinho, remover } = useCart();

  const total = carrinho.reduce((acc, i) => acc + i.preco, 0);

  return (

    <div>

      <h1>Carrinho</h1>

      {carrinho.map(item => (

        <div key={item.id} className={styles.cartItem}>
          <span>{item.nome} - R$ {item.preco.toFixed(2)}</span>
          <button className={styles.removeButton} onClick={() => remover(item.id)}>
            Remover
          </button>
        </div>
        
      ))}

      <h2>Total: R$ {total.toFixed(2)}</h2>

    </div>
  );
}
