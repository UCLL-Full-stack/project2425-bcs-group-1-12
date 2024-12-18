import Head from "next/head";
import Homepage from "../components/homepage";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("site.title")}</title>
      </Head>
      <Homepage />
    </>
  );
};

// Правильная типизация для getServerSideProps
export const getStaticProps: GetServerSideProps = async (context) => {
  const { locale } = context;
  const currentLocale = locale ?? 'en'; // Если локаль не задана, по умолчанию 'en'

  return {
    props: {
      ...(await serverSideTranslations(currentLocale, ['common'])),
    },
  };
};

export default Home;
