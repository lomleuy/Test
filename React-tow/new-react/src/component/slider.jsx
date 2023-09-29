import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";

const SliderSlik = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const img =
    "https://images.pexels.com/photos/675920/pexels-photo-675920.jpeg?cs=srgb&dl=pexels-min-an-675920.jpg&fm=jpg";
  const img1 =
    "https://occ-0-33-300.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABVqcLQpf6mxvyIfcaadFQhph_iN1tmNUjmHziE4hXp6HsNL0ViweqrNA3JUqdX_ukwGIWZzli2G4cry-1PYBFRk22_a8C2LG86Cj.jpg?r=1ef";
  return (
    <div>
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div className="card img ">
          <img
            src={img1}
            alt=""
            className="items-center justify-center mx-auto rounded-lg h-auto"
          />
          <div className="card-body ">
            <h3 className="text-center">Extraction</h3>
          </div>
        </div>
        <div className="card img">
          <img src={img} alt="" />
        </div>
        <div className="card img">
          <img src={img1} alt="" />
          <div className="card-body">
            <h3 className="text-center">Girl</h3>
          </div>
        </div>
        <div className="card">
          <h3>4</h3>
        </div>
        <div className="card">
          <h3>5</h3>
        </div>
        <div className="card">
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default SliderSlik;
