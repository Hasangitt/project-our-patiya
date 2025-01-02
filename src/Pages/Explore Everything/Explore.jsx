import { Link } from "react-router-dom";
import '../../../src/App.css'

const Explore = () => {
  return (
    <div className="mt-20 mb-40 space-y-10">
      <div>
        <h1 className="text-4xl text-white font-bold text-center">
          Explore Everything Our Patiya Has To Offer
        </h1>
      </div>
      <div className="bg-white/20 backdrop-blur-md rounded-lg border p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <Link to='/schools'>
          <div className="bg-white w-32 p-2 mx-auto border rounded-lg">
            <img
              className="w-full h-fit"
              src="https://i.ibb.co.com/b34cj0y/Pngtree-school-building-flat-design-4815002.png"
              alt=""
            />
            <h1 className="text-black text-center font-semibold noto-serif-bengali">স্কুলসমূহ</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Explore;
