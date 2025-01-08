import ScrollButton from "../../ScroolButton/ScrollButton";
import Explore from "../Explore Everything/Explore";

// import Featured from "./Featured/Featured";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      {/* <Featured></Featured> */}
      <Explore />
      <ScrollButton></ScrollButton>
    </div>
  );
};

export default Home;
