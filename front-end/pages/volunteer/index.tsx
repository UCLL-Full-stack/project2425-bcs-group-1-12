import Header from "@/components/header";
import Footer from "@/components/footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";
import Head from 'next/head';
import { getAllReports }  from '../../services/ReportService';
import { getAllGoals } from "@/services/GoalService";
import ReportOverviewTable from '../../components/ReportOverviewTable';
import React, { useState, useEffect } from 'react';
import GoalOverviewCards from "@/components/GoalOverviewCards";


const Home: React.FC = () => {
    
    const [goals, setGoals] = useState<any[]>([]);

    

    const fetchGoals = async () => {
        try {
          const fetchedGoals = await getAllGoals(); // Вызов сервиса для целей
          setGoals(fetchedGoals);
        } catch (error) {
          console.error("Error fetching goals:", error);
        }
      };
  
    useEffect(() => {
      
      fetchGoals();
    }, []);
  
    return (
      <>
        <Head>
          <title>Our Work</title>
        </Head>
        
        <main
          style={{
            backgroundColor: "#000", // Черный фон
            color: "#fff", // Белый текст
            minHeight: "100vh", // Высота страницы
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>Our Goals</h1>
            {goals.length > 0 ? (
            <GoalOverviewCards goals={goals} /> // Используем ту же таблицу для целей
            ) : (
            <p style={{ fontSize: "1.2rem" }}>No goals found.</p>
            )}
        </main>
        <Footer />
      </>
    );
  };
  
  export const getStaticProps: GetServerSideProps = async (context) => {
    const { locale } = context;
    const currentLocale = locale ?? "en"; // Если локаль не задана, по умолчанию 'en'
  
    return {
      props: {
        ...(await serverSideTranslations(currentLocale, ["common"])),
      },
    };
  };
  
  export default Home;