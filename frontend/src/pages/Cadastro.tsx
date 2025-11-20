import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from '../styles/App.module.scss';
import { authAPI } from "../services/auth";

export default function Cadastro() {

  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleCadastro() {

    try {

      setLoading(true);
      setError(null);

      const data = await authAPI.signup({
        name: form.name,
        email: form.email,
        password: form.password
      });

      console.log('Cadastro realizado!!:', data);
      alert('Cadastro realizado com sucesso! Faça o login para continuar.');
      navigate('/login');

    } catch (err: any) {

      if (err.message.includes('password')) {
        setError(`Erro em senha: ${err.message}`);

      } else {
        setError(err.message || 'Erro ao cadastrar');
      }

    } finally {
      setLoading(false);
    }
  }

  return (

    <div className={styles.loginContainer}>

      <h1 className={styles.loginTitle}>Cadastro</h1>

      <input
        type="text"
        placeholder="Digite seu nome"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className={styles.loginInput}
      />

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

      <button onClick={handleCadastro} className={styles.loginButton} disabled={loading}>
        {loading ? "Cadastrando..." : "Cadastrar"}
      </button>

      <p>
        Já tem conta? <Link to="/login">Faça login</Link>
      </p>
      
    </div>
  );
}