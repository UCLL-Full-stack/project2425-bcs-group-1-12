import React, { useState } from "react";

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log(formData); // Здесь будет обработка отправки формы
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftPanel}>
        <img
          src="/volunteer.jpg" // Замените на URL изображения
          alt="Image"
          style={styles.image}
        />
      </div>

      <div style={styles.formContainer}>
        <h1 style={styles.heading}>Register</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="firstName" style={styles.label}>
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              style={styles.input}
              required
              placeholder="Enter your first name"
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="lastName" style={styles.label}>
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              style={styles.input}
              required
              placeholder="Enter your last name"
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
              placeholder="Enter your email"
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
              required
              placeholder="Enter your password"
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="confirmPassword" style={styles.label}>
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              style={styles.input}
              required
              placeholder="Confirm your password"
            />
          </div>

          <button type="submit" style={styles.submitButton}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",            // Используем flexbox для разделения экрана
    height: "100vh",            // Занимает всю высоту экрана
    backgroundColor: "black",  // Чёрный фон
    color: "#C2FF9C",           // Ярко-зелёный текст
  } as React.CSSProperties,

  leftPanel: {
    flex: 1,                   // Левая панель займет 50% пространства
    display: "flex",            // Для центрирования изображения
    justifyContent: "center",   // Центрирование по горизонтали
    alignItems: "center",       // Центрирование по вертикали
    backgroundColor: "black",   // Темный фон
  } as React.CSSProperties,

  image: {
    width: "100%",              // Ширина изображения — 100% от контейнера
    maxWidth: "600px",          // Максимальная ширина изображения
    height: "auto", 
    borderRadius: "8px"            // Автоматическая высота
  } as React.CSSProperties,

  formContainer: {
    flex: 1,                   // Правая панель займет остальное пространство
    backgroundColor: "rgba(0, 0, 0, 0.8)", // Темный фон для формы
    padding: "40px",
    borderRadius: "8px",
    maxWidth: "500px",
    margin: "auto",
    boxSizing: "border-box",
    textAlign: "center",
  } as React.CSSProperties,

  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
  } as React.CSSProperties,

  form: {
    display: "flex",
    flexDirection: "column",
  } as React.CSSProperties,

  inputGroup: {
    marginBottom: "20px",
  } as React.CSSProperties,

  label: {
    display: "block",
    fontSize: "1rem",
    marginBottom: "5px",
    color: "#C2FF9C", // Ярко-зелёный цвет для меток
  } as React.CSSProperties,

  input: {
    width: "100%",
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "4px",
    border: "2px solid #C2FF9C",  // Ярко-зелёная граница
    backgroundColor: "#222",      // Чёрный фон для полей
    color: "#C2FF9C",             // Ярко-зелёный текст
    outline: "none",              // Убираем обводку по умолчанию
  } as React.CSSProperties,

  submitButton: {
    padding: "12px",
    fontSize: "1.2rem",
    color: "white",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  } as React.CSSProperties,
};

export default Register;
