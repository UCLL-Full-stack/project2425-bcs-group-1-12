import React from "react";
import { useRouter } from "next/router";

const GoalDetails: React.FC = () => {
    const router = useRouter();
    const { goalId } = router.query; // Получаем goalId из URL

    // Проверка на "loading" состояние, когда router isFallback
    if (router.isFallback) {
        return <p>Loading...</p>;
    }

    // Если goalId пустой, выводим ошибку
    if (!goalId) {
        return <p>No goal id found in URL. Please check the URL format.</p>;
    }

    return (
        <div style={styles.container}>
            <p>Goal id is: {goalId}</p> {/* Выводим goalId */}
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#121212", // Тёмный фон
        color: "#ffffff", // Светлый текст
        padding: "20px",
    },
};

export default GoalDetails;
