import React, { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "How are you helping Rohingya in the camps?",
    answer: `Early on our main focus was digging new wells 
    in places where wells were either broken or missing. To date we have built a total of 13 wells, 
    supplying thousands with clean drinking water. \n\n Since those early days, we have expanded into education as well.
    We've built 4 learning centers, where we teach 177 Rohingya children important skills such as reading, writing, math, 
    and Burmese.\n\n We have also always done what we can to help our community with the many healt problems facing them.
    the conditions in the camp`,
  },
  { question: "How can I donate?", answer: "Lorem ipsum dolor sit amet..." },
  { question: "Can I volunteer?", answer: "Lorem ipsum dolor sit amet..." },
  {
    question: "Where does the money go?",
    answer: "Lorem ipsum dolor sit amet...",
  },
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
      <h1
        style={{ textAlign: "center", marginBottom: "30px", fontSize: "36px" }}
      >
        FAQ
      </h1>
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
            <span style={{ fontSize: "20px", flexGrow: 1 }}>
              {item.question}
            </span>
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
