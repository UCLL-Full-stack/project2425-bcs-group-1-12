import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";
import VolunteerRegistrationForm from "@/components/register";

const Register: React.FC = () => {
  return (
    <>
      <title>Rohingya Charity Organisation - Register as volunteer</title>
      <Header />
      <VolunteerRegistrationForm />
      <Footer />
    </>
  );
};

export default Register;