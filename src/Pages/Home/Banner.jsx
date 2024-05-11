const Banner = () => {
  return (
    <div className="hero md:min-h-screen w-full bg-base-200">
      <div className="hero-content flex-col-reverse md:flex-row-reverse h-full">
        <div className="relative">
          <img
            className="absolute h-full w-full"
            src="/src/assets/images/home-slider-slide-2.png"
            alt=""
          />
          <img
            className=" h-full w-full"
            src="./src/assets/images/home-2-banner-img-shape.png"
            alt=""
          />
        </div>
        <div className="">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold max-w-md font-platypi">
              Creating Unforgettable Moment
            </h1>
            <p className="">
              We specialize in creating Unforgettable experiences that exceed
              your expectations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
