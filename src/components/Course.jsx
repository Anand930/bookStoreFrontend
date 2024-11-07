import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards.jsx";
import { Link } from "react-router-dom";

const Course = () => {
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We delight to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
            ipsam cum facere molestiae. Magnam, at eveniet impedit corporis
            totam nesciunt incidunt culpa molestiae exercitationem ea debitis
            blanditiis doloribus, hic facilis asperiores iste consequuntur
            quaerat fugit obcaecati ipsum nostrum quibusdam mollitia fugiat
            recusandae! Doloribus, accusamus vel.
          </p>
          <Link to={"/"}>
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
