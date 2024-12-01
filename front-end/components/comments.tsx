import React, { useState } from "react";

type Testimonial = {
  name: string;
  role: string;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Dmitry Osipov",
    role: "Site developer",
    text: "I am happy I had an honor to work on this website. Together we can improve lives of other people, and this is the biggest miracle in our life we can do.",
  },
  {
    name: "Matthew Zavalick",
    role: "Organisation cofounder",
    text: "I believe, kindness and cooperating is the most important part of human nature...",
  },
  {
    name: "Abdul",
    role: "RCO cofounder and refugee",
    text: "I am happy I had an honor to work on this website. Together we can improve lives of other people, and this is the biggest miracle in our life we can do.",
  },
  {
    name: "Anyone",
    role: "Donor and volunteer",
    text: "I am happy I had an honor to work on this website. Together we can improve lives of other people, and this is the biggest miracle in our life we can do.",
  },
];

const TestimonialCard: React.FC<Testimonial> = ({ name, role, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyles: React.CSSProperties = {
    backgroundColor: "#A290CE",
    color: "white",
    padding: "20px",
    borderRadius: "6px",
    display: "flex",
    flexDirection: "column", // Explicitly specifying this type
    justifyContent: "center",
    width: "100%",
    maxWidth: "300px",
    transform: isHovered ? "scale(1.1)" : "scale(1)", // Apply scale effect
    transition: "transform 0.3s ease", // Smooth transition
  };

  const headerStyles: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  };

  const nameRoleStyles: React.CSSProperties = {
    margin: "0",
    fontFamily: "Inter, sans-serif",
  };

  return (
    <div
      style={cardStyles}
      onMouseEnter={() => setIsHovered(true)} // Set hover state to true on hover
      onMouseLeave={() => setIsHovered(false)} // Set hover state to false when leaving
    >
      <div style={headerStyles}>
        <div
          style={{
            backgroundColor: "#333",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            marginRight: "10px",
          }}
        ></div>
        <div>
          <h3
            style={{
              ...nameRoleStyles,
              fontSize: "16px",
            }}
          >
            {name}
          </h3>
          <h4
            style={{
              ...nameRoleStyles,
              fontSize: "14px",
            }}
          >
            {role}
          </h4>
        </div>
      </div>
      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "14px",
          lineHeight: "1.5",
        }}
      >
        {text}
      </p>
    </div>
  );
};

const Comments: React.FC = () => (
  <div
    style={{
      backgroundColor: "black",
      color: "white",
      padding: "40px",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <h1
      style={{
        marginBottom: "40px",
        fontFamily: "Inter, sans-serif",
        textAlign: "center",
      }}
    >
      Become a part of team which makes a difference
    </h1>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr", // Two columns
        gap: "6vw", // Space between cards
        justifyItems: "center", // Center-align cards
        maxWidth: "800px", // Maximum width for grid
      }}
    >
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          name={testimonial.name}
          role={testimonial.role}
          text={testimonial.text}
        />
      ))}
    </div>
  </div>
);

export default Comments;
