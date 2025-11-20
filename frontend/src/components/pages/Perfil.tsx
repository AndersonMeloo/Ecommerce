// src/components/pages/Perfil.tsx
import React from "react";
import { useCart } from '../../context/CartContext';

export default function Perfil() {
  const { carrinho } = useCart();

  return (

    <div>
      
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
