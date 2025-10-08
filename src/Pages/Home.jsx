import Banner from "../Components/Banner";
import States from "../Components/States";
import TopApps from "../Components/TopApps";

const Home = () => {
  return (
    <div className="bg-[#D2D2D230]">
      <Banner />
      <States />
      <TopApps />      
    </div>
  );
};

export default Home;