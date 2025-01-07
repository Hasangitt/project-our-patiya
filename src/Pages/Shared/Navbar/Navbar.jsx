import { FcAbout, FcSearch } from "react-icons/fc";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  
  return (
    <div>
      <div className="fixed bottom-0 left-0 z-50 w-full h-16 backdrop-blur-md border-t border-gray-200">
        <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium p-2">
          <Link to="/">
            <button
              type="button"
              className="inline-flex flex-col items-center justify-center px-5 md:hover:bg-gray-50 dark:hover:bg-gray-800 group"
            >
              <IoHome className="w-5 h-5 mb-2 text-blue-500" />
              <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                Home
              </span>
            </button>
          </Link>
          <Link>
            {" "}
            <button
              type="button"
              className="inline-flex flex-col items-center justify-center px-5 md:hover:bg-gray-50 dark:hover:bg-gray-800 group"
            >
              <FcSearch className="w-5 h-5 mb-2 text-blue-500"/>
              <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                Search
              </span>
            </button>
          </Link>
          <Link>
            {" "}
            <button
              type="button"
              className="inline-flex flex-col items-center justify-center px-5 md:hover:bg-gray-50 dark:hover:bg-gray-800 group"
            >
              <FcAbout className="w-5 h-5 mb-2" />
              <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
               About
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
