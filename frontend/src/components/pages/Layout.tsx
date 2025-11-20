// src/components/pages/Layout.tsx
import React from "react";
import Navbar from "./Navbar";
import styles from '../../styles/App.module.scss';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {

  return (

    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
