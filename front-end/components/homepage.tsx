import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';

const HomePage: React.FC = () => {
  // Состояние для активной секции
  const [activeSection, setActiveSection] = useState(0);

  // Данные секций
  const sections = [
    {
      title: 'Our action',
      description: 'Together, we are helping Rohingya refugees access education, medical care and clean water.',
      image: '/our-actions.jpg',
    },
    {
      title: 'Our mission',
      description: 'Empowering Rohingya refugees to rebuild their lives and communities .',
      image: '/our-mission.jpg',
    },
    {
      title: 'Get involved',
      description: 'Support our cause and make a positive impact in the lives of Rohingya refugees. ',
      image: '/get-involved.jpg',
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
          <h1 style={styles.heading}>Support Rohingya Refugees in Cox's Bazar, Bangladesh</h1>
          <p style={styles.paragraph}>
            Join us in making a difference by providing education, medical treatment, food, shelter, and clean water to Rohingya refugees.
          </p>
        </div>
      </div>

      {/* Интерактивные секции */}
      <div style={styles.contentSection}>
        <div style={styles.textSection}>
          {sections.map((section, index) => (
            <div
              key={index}
              style={{
                ...styles.section,
                borderLeft: activeSection === index ? '4px solid #fff' : '4px solid transparent',
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
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: 'black',
    color: 'white',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  } as React.CSSProperties,
  heroSection: {
    display: 'flex',
    alignItems: 'flex-start',
    padding: '20px',
    flexWrap: 'wrap',
  } as React.CSSProperties,
  heroImage: {
    flex: 1,
    marginRight: '20px',
  } as React.CSSProperties,
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  } as React.CSSProperties,
  heroText: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  } as React.CSSProperties,
  heading: {
    fontSize: '2rem',
    marginBottom: '10px',
    color: '#fff',
  } as React.CSSProperties,
  paragraph: {
    fontSize: '1rem',
    lineHeight: 1.5,
    color: '#aaa',
  } as React.CSSProperties,
  contentSection: {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    padding: '20px',
    flexGrow: 1,
  } as React.CSSProperties,
  textSection: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingRight: '20px',
  } as React.CSSProperties,
  section: {
    padding: '10px 20px',
    cursor: 'pointer',
    transition: 'border-left 0.3s ease',
  } as React.CSSProperties,
  sectionTitle: {
    fontSize: '1.5rem',
    color: '#fff',
    marginBottom: '5px',
  } as React.CSSProperties,
  sectionDescription: {
    fontSize: '1rem',
    color: '#aaa',
  } as React.CSSProperties,
  imageSection: {
    width: "30vw",
    height: "51vh",
    
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  } as React.CSSProperties,
};

export default HomePage;
