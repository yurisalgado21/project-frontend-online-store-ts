import React from 'react';
import { Outlet } from 'react-router-dom';
import Logo from '../assets/logo.png';
import styles from './Layout.module.css';

export default function Layout() {
  return (
    <>
      <nav className={ styles.header }>
        <img src={ Logo } alt="Front-end-online-store" />
      </nav>
      <main className={ styles.container }>
        <Outlet />
      </main>
    </>
  );
}
