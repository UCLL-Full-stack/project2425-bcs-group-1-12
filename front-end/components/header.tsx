import React, { useState } from "react";
import Link from "next/link"; // Импортируем Link
import Language from "./language/language";
import { useTranslation } from "next-i18next";

const Header: React.FC = () => {
  const { t } = useTranslation();

  const [isDonateHovered, setIsDonateHovered] = useState(false);

  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <Link href="/" style={{ display: "inline-block" }}>
          <img
            src="/logo.png"
            alt="Logo"
            style={{ width: "clamp(60px, 8vw, 80px)" }}
          />
        </Link>
      </div>
      <nav style={styles.nav}>
        <Link href="/" style={styles.navLink}>
          {t('header.nav.home')}
        </Link>
        <Link href="/about" style={styles.navLink}>
          {t('header.nav.about_us')}
        </Link>
        <Link href="/our_work" style={styles.navLink}>
          {t('header.nav.our_work')}
        </Link>
        <Link href="/get_involved" style={styles.navLink}>
          {t('header.nav.get_involved')}
        </Link>
        <Link href="/contact" style={styles.navLink}>
          {t('header.nav.contact_us')}
        </Link>
      </nav>
      <div style={styles.buttons}>
        <button
          style={{
            ...styles.donateButton,
            transform: isDonateHovered ? "scale(1.1)" : "scale(1)",
          }}
          onMouseEnter={() => setIsDonateHovered(true)}
          onMouseLeave={() => setIsDonateHovered(false)}
        >
          <span style={styles.buttonText}>{t('header.buttons.donate')}</span>
          <img src="/heart.png" alt="Heart" style={styles.heartImage} />
        </button>
        <Language />
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    backgroundColor: "black",
    color: "white",
    fontFamily: "Inter, sans-serif",
  } as React.CSSProperties,
  logo: {
    display: "flex",
    alignItems: "center",
  } as React.CSSProperties,
  nav: {
    display: "flex",
    gap: "4vw",
    marginLeft: "20px",
  } as React.CSSProperties,
  navLink: {
    color: "#C2FF9C",
    textDecoration: "none",
    fontSize: "16px",
  } as React.CSSProperties,
  buttons: {
    display: "flex",
    gap: "20px",
    marginLeft: "auto",
  } as React.CSSProperties,
  donateButton: {
    backgroundColor: "#C2FF9C",
    color: "black",
    padding: "10px 15px",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    cursor: "pointer",
    minWidth: "120px",
    transition: "transform 0.3s ease-in-out",
  } as React.CSSProperties,
  heartImage: {
    width: "24px",
    height: "24px",
  } as React.CSSProperties,
  buttonText: {
    display: "inline-block",
    textAlign: "center",
  } as React.CSSProperties,
};

export default Header;
