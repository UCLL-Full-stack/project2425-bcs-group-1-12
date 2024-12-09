import React from "react";

const ImpactSection: React.FC = () => {
  return (
    <section style={styles.stats}>
      <h2 style={styles.statsTitle}>Our impact</h2>
      <div style={styles.statsContainer}>
        <div style={styles.stat}>
          <span style={styles.statValue}>177</span>
          <span style={styles.statLabel}>
            Students enrolled in our education programs
          </span>
        </div>
        <div style={styles.stat}>
          <span style={styles.statValue}>70</span>
          <span style={styles.statLabel}>Medical procedures paid for</span>
        </div>
        <div style={styles.stat}>
          <span style={styles.statValue}>13</span>
          <span style={styles.statLabel}>Wells dug</span>
        </div>
      </div>
    </section>
  );
};

const styles = {
  stats: {
    backgroundColor: "#000", // Черный фон
    color: "#fff", // Белый текст
    textAlign: "center",
    padding: "40px 20px",
    fontFamily: "Inter, sans-serif",
    width: "70%", // Устанавливаем ширину на 70% от экрана
    margin: "0 auto", // Центрируем блок на странице
  } as React.CSSProperties,
  statsTitle: {
    fontSize: "2rem",
    marginBottom: "30px", // Увеличиваем расстояние под заголовком
    color: "#C2FF9C", // Зеленый цвет
  } as React.CSSProperties,
  statsContainer: {
    display: "flex",
    justifyContent: "space-between", // Изменено с 'center' на 'space-between' для увеличения расстояния
    gap: "60px", // Увеличиваем расстояние между блоками
  } as React.CSSProperties,
  stat: {
    textAlign: "center",
  } as React.CSSProperties,
  statValue: {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#C2FF9C", // Цвет значений
    display: "block",
    marginBottom: "10px",
  } as React.CSSProperties,
  statLabel: {
    fontSize: "1rem",
    color: "#fff", // Белый текст
  } as React.CSSProperties,
};

export default ImpactSection;
