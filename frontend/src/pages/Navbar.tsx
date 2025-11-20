// src/components/pages/Navbar.tsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import styles from '../styles/App.module.scss';
import { ShoppingCart, LogOut } from "lucide-react";

export default function Navbar() {

  const { carrinho } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    
    navigate("/login");
  };

  return (

    <nav className={styles.navbar}>

      <Link to="/home" className={styles.logo}>Controle de Pagamentos</Link>

      <div className={styles.containerLinks}> 
        <Link to="/carrinho" className={styles.navButton}>
          Carrinho ({carrinho.length}) <ShoppingCart />
        </Link>

        <Link to="/perfil" className={styles.navButton}>Perfil</Link>
        
        <button 
          onClick={handleLogout} 
          className={styles.logoutButton}
          title="Sair"
        >
          <LogOut size={20} />
        </button>
      </div>
      
    </nav>
  );
}