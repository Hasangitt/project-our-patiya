import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <div className="mt-20 mb-40 space-y-10">
      <div>
        <h1 className="text-4xl text-black font-bold text-center">
          Explore Everything Our Patiya Has To Offer
        </h1>
      </div>
      <div className="bg-gray-300 rounded-lg border p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <Link>
          <div className="bg-white w-32 p-2 mx-auto">
            <img
              className="w-full h-fit"
              src="https://i.ibb.co.com/b34cj0y/Pngtree-school-building-flat-design-4815002.png"
              alt=""
            />
            <h1 className="text-black text-center">Schools</h1>
          </div>
        </Link>
        <Link>
          <div className="bg-white w-32 p-2 mx-auto">
            <img
              className="w-full h-fit"
              src="https://i.ibb.co.com/b34cj0y/Pngtree-school-building-flat-design-4815002.png"
              alt=""
            />
            <h1 className="text-black text-center">Schools</h1>
          </div>
        </Link>
        <Link>
          <div className="bg-white w-32 p-2 mx-auto">
            <img
              className="w-full h-fit"
              src="https://i.ibb.co.com/b34cj0y/Pngtree-school-building-flat-design-4815002.png"
              alt=""
            />
            <h1 className="text-black text-center">Schools</h1>
          </div>
        </Link>
        <Link>
          <div className="bg-white w-32 p-2 mx-auto">
            <img
              className="w-full h-fit"
              src="https://i.ibb.co.com/b34cj0y/Pngtree-school-building-flat-design-4815002.png"
              alt=""
            />
            <h1 className="text-black text-center">Schools</h1>
          </div>
        </Link>
        <Link>
          <div className="bg-white w-32 p-2 mx-auto">
            <img
              className="w-full h-fit"
              src="https://i.ibb.co.com/b34cj0y/Pngtree-school-building-flat-design-4815002.png"
              alt=""
            />
            <h1 className="text-black text-center">Schools</h1>
          </div>
        </Link>
        <Link>
          <div className="bg-white w-32 p-2 mx-auto">
            <img
              className="w-full h-fit"
              src="https://i.ibb.co.com/b34cj0y/Pngtree-school-building-flat-design-4815002.png"
              alt=""
            />
            <h1 className="text-black text-center">Schools</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Explore;
