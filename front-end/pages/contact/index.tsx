import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Contact from "@/components/contact";

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

export default home;