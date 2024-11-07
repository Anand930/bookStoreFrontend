import React from "react";
import Navbar from "../components/Navbar.jsx";
import Banner from "../components/Banner.jsx";
import Footer from "../components/Footer.jsx";
import FreeBook from "../components/FreeBook.jsx";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <FreeBook />
      <Footer />
    </div>
  );
};

export default Home;
