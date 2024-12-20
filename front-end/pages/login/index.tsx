import Head from "next/head";
import Header from "@/components/header";
import UserLoginForm from "@/components/UserLoginFrom";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";

const Login: React.FC = () => {
    const { t } = useTranslation();

    // Inline стили
    const mainStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#1a1a1a', // Тёмный фон
        padding: '20px',
    };

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    };

    const boxStyle = {
        backgroundColor: '#2a2a2a', // Тёмный фон для блока
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
        width: '100%',
        maxWidth: '400px',
    };

    const titleStyle = {
        color: '#eaeaea', // Светлый цвет для заголовка
        textAlign: 'center',
        fontSize: '24px',
        marginBottom: '20px',
    };

    const inputStyle = {
        backgroundColor: '#3a3a3a', // Темный фон для инпутов
        color: '#eaeaea', // Светлый текст
        padding: '12px',
        margin: '10px 0',
        borderRadius: '6px',
        border: '1px solid #555',
        transition: 'background-color 0.3s ease, border-color 0.3s ease',
    };

    const inputFocusStyle = {
        backgroundColor: '#555',
        borderColor: '#777',
    };

    const buttonStyle = {
        backgroundColor: '#0066cc', // Синий цвет кнопки
        color: '#fff',
        padding: '12px',
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    };

    return (
        <>
            <Head>
                <title>{t('loginTitle')}</title> {/* Используем перевод для title */}
            </Head>
            <Header />
            <main style={mainStyle}>
                <section style={containerStyle}>
                    <div style={boxStyle}>
                        
                        <UserLoginForm
                            
                        />
                    </div>
                </section>
            </main>
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

export default Login;
