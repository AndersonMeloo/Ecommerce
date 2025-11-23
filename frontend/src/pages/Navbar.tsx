import { Link, useNavigate } from "react-router-dom";
import { useCar } from "../context/CarContext";
import styles from '../styles/NavBar.module.scss';
import { ShoppingCart, LogOut } from "lucide-react";

export default function Navbar() {

  const { carrinho } = useCar();
  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    
    navigate("/login");
  };

  return (

    <nav className={styles.containerNavBar}>

      <Link to="/home" className={styles.logo}>Controle de Pagamentos</Link>

      <div className={styles.containerLinksNavBar}> 
        <Link to="/carrinho" className={styles.navButton}>
          Carrinho ({carrinho.length}) <ShoppingCart />
        </Link>

        <Link to="/perfil" className={styles.navButton}>Perfil</Link>
        
        <button 
          onClick={handleLogout} 
          className={styles.buttonLogout}
          title="Sair"
        >
          <LogOut size={20} />
        </button>
      </div>
      
    </nav>
  );
}