import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";

const home: React.FC = () => {
  return (
    <>
      <title>Rohingya Charity Organisation - contact</title>
      <Header />
      <Contact />
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