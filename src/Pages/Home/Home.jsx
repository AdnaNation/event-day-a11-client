import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import BestWorker from "./BestWorker";
import PopularServices from "./PopularServices";
import Stats from "./Stats";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>EventDay | Home</title>
      </Helmet>
      <Banner></Banner>
      <PopularServices></PopularServices>
      <Stats></Stats>
      <BestWorker></BestWorker>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
