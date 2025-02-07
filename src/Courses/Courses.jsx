import React from "react";
import Course from "../components/Course";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import list from '../../public/list.json'

const Courses = () => {
  console.log(list);
  
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <Course />
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
