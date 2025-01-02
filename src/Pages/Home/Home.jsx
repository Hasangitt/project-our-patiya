import Explore from "../Explore Everything/Explore";
// import Featured from "./Featured/Featured";
import Slider from "./Slider/Slider";



const Home = () => {
    return (
        <div>
          <Slider></Slider>
          {/* <Featured></Featured> */}
          <Explore></Explore>
        </div>
    );
};

export default Home;