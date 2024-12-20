import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingHeart, faHandsHelping, faBullhorn } from "@fortawesome/free-solid-svg-icons";
import VolunteerBanner from "@/components/volunteer-banner";
const GetInvolved: React.FC = () => {
  const styles = {
    container: {
      backgroundColor: "black", // Чёрный фон
      color: "white", // Белый текст
      minHeight: "100vh",
      padding: "50px 20px",
      fontFamily: "Inter, sans-serif",
      textAlign: "center" as const,
    },
    title: {
      fontSize: "3rem",
      marginBottom: "20px",
      color: "#ffffff",
    },
    subtitle: {
      fontSize: "1.2rem",
      marginBottom: "40px",
      maxWidth: "600px",
      margin: "0 auto 40px",
      lineHeight: "1.6",
      color: "#e0e0e0",
    },
    sections: {
      display: "flex",
      flexDirection: "column" as const,
      gap: "40px",
      alignItems: "center",
    },
    section: {
      maxWidth: "800px",
      textAlign: "center" as const,
      backgroundColor: "#1E1E1E", // Тёмно-серый блок
      padding: "30px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
      color: "#e0e0e0",
    },
    icon: {
      fontSize: "3rem",
      color: "#C2FF9C", // Акцентный цвет
      marginBottom: "20px",
    },
    heading: {
      fontSize: "1.8rem",
      marginBottom: "15px",
      color: "#00bcd4",
    },
    paragraph: {
      fontSize: "1rem",
      lineHeight: "1.8",
    },
  };

  return (
    <div style={styles.container}>
      {/* Основной заголовок */}
      <h1 style={styles.title}>Get Involved</h1>
      <p style={styles.subtitle}>
        Join us in supporting the Rohingya community. Whether through donations,
        volunteering, or spreading awareness, every action makes a difference.
      </p>

      {/* Разделы участия */}
      <div style={styles.sections}>
        {/* 1. Donate */}
        <div style={styles.section}>
          <FontAwesomeIcon icon={faHandHoldingHeart} style={styles.icon} />
          <h2 style={styles.heading}>Make a Donation</h2>
          <p style={styles.paragraph}>
            Your contributions help provide essential resources, education, and
            healthcare to those in need. Every penny counts towards building a
            brighter future for the Rohingya community.
          </p>
        </div>

        {/* 2. Volunteer */}
        <div style={styles.section}>
          <FontAwesomeIcon icon={faHandsHelping} style={styles.icon} />
          <h2 style={styles.heading}>Become a Volunteer</h2>
          <p style={styles.paragraph}>
            Join our team of dedicated volunteers. Whether you have skills in
            teaching, healthcare, or organizing events, your time and effort
            will bring hope and relief to those who need it most.
          </p>
        </div>

        {/* 3. Spread Awareness */}
        <div style={styles.section}>
          <FontAwesomeIcon icon={faBullhorn} style={styles.icon} />
          <h2 style={styles.heading}>Spread Awareness</h2>
          <p style={styles.paragraph}>
            Share the stories of the Rohingya people with your community. Follow
            us on social media, attend events, and help amplify their voices to
            inspire change.
          </p>
        </div>
      </div>
      <div style={{ textAlign: "left", paddingLeft: "20px" }}>
            <VolunteerBanner />
        </div>
    </div>
  );
};

export default GetInvolved;
