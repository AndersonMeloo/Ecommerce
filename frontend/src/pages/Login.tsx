import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from '../styles/App.module.scss';
import { authAPI } from "../services/auth"; 

export default function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleLogin() {

    setError(null);
    setLoading(true);

    try {
      
      const data = await authAPI.login({
        email: form.email,
        password: form.password
      });

      localStorage.setItem("token", data.token);
      localStorage.setItem("name", data.user.name);
      localStorage.setItem("email", data.user.email);

      navigate("/home");

    } catch (err: any) {
     
      setError(err.message || "Erro em entrar");

    } finally {

      setLoading(false);
    }
  }

  return (

    <div className={styles.loginContainer}>

      <h1 className={styles.loginTitle}>Login</h1>

      <input
        type="email"
        placeholder="Digite seu e-mail"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className={styles.loginInput}
      />

      <input
        type="password"
        placeholder="Digite sua senha"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        className={styles.loginInput}
      />

      {error && <p className={styles.loginError}>{error}</p>}

      <button onClick={handleLogin} className={styles.loginButton} disabled={loading}>
        {loading ? "Entrando..." : "Entrar"}
      </button>

      <p>
        Não tem conta? <Link to="/cadastro">Cadastre-se</Link>
      </p>
      
    </div>
  );
}