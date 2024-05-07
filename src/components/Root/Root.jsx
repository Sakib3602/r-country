import { Outlet } from "react-router-dom";
import Nav from "../Home/Nav";


const Root = () => {
    return (
        <div >
            <div className="w-full md:w-[90%] lg:w-[85%] m-auto">

            <Nav></Nav>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;