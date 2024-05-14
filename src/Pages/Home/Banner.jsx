import { FaCalendarAlt } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="hero w-full bg-base-200 pt-20">
      <div className="hero-content flex-col-reverse md:flex-row-reverse h-full pb-0 md:pt-16">
        <div className="relative">
          <img
            className="absolute h-full w-full"
            src={"https://i.ibb.co/93Qt2jR/home-slider-slide-2.png"}
            alt=""
          />
          <img
            className=" h-full w-full"
            src={"https://i.ibb.co/S50Wpgx/home-2-banner-img-shape.png"}
            alt=""
          />
        </div>
        <div className="space-y-3 text-center md:text-left">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold max-w-md font-platypi mb-3">
              Creating Unforgettable Moment
            </h1>
            <p className="">
              We specialize in creating Unforgettable experiences that exceed
              your expectations
            </p>
          </div>
          <button className="btn bg-red-300 text-white">
            <FaCalendarAlt /> Make Reservation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
