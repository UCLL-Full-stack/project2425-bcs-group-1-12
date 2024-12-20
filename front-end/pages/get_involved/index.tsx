import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";
import VolunteerBanner from "@/components/volunteer-banner";
import GetInvolved from "@/components/get_involved";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";

const home: React.FC = () => {
  return (
    <>
      <title>Rohingya Charity Organisation - Get involved</title>
      <Header />
      <GetInvolved />
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