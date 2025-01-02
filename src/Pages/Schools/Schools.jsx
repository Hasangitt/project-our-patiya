import useSchool from "../../Hooks/useSchool/useSchool";
import Details from "../Shared/Details/Details";

const Schools = () => {
  const [schools] = useSchool();
  console.log(schools);
  return (
    <div className="mb-20">
      <div>
        <h1 className="text-white text-center font-bold text-5xl my-20">
          All School In Patiya Upazila
        </h1>
      </div>
      <div className="mb-20">
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
        {schools.map((school) => (
          <Details 
          key={school._id} 
          school={school}
          ></Details>
        ))}
      </div>
    </div>
  );
};

export default Schools;
