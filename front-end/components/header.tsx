// components/Header.tsx

import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <img src="/logo.png" alt="Logo" style={{ width: 'clamp(60px, 8vw, 80px)' }} />
      </div>
      <nav style={styles.nav}>
        <a href="#home" style={styles.navLink}>Home</a>
        <a href="#about" style={styles.navLink}>About us</a>
        <a href="#work" style={styles.navLink}>Our work</a>
        <a href="#get-involved" style={styles.navLink}>Get involved</a>
        <a href="#contact" style={styles.navLink}>Contact us</a>
      </nav>
      <div style={styles.buttons}>
        <button style={styles.donateButton}>
          <span style={styles.buttonText}>Donate</span>
          <img src="/heart.png" alt="Heart" style={styles.heartImage} />
        </button>
        <button style={styles.loginButton}>Login</button>
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    backgroundColor: 'black',
    color: 'white',
    fontFamily: 'Inter, sans-serif',
  } as React.CSSProperties,
  logo: {
    display: 'flex',
    alignItems: 'center',
  } as React.CSSProperties,
  nav: {
    display: 'flex',
    gap: '4vw',
    marginLeft: '20px',
  } as React.CSSProperties,
  navLink: {
    color: '#C2FF9C',
    textDecoration: 'none',
    fontSize: '16px',
  } as React.CSSProperties,
  buttons: {
    display: 'flex',
    gap: '20px',
    marginLeft: 'auto',
  } as React.CSSProperties,
  donateButton: {
    backgroundColor: '#C2FF9C',
    color: 'black',
    padding: '10px 15px', // Уменьшенная ширина
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    cursor: 'pointer',
    minWidth: '120px', // Уменьшенная минимальная ширина кнопки
  } as React.CSSProperties,
  heartImage: {
    width: '24px',
    height: '24px',
  } as React.CSSProperties,
  buttonText: {
    display: 'inline-block',
    textAlign: 'center',
  } as React.CSSProperties,
  loginButton: {
    backgroundColor: 'transparent',
    color: '#C2FF9C',
    border: '2px solid #C2FF9C',
    padding: '10px 15px', // Уменьшенная ширина
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    minWidth: '120px', // Уменьшенная минимальная ширина кнопки
  } as React.CSSProperties,
};

export default Header;
