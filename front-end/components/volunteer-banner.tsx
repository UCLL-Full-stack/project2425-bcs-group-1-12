import React, { useState } from "react";

const VolunteerBanner: React.FC = () => {
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
      display: "flex", // Ensure that the link behaves like a block element within the button
      justifyContent: "center", // Center the text inside the button
      alignItems: "center", // Align text vertically
    },
    buttonHover: {
      backgroundColor: "#D32F2F",
    },
    link: {
      color: "inherit", // Inherit color from the button
      textDecoration: "none", // Remove underline from link
      display: "block", // Make the link take the whole button area
      width: "100%", // Ensure it fills the button container
      height: "100%", // Ensure it fills the button container
      padding: "10px 20px", // Match the button's padding
      backgroundColor: "inherit", // Inherit background color from button
      borderRadius: "5px", // Match the button's border radius
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
            Become a volunteer
          </h2>
          <p style={styles.paragraph}>
            Participate in programs to help Rogingya people.
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
            <a href="/register" style={styles.link}>
              Become a volunteer
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VolunteerBanner;
