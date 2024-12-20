// pages/goal/[goalId].tsx

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getGoalById } from "@/services/GoalService"; // API вызов для получения данных цели
import { GetServerSideProps } from "next";
import { styles } from "@/components/GoalDetailsStyle"; // Импортируем стили

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
                <button
                    style={styles.assignButton}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.assignButtonHover.backgroundColor}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = styles.assignButton.backgroundColor}
                    onClick={() => console.log("Assign button clicked")}
                >
                    Assign
                </button>
            </div>
        </main>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    // Серверная логика для передачи данных
    return {
        props: {}, // Пропсы для серверной стороны
    };
};

export default GoalDetails;
