import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"; // Импорт значков

const Our_work: React.FC = () => {
  const styles = {
    container: {
      backgroundColor: "black",
      color: "white",
      textAlign: "center" as const,
      padding: "50px 20px",
      fontFamily: "Inter, sans-serif", // Шрифт Inter
    },
    title: {
      fontSize: "3rem",
      marginBottom: "20px",
    },
    subtitle: {
      fontSize: "1.2rem",
      marginBottom: "40px",
    },
    details: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap" as const,
      gap: "50px",
    },
    item: {
      flex: "1",
      minWidth: "250px",
      maxWidth: "300px",
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "center",
    },
    icon: {
      fontSize: "2.5rem",
      marginBottom: "15px",
      color: "#C2FF9C",
    },
    heading: {
      fontSize: "1.5rem",
      marginBottom: "10px",
    },
    paragraph: {
      fontSize: "1rem",
      lineHeight: "1.5",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contact Us</h1>
      <p style={styles.subtitle}>
        We would love to hear from you. Reach out to us for any inquiries or feedback.
      </p>

      <div style={styles.details}>
        {/* Email Section */}
        <div style={styles.item}>
          <FaEnvelope style={styles.icon} /> {/* Значок Email */}
          <h2 style={styles.heading}>Email</h2>
          <p style={styles.paragraph}>
            We strive to respond to all messages within 24 hours.
          </p>
        </div>

        {/* Phone Section */}
        <div style={styles.item}>
          <FaPhone style={styles.icon} /> {/* Значок Phone */}
          <h2 style={styles.heading}>Phone</h2>
          <p style={styles.paragraph}>Thank you for your support!</p>
          <p style={styles.paragraph}>+123 456 7890</p>
        </div>

        {/* Office Section */}
        <div style={styles.item}>
          <FaMapMarkerAlt style={styles.icon} /> {/* Значок Office */}
          <h2 style={styles.heading}>Office</h2>
          <p style={styles.paragraph}>123 Charity Street, Cityville, Country</p>
        </div>
      </div>
    </div>
  );
};

export default Our_work;
