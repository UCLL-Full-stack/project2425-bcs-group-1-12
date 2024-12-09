import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";

const AboutPage: React.FC = () => {
  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.heroText}>
        <div style={styles.heading}>
          <h1 style={styles.heading}>About Us</h1>
          <div>
            <p>
              The Rohingya Charity Organization is a non profit humanitarian aid
              group dedicated to supporting the Rohingya refugees in Cox's
              Bazar, Bangladesh. We are a non-profit public charity, registered
              in the US. We coordinate our efforts with community led
              initiatives in the camps, striving to dig wells, build shelters,
              educate hundreds of students, and provide funding for essential
              medical aid to countless members of our community.
            </p>
          </div>
          <div>
            <p>
              We are funded entirely by voluntary contributions from kind
              hearted individuals who wish to see a better life for the Rohingya
              people. Our organization was founded out of concern for those
              whose needs are not being met by the institutions available to
              them. We are proud of what we have been able to accomplish in the
              short period of time since our founding, and We will continue
              fighting to give as much as we can to the Rohingya in order to
              help them through these dark and difficult times.
            </p>
          </div>
        </div>
      </div>
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

export default AboutPage;
