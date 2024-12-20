import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getGoalById } from "@/services/GoalService"; // API вызов для получения данных цели
import { GetServerSideProps } from "next";

const GoalDetails: React.FC = () => {
    const router = useRouter();
    const { goalId } = router.query; // Получаем ID цели из URL
    const [goal, setGoal] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchGoalDetails = async (id: string) => {
        try {
            const fetchedGoal = await getGoalById(id);
            setGoal(fetchedGoal);
        } catch (error) {
            console.error("Error fetching goal details:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (goalId) {
            fetchGoalDetails(goalId as string); // Убедитесь, что goalId доступен
        }
    }, [goalId]);

    if (loading)
        return (
            <div style={styles.loading}>
                <p>Loading...</p>
            </div>
        );

    if (!goal)
        return (
            <div style={styles.error}>
                <p>Goal not found.</p>
            </div>
        );

    return (
        <main style={styles.container}>
            <div style={styles.card}>
                <h1 style={styles.title}>{goal.title}</h1>
                <p style={styles.description}>{goal.description}</p>
            </div>
        </main>
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
};

export default GoalDetails;
