import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";


const Main = () => {
    return (
        <div className="md:max-w-4xl max-w-lg mx-auto p-4 md:p-0">
            <Outlet></Outlet>
            <Navbar></Navbar>
        </div>
    );
};

export default Main;