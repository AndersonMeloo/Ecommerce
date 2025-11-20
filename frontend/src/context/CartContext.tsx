// src/context/CartContext.tsx
import React, { createContext, useContext, useState } from "react";

interface Produto {
  id: number;
  nome: string;
  preco: number;
}

interface CartContextProps {
  carrinho: Produto[];
  adicionar: (item: Produto) => void;
  remover: (id: number) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {

  const [carrinho, setCarrinho] = useState<Produto[]>([]);

  function adicionar(item: Produto) {
    setCarrinho(prev => [...prev, item]);
  }

  function remover(id: number) {
    setCarrinho(prev => prev.filter(i => i.id !== id));
  }

  return (

    <CartContext.Provider value={{ carrinho, adicionar, remover }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart deve ser usado dentro de CartProvider");
  return context;
}
