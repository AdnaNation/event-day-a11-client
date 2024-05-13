import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import PopularServices from "./PopularServices";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>EventDay | Home</title>
      </Helmet>
      <Banner></Banner>
      <PopularServices></PopularServices>
    </div>
  );
};

export default Home;
