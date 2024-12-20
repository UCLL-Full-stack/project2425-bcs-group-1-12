import Head from "next/head";
import AboutPage from "../../components/aboutpage";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";

const About: React.FC = () => {
  return (
    <>
      <title>Rohingya Charity Organisation - About</title>
      <AboutPage></AboutPage>
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

export default About;
