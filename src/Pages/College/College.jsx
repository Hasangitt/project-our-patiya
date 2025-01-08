import { useState } from "react";
import useCollege from "../../Hooks/useCollege/useCollege";
import Details from "../Shared/Details/Details";

const College = () => {
const [colleges, loading] = useCollege();
 const [searchTerm, setSearchTerm] = useState("");
  const filterdColleges = colleges.filter((college) =>
    college.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  if (loading) {
    return <span className="loading loading-dots loading-lg"></span>;
  }

  return (
    <div className="mb-20">
      <div>
        <h1 className="text-white text-center noto-serif-bengali font-semibold text-5xl my-14">
         কলেজ সমূহ
        </h1>
      </div>
      <div className="mb-10  md:w-3/4 mx-auto">
        <label className="input input-bordered flex items-center gap-2">
        <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="grow"
            placeholder="কলেজের নাম লিখে খুঁজুন"
          />
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
       <div>
              {filterdColleges.length === 0 ? (
                <p className="text-red-400 text-3xl text-center mt-10">কোনো তথ্য পাওয়া যায়নি</p>
              ) : (
                <div className="space-y-10">
                  {filterdColleges.map((college) => (
                    <Details key={college._id} school={college}></Details>
                  ))}
                </div>
              )}
            </div>
    </div>
  );
};

export default College;
