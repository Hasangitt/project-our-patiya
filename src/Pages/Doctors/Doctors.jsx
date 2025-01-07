import useDoctors from "../../Hooks/useDoctors/useDoctors";
import DocDetails from "../DoctorDetails/DocDetails";



const Doctors = () => { 
    const [doctors] = useDoctors()
    return (
      <div className="mb-20">
        <div>
          <h1 className="text-white text-center noto-serif-bengali font-semibold text-5xl my-14">
           অভিজ্ঞ ডাক্তারবৃন্দ
          </h1>
        </div>
        <div className="mb-10  md:w-3/4 mx-auto">
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
<div className="space-y-10">
            {
                doctors.map(doctor => <DocDetails
                key={doctor._id}
                doctor={doctor}
                ></DocDetails>)
            }
           </div>
      </div>
    );
};

export default Doctors;