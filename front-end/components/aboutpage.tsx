import React from "react";
import Header from "./header";
import Footer from "./footer";

const AboutPage: React.FC = () => {
  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.contentSection}>
        <div style={styles.textSection}>
          <h1 style={styles.heading}>About Us</h1>
          <p style={styles.paragraph}>
            The Rohingya Charity Organization is a non-profit humanitarian aid
            group dedicated to supporting the Rohingya refugees in Cox's Bazar,
            Bangladesh. We are a non-profit public charity, registered in the
            US. We coordinate our efforts with community-led initiatives in the
            camps, striving to dig wells, build shelters, educate hundreds of
            students, and provide funding for essential medical aid to countless
            members of our community.
          </p>
          <p style={styles.paragraph}>
            We are funded entirely by voluntary contributions from kind-hearted
            individuals who wish to see a better life for the Rohingya people.
            Our organization was founded out of concern for those whose needs
            are not being met by the institutions available to them. We are
            proud of what we have been able to accomplish in the short period of
            time since our founding, and we will continue fighting to give as
            much as we can to the Rohingya in order to help them through these
            dark and difficult times.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#0b0c10", // Dark background color
    color: "white",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Inter, sans-serif", // Consistent font for a modern look
  } as React.CSSProperties,
  contentSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "2rem",
    flexGrow: 1,
    margin: "6rem auto",
    maxWidth: "60rem", // Centered content section
  } as React.CSSProperties,
  textSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "2rem",
  } as React.CSSProperties,
  heading: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
    color: "#ffffff", // White text for the heading
  } as React.CSSProperties,
  paragraph: {
    fontSize: "1.2rem",
    lineHeight: 1.6,
    color: "#ddd", // Lighter color for text
    marginBottom: "1.5rem", // Space between paragraphs
  } as React.CSSProperties,
  footer: {
    backgroundColor: "#1f2833", // Dark footer for a clean look
    padding: "1.5rem",
    textAlign: "center",
    color: "#bbb", // Light gray color for footer text
  } as React.CSSProperties,
};

export default AboutPage;
