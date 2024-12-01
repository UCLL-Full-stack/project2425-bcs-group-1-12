import React, { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  { question: "What is your mission?", answer: "Lorem ipsum dolor sit amet..." },
  { question: "How can I donate?", answer: "Lorem ipsum dolor sit amet..." },
  { question: "Can I volunteer?", answer: "Lorem ipsum dolor sit amet..." },
  { question: "Where does the money go?", answer: "Lorem ipsum dolor sit amet..." },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // Открыть или закрыть вопрос
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "40px",
        maxWidth: "1200px",
        margin: "0 auto",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "30px", fontSize: "36px" }}>FAQ</h1>
      {faqData.map((item, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <div
            onClick={() => toggleAnswer(index)}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
              padding: "20px",
              borderBottom: "1px solid white",
              width: "100%",
            }}
          >
            <span style={{ fontSize: "20px", flexGrow: 1 }}>{item.question}</span>
            <span style={{ fontSize: "24px", marginLeft: "10px" }}>
              {openIndex === index ? "−" : "+"}
            </span>
          </div>
          {openIndex === index && (
            <p
              style={{
                marginTop: "10px",
                fontSize: "18px",
                lineHeight: "1.8",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              {item.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
