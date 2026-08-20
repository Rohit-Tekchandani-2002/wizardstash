import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import styles from './Layout.module.css';

export default function Layout() {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <div className={styles.container}>
          <NavLink to="/tools" className={styles.brand} aria-label="Tools home">
            <span className={styles.brandMark}>C</span>
            <span>Tools</span>
          </NavLink>
          <nav className={styles.nav} aria-label="Main navigation">
            <NavLink
              to="/tools"
              className={({isActive}) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }>
              Tools
            </NavLink>
            <NavLink
              to="/categories"
              className={({isActive}) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }>
              Categories
            </NavLink>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <div className={styles.container + ' ' + styles.footerRow}>
          <div className={styles.brand}>
            <span className={styles.brandMark}>C</span>
            <span>Tools</span>
          </div>
          <div className={styles.footerLinks}>
            <NavLink to="/tools">All tools</NavLink>
            <NavLink to="/categories">Categories</NavLink>
          </div>
        </div>
      </footer>
    </div>
  );
}
