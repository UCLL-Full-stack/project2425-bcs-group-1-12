import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import DonationBanner from "./donation-banner";
import Comments from "./comments";
import FAQ from "./faq";
import ImpactSection from "./impact-section";

const HomePage: React.FC = () => {
  // Состояние для активной секции
  const [activeSection, setActiveSection] = useState(0);

  // Данные секций
  const sections = [
    {
      title: "Our mission",
      description:
        "To alleviate the suffering of the Rohingya genocide survivors confined to the world's largest refugee camp in Cox's Bazar, Bangladesh.",
      image: "/our-mission.jpg",
    },
    {
      title: "Our action",
      description:
        "Digging wells, building shelters, paying for medical treatments, and educating children.",
      image: "/our-actions.jpg",
    },
    {
      title: "Get involved",
      description:
        "Help us create a better life for the heavily persecuted Rohingya by supporting our cause.",
      image: "/get-involved.jpg",
    },
  ];

  return (
    <div style={styles.container}>
      <Header />
      {/* Главная секция с текстом и картинкой */}
      <div style={styles.heroSection}>
        <div style={styles.heroImage}>
          <img
            src="/main-home-image.jpg"
            alt="Support Rohingya Refugees"
            style={styles.image}
          />
        </div>
        <div style={styles.heroText}>
          <h1 style={styles.heading}>
            Support Rohingya Refugees in Cox's Bazar, Bangladesh
          </h1>
          <p style={styles.paragraph}>
            Join us in making a difference for the Rohingya by contributing to
            our education, medical treatment, food, shelter, and clean water
            programs.
          </p>
        </div>
      </div>

      <div style={{ width: "100vw", margin: "0 auto" }}>
        <ImpactSection />
      </div>

      {/* Интерактивные секции */}
      <div style={styles.contentSection}>
        <div style={styles.textSection}>
          {sections.map((section, index) => (
            <div
              key={index}
              style={{
                ...styles.section,
                borderLeft:
                  activeSection === index
                    ? "4px solid #fff"
                    : "4px solid transparent",
              }}
              onClick={() => setActiveSection(index)} // Меняем активную секцию
            >
              <h2 style={styles.sectionTitle}>{section.title}</h2>
              <p style={styles.sectionDescription}>{section.description}</p>
            </div>
          ))}
        </div>
        <div style={styles.imageSection}>
          <img
            src={sections[activeSection].image}
            alt={sections[activeSection].title}
            style={styles.image}
          />
        </div>
      </div>
      <DonationBanner />
      <Comments />
      <div style={{ width: "100vw", margin: "0 auto" }}>
        <FAQ />
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "black",
    color: "white",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  } as React.CSSProperties,
  heroSection: {
    display: "flex",
    alignItems: "flex-start",
    padding: "20px",
    flexWrap: "wrap",
  } as React.CSSProperties,
  heroImage: {
    flex: 1,
    marginRight: "20px",
  } as React.CSSProperties,
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  } as React.CSSProperties,
  heroText: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    fontFamily: "Inter, sans-serif",
  } as React.CSSProperties,
  heading: {
    fontSize: "2rem",
    marginBottom: "10px",
    color: "#fff",
  } as React.CSSProperties,
  paragraph: {
    fontSize: "1rem",
    lineHeight: 1.5,
    color: "#aaa",
  } as React.CSSProperties,
  contentSection: {
    display: "flex",
    alignItems: "stretch",
    justifyContent: "center",
    padding: "20px",
    flexGrow: 1,
    maxWidth: "60rem", // Ограничение ширины секции
    margin: "6rem auto", // Центрирование по горизонтали
  } as React.CSSProperties,
  textSection: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    paddingRight: "20px",
  } as React.CSSProperties,
  section: {
    padding: "10px 20px",
    cursor: "pointer",
    transition: "border-left 0.3s ease",
  } as React.CSSProperties,
  sectionTitle: {
    fontSize: "1.5rem",
    color: "#fff",
    marginBottom: "5px",
  } as React.CSSProperties,
  sectionDescription: {
    fontSize: "1rem",
    color: "#aaa",
  } as React.CSSProperties,
  imageSection: {
    width: "24vw",
    height: "41vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  } as React.CSSProperties,
};

export default HomePage;
