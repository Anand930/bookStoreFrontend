import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Data from "../../public/list.json";
import Cards from "./Cards";

const FreeBook = () => {
  const filterData = Data.filter((data) => data.category === "free");
  console.log(filterData);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2 ">Free Offered Courses</h1>
        </div>
        <div>
          <div className="slider-container">
            <Slider {...settings}>
              {filterData.map((book)=>(
                <Cards item={book} key={book.id}/>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeBook;
