import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CarItem {
  id: number;
  nome: string;
  preco: number;
  carItemId: string;
}

interface CarContextType {
  carrinho: CarItem[];
  adicionar: (produto: Omit<CarItem, 'carItemId'>) => void;
  remover: (carItemId: string) => void;
}

const CarContext = createContext<CarContextType | undefined>(undefined);

export const CarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  const [carrinho, setCarrinho] = useState<CarItem[]>([]);

  const adicionar = (produto: Omit<CarItem, 'carItemId'>) => {
    const novoItem: CarItem = {
      ...produto,
      carItemId: `${produto.id}-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
    };
    setCarrinho(prev => [...prev, novoItem]);
  };

  const remover = (carItemId: string) => {
    setCarrinho(prev => prev.filter(item => item.carItemId !== carItemId));
  };

  return (
    
    <CarContext.Provider value={{ carrinho, adicionar, remover }}>
      {children}
    </CarContext.Provider>
  );
};

export const useCar = () => {

  const context = useContext(CarContext);

  if (!context) {
    throw new Error('useCar deve ser usado dentro de um CarProvider');
  }
  return context;
};