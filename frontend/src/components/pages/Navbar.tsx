// src/components/pages/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import styles from '../../styles/App.module.scss';
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  const { carrinho } = useCart();

  return (

    <nav className={styles.navbar}>

      <Link to="/" className={styles.logo}>E-Commerce</Link>

      <div className={styles.containerLinks}> 
        <Link to="/carrinho" className={styles.navButton}>
           Carrinho ({carrinho.length}) <ShoppingCart />
        </Link>
        <Link to="/perfil" className={styles.navButton}>Perfil</Link>
      </div>

    </nav>
  );
}
