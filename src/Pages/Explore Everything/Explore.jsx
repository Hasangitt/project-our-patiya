import { Link } from "react-router-dom";
import '../../../src/App.css'
import doctors from '../../assets/images/doctors.jpg'
import school from '../../assets/images/schools.jpg'
import college from '../../assets/images/college.jpg'
import emergency from '../../assets/images/emergency.png'
import govOff from '../../assets/images/GOB.png'
import upzila from '../../assets/images/upzilaa.jpg'
import unions from '../../assets/images/unions.jpg'
import pourashava from '../../assets/images/পটিয়া_পৌরসভার_লোগো.png'
import bank from '../../assets/images/bank.jpg'
import persons from '../../assets/images/Group-of-People.jpg'
import hospital from '../../assets/images/hospitals.jpg'
import helpLine from '../../assets/images/helpline.jpg'
import touristSpot from '../../assets/images/tour.jpg'



const Explore = () => {
 
  return (
    <div className="mt-20 mb-40 space-y-10">
      <div>
        <h1 className="text-4xl text-white font-bold text-center">
          Explore Everything Our Patiya Has To Offer
        </h1>
      </div>
      <div className="bg-white/20 backdrop-blur-md rounded-lg border p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <Link to='/schools' id="schools">
          <div className="bg-white w-32 h-36 md:w-36 md:h-36 p-2 mx-auto border rounded-lg">
            <img
              className="w-full h-24 object-cover"
              src={school}
              alt=""
            />
            <h1 className="text-black text-center pt-1 noto-serif-bengali">মাধ্যমিক স্কুল সমূহ</h1>
          </div>
        </Link>
        <Link to='/college' id="college">
          <div className="bg-white w-32 h-36 md:w-36 md:h-36  p-2 mx-auto border rounded-lg">
            <img
              className="w-full h-24 object-cover"
              src={college}
              alt=""
            />
            <h1 className="text-black text-center pt-1 noto-serif-bengali">কলেজ সমূহ</h1>
          </div>
        </Link>
        <Link to='/doctors' id="doctors">
          <div className="bg-white w-32 h-36 md:w-36 md:h-36  p-2 mx-auto border rounded-lg">
            <img
              className="w-full h-24 object-cover"
              src={doctors}
              alt=""
            />
            <h1 className="text-black text-center pt-1 noto-serif-bengali">ডাক্তারবৃন্দ</h1>
          </div>
        </Link>
        <Link to='/emergency' id="emergency">
          <div className="bg-white w-32 h-36 md:w-36 md:h-36  p-2 mx-auto border rounded-lg">
            <img
              className="w-full h-24"
              src={emergency}
              alt=""
            />
            <h1 className="text-black text-center pt-1 noto-serif-bengali">জরুরী সেবা সমূহ</h1>
          </div>
        </Link>
        <Link to='/upzila' id="upzila">
          <div className="bg-white w-32 h-36 md:w-36 md:h-36  p-2 mx-auto border rounded-lg">
            <img
              className="w-full h-24 object-cover"
              src={upzila}
              alt=""
            />
            <h1 className="text-black text-center pt-1 noto-serif-bengali">উপজেলা পরিষদ</h1>
          </div>
        </Link>
        <Link to='/pourashava' id="pourashava">
          <div className="bg-white w-32 h-36 md:w-36 md:h-36  p-2 mx-auto border rounded-lg">
            <img
              className="w-24 mx-auto h-24 object-cover"
              src={pourashava}
              alt=""
            />
            <h1 className="text-black text-center pt-1 noto-serif-bengali">পৌরসভা</h1>
          </div>
        </Link>
        <Link to='/govtOffices' id="govtOffices">
          <div className="bg-white w-32 h-36 md:w-36 md:h-36  p-2 mx-auto border rounded-lg">
            <img
              className="w-24 mx-auto h-24"
              src={govOff}
              alt=""
            />
            <h1 className="text-black md:text-sm text-center pt-1 noto-serif-bengali">সরকারী দপ্তর সমূহ</h1>
          </div>
        </Link>
        <Link to='/unions' id="unions">
          <div className="bg-white w-32 h-36 md:w-36 md:h-36  p-2 mx-auto border rounded-lg">
            <img
              className="w-full h-24"
              src={unions}
              alt=""
            />
            <h1 className="text-black text-center pt-1 noto-serif-bengali">ইউনিয়ন সমূহ</h1>
          </div>
        </Link>
        <Link to='/banks' id="banks">
          <div className="bg-white w-32 h-36 md:w-36 md:h-36  p-2 mx-auto border rounded-lg">
            <img
              className="w-full h-24"
              src={bank}
              alt=""
            />
            <h1 className="text-black text-center pt-1 noto-serif-bengali">ব্যাংক সমূহ</h1>
          </div>
        </Link>
        <Link to='/famourPerson' id="famourPerson">
          <div className="bg-white w-32 h-36 md:w-36 md:h-36  p-2 mx-auto border rounded-lg">
            <img
              className="w-full h-24"
              src={persons}
              alt=""
            />
            <h1 className="text-black text-center pt-1 noto-serif-bengali">বিশিষ্ট ব্যক্তিগণ</h1>
          </div>
        </Link>
        <Link to='/hospitals' id="hospitals">
          <div className="bg-white w-32 h-36 md:w-36 md:h-36  p-2 mx-auto border rounded-lg">
            <img
              className="w-full h-24 object-cover"
              src={hospital}
              alt=""
            />
            <h1 className="text-black text-center pt-1 noto-serif-bengali">হাসপাতাল সমূহ</h1>
          </div>
        </Link>
        <Link to='/helpLine' id="helpLine">
          <div className="bg-white w-32 h-36 md:w-36 md:h-36  p-2 mx-auto border rounded-lg">
            <img
              className="w-full h-24 object-cover"
              src={helpLine}
              alt=""
            />
            <h1 className="text-black text-center pt-1 noto-serif-bengali">সরকারী হেল্পলাইন</h1>
          </div>
        </Link>
        <Link to='/touristSpot' id="touristSpot">
          <div className="bg-white w-32 h-36 md:w-36 md:h-36  p-2 mx-auto border rounded-lg">
            <img
              className="w-full h-24"
              src={touristSpot}
              alt=""
            />
            <h1 className="text-black text-center pt-1 noto-serif-bengali">দর্শনীয় স্থান সমূহ</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Explore;
