import Header from "@/components/header";
import Footer from "@/components/footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";
import Head from 'next/head';
import { getAllReports }  from '../../services/ReportService';
import ReportOverviewTable from '../../components/ReportOverviewTable';
import React, { useState, useEffect } from 'react';


const home: React.FC = () => {
    const [reports, setReports] = useState<any[]>([]);

    const fetchReports = async () => {
        try {
            const fetchedReports = await getAllReports();
            setReports(fetchedReports);
        } catch (error) {
            console.error('Error fetching reports:', error);
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
            <main className="d-flex flex-column justify-content-center align-items-center">
                <h1>Reports</h1>
                <section>
                    <h2>Reports Overview</h2>
                    {reports.length > 0 ? (
                        <ReportOverviewTable reports={reports} />
                    ) : (
                        <p>No reports found.</p>
                    )}
                </section>
            </main>
            <Footer />
        </>
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

export default home;