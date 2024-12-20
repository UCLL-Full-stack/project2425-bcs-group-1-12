import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email.trim()) {
      alert("Subscription successfully set up!");
      setEmail(""); // Сбрасываем поле ввода
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <footer
      style={{
        backgroundColor: "#000",
        color: "#C2FF9C",
        padding: "40px 20px",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Newsletter Section */}
        <div style={{ flex: 1, marginRight: "20px", textAlign: "left" }}>
          <h3 style={{ marginBottom: "4vh" }}>{t('footer.newsletter')}</h3>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="real.hero@gmail.com"
              style={{
                padding: "10px",
                backgroundColor: "#222",
                border: "2px solid #C2FF9C",
                borderRadius: "5px",
                color: "#C2FF9C",
                outline: "none",
                flex: 1,
                marginRight: "10px",
                fontSize: "14px",
              }}
            />
            <button
              onClick={handleSubscribe}
              style={{
                backgroundColor: "red",
                color: "#fff",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              {t('footer.button')}
            </button>
          </div>
        </div>

        {/* About Us Section */}
        <div
          style={{
            flex: 1,
            textAlign: "left",
            marginBottom: "20px",
            marginLeft: "13vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <h3 style={{ marginBottom: "4vh" }}>{t('footer.about_us')}</h3>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              lineHeight: "2em",
            }}
          >
            <li>
              <Link href="/tools">
                <span style={{ color: "#C2FF9C", textDecoration: "none" }}>
                  {t('footer.tools')}
                </span>
              </Link>
            </li>
            <li>
              <Link href="/volunteer">
                <span style={{ color: "#C2FF9C", textDecoration: "none" }}>
                  {t('footer.volunteer')}
                </span>
              </Link>
            </li>
            <li>
              <Link href="/login">
                <span style={{ color: "#C2FF9C", textDecoration: "none" }}>
                  {t('footer.terms_of_services')}
                </span>
              </Link>
            </li>
            <li>
              <Link href="#privacy">
                <span style={{ color: "#C2FF9C", textDecoration: "none" }}>
                  {t('footer.privacy_policy')}
                </span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div style={{ flex: 1, marginLeft: "20px", textAlign: "right" }}>
          <h3 style={{ marginBottom: "4vh" }}>{t('footer.follow_us')}</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              alignItems: "flex-end",
              marginRight: "4vw",
            }}
          >
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/twitter.png"
                alt={t('footer.twitter')}
                style={{ width: "30px", height: "30px" }}
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/linked-in.png"
                alt={t('footer.linkedin')}
                style={{ width: "30px", height: "30px" }}
              />
            </a>
          </div>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: "3vw" }}
          >
            <img
              src="/youtube.png"
              alt={t('footer.youtube')}
              style={{ width: "47px", height: "30px", marginTop: "10px" }}
            />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <p>{t('footer.copyright')}</p>
      </div>
    </footer>
  );
};

export default Footer;
