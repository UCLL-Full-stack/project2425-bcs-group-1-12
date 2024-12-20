import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";
import VolunteerRegistrationForm from "@/components/register";
import UserService from "@/services/UserService";
import React, { useState } from "react";
import Register from "@/components/register";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";


const RegisterPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleRegisterSubmit = async (formData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) => {
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const data = await UserService.addUser(formData);  // Вызываем API
      setSuccessMessage("Registration successful!");  // Если успешно
    } catch (error) {
      //setError(error.message);  // В случае ошибки
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <Register />
      <Footer />
    </div>
  );
};

export const getStaticProps: GetServerSideProps = async (context) => {
  const { locale } = context;
  const currentLocale = locale ?? 'en'; // Если локаль не задана, по умолчанию 'en'

  return {
    props: {
      ...(await serverSideTranslations(currentLocale, ['common'])),
    },
  };
};

export default RegisterPage;