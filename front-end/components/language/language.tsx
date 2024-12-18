import React from "react";
import { useRouter } from "next/router";

const Language: React.FC = () => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <select
      value={locale}
      onChange={handleLanguageChange}
      style={{
        backgroundColor: "black", // Тёмный фон
        color: "#C2FF9C", // Светлый текст
        border: "2px solid #C2FF9C", // Зелёная граница
        padding: "10px 15px",
        borderRadius: "8px", // Закруглённые углы
        fontSize: "16px",
        cursor: "pointer",
        minWidth: "120px",
        transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
        outline: "none", // Убираем стандартное выделение
      }}
    >
      <option value="en" style={{ backgroundColor: "black", color: "#C2FF9C" }}>English</option>
      <option value="rh" style={{ backgroundColor: "black", color: "#C2FF9C" }}>Rohingya</option>
    </select>
  );
};

export default Language;
