import React, { useState } from "react";

// Добавляем импорт функции для добавления пользователя
import { addUser } from '../services/UserService'; // Убедитесь, что путь к файлу api правильный

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const newUser = await addUser({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      });

      // Успешная регистрация
      setSuccess(true);
      setError(null);
      console.log("User added successfully:", newUser);

      // Очистить форму
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

    } catch (error: any) {
      setError(error.message); // Показать ошибку, если что-то пошло не так
      setSuccess(false);
    }
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
        
        {/* Показываем сообщение об ошибке или успехе */}
        {error && <p style={styles.errorText}>{error}</p>}
        {success && <p style={styles.successText}>User registered successfully!</p>}

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
    display: "flex",
    height: "100vh",
    backgroundColor: "black",
    color: "#C2FF9C",
  } as React.CSSProperties,

  leftPanel: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  } as React.CSSProperties,

  image: {
    width: "100%",
    maxWidth: "600px",
    height: "auto",
    borderRadius: "8px",
  } as React.CSSProperties,

  formContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
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
    color: "#C2FF9C",
  } as React.CSSProperties,

  input: {
    width: "100%",
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "4px",
    border: "2px solid #C2FF9C",
    backgroundColor: "#222",
    color: "#C2FF9C",
    outline: "none",
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

  errorText: {
    color: "red",
    marginBottom: "20px",
  } as React.CSSProperties,

  successText: {
    color: "green",
    marginBottom: "20px",
  } as React.CSSProperties,
};

export default Register;
