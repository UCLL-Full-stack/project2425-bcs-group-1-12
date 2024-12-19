import Header from "@/components/header";
import Footer from "@/components/footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";
import Head from 'next/head';
import { getAllReports }  from '../../services/ReportService';
import ReportOverviewTable from '../../components/ReportOverviewTable';
import React, { useState, useEffect } from 'react';


const Home: React.FC = () => {
    const [reports, setReports] = useState<any[]>([]);
  
    const fetchReports = async () => {
      try {
        const fetchedReports = await getAllReports();
        setReports(fetchedReports);
      } catch (error) {
        console.error("Error fetching reports:", error);
      }
    };
  
    useEffect(() => {
      fetchReports();
    }, []);
  
    return (
      <>
        <Head>
          <title>Our Work</title>
        </Head>
        <Header />
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
          <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>Our Reports</h1>
          {reports.length > 0 ? (
            <ReportOverviewTable reports={reports} />
          ) : (
            <p style={{ fontSize: "1.2rem" }}>No reports found.</p>
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