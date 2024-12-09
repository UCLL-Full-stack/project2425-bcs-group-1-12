import React, { useState } from "react";

const DonationBanner: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    container: {
      position: "relative" as const,
      width: "80%",
      maxWidth: "1200px",
      margin: "20px auto",
      height: "200px",
    },
    background: {
      position: "absolute" as const,
      top: "5px",
      left: "5px",
      width: "100%",
      height: "100%",
      backgroundColor: "#80759A",
      transform: "rotate(0.5deg)",
      borderRadius: "5px",
      zIndex: 0,
    },
    foreground: {
      position: "absolute" as const,
      width: "100%",
      height: "100%",
      backgroundColor: isHovered ? "white" : "#A290CE", // Change background color on hover
      transform: isHovered ? "scale(1.1) rotate(0.5deg)" : "rotate(-1deg)", // Apply transform on hover
      borderRadius: "5px",
      display: "flex",
      flexDirection: "row" as const,
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px",
      zIndex: 1,
      color: isHovered ? "black" : "white", // Change text color on hover
      transition:
        "transform 0.3s ease, background-color 0.3s ease, color 0.3s ease", // Smooth transition for styles
    },
    textContainer: {
      flex: 1,
      maxWidth: "70%",
      transform: "rotate(1deg)", // Slightly rotate the text to compensate for the background tilt
      fontFamily: "Inter, sans-serif",
      //transform: isHovered ? "rotate(0deg)" : "rotate(1deg)",
    },
    heading: {
      fontSize: "1.5rem",
      marginBottom: "10px",
      marginTop: "10px",
      marginLeft: "2rem",
    },
    paragraph: {
      fontSize: "1rem",
      marginBottom: "15px",
      marginLeft: "2rem",
    },
    buttonContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transform: "rotate(1deg)",
      //transform: isHovered ? "rotate(0deg)" : "rotate(1deg)", // Rotate button on hover
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#E57373",
      color: "white",
      fontSize: "1rem",
      fontWeight: "bold" as const,
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#D32F2F",
    },
  };

  return (
    <div style={styles.container}>
      {/* Задний прямоугольник */}
      <div style={styles.background}></div>

      {/* Передний прямоугольник */}
      <div
        style={styles.foreground}
        onMouseEnter={() => setIsHovered(true)} // Set hover state to true on hover
        onMouseLeave={() => setIsHovered(false)} // Set hover state to false when leaving
      >
        {/* Контейнер текста */}
        <div style={styles.textContainer}>
          <h2 style={styles.heading}>
            Help us keep our programs up and running
          </h2>
          <p style={styles.paragraph}>
            we can only continue to provide medical treatment, education, and
            critical infrastructure with your help.
          </p>
        </div>

        {/* Контейнер кнопки */}
        <div style={styles.buttonContainer}>
          <button
            style={styles.button}
            onMouseEnter={(e) => {
              (e.target as HTMLButtonElement).style.backgroundColor =
                styles.buttonHover.backgroundColor;
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.backgroundColor =
                styles.button.backgroundColor;
            }}
          >
            Click here to support
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationBanner;
