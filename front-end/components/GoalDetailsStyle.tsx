// components/GoalDetailsStyles.tsx

import React from 'react';

export const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#121212", // Тёмный фон
        color: "#ffffff", // Светлый текст
        padding: "20px",
    },
    card: {
        maxWidth: "600px",
        width: "100%",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "#1e1e1e", // Чуть светлее для карточки
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
        textAlign: "center" as "center",
    },
    title: {
        fontSize: "2em",
        fontWeight: "bold",
        marginBottom: "20px",
    },
    description: {
        fontSize: "1.2em",
        color: "#ccc",
    },
    loading: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#121212",
        color: "#ffffff",
    },
    error: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#121212",
        color: "#ff4c4c", // Красный текст для ошибки
    },
    assignButton: {
        marginTop: "20px",
        padding: "10px 20px",
        backgroundColor: "#4CAF50", // Зеленая кнопка
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "1.2em",
    },
    assignButtonHover: {
        backgroundColor: "#45a049",
    },
};
