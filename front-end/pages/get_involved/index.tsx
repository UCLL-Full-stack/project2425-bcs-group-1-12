import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";
import VolunteerBanner from "@/components/volunteer-banner";
import GetInvolved from "@/components/get_involved";

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

export default home;