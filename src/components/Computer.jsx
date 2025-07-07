import React from "react";
import { NavLink, Link } from "react-router-dom";
function Computer() {
  console.log("Computer");
  const navStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "normal" : "bold",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  return (
    <div className="overflow-x-auto">
      <div className=" px-1">
        <nav className="bg-white py-4 ">
          <div className="flex space-x-6 whitespace-nowrap text-sm overflow-x-auto">
            <NavLink to="#" className="font-semibold text-gray-800">
              Electronics
            </NavLink>
            <NavLink to="#" style={navStyle}>
              Mobile & Accessories
            </NavLink>
            <NavLink to="#" style={navStyle}>
              Laptop & Accessories
            </NavLink>
            <NavLink to="#" style={navStyle}>
              TV & Home entertainment
            </NavLink>
            <NavLink to="#" style={navStyle}>
              Audio
            </NavLink>
            <NavLink to="#" style={navStyle}>
              Cameras
            </NavLink>
            <NavLink to="#" style={navStyle}>
              Computer Peripherals
            </NavLink>
            <NavLink to="#" style={navStyle}>
              Smart technology
            </NavLink>
            <NavLink to="#" style={navStyle}>
              Musical Instruments
            </NavLink>
            <NavLink to="#" style={navStyle}>
              Office Stationaries
            </NavLink>
          </div>
        </nav>
      </div>
      <div className="flex px-2 ">
        <aside className="w-56 p-4 bg-white sticky border-r  h-max shadow text-sm">
          <ul>
            {" "}
            <li className="font-semibold text-md">Computer & Accessories</li>
            <li>
              <NavLink
                to="#"
                onClick={() => setCategory("living-room")}
                className="ml-4"
              >
                Accessories & peripherals
              </NavLink>
            </li>
            <div className="ml-6">
              <li>
                <NavLink to="#" onClick={() => setCategory("bedroom")}>
                  Desktops
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="#"
                  onClick={() => setCategory("kitchen-appliances")}
                >
                  Laptops
                </NavLink>
              </li>

              <li>
                <NavLink to="#" onClick={() => setCategory("garage")}>
                  Components
                </NavLink>
              </li>
            </div>
            <li className="font-semibold text-md">Featured Categories</li>
            <li>
              <NavLink
                to="#"
                onClick={() => setCategory("kitchen-home-appln")}
                className="ml-4"
              >
                Storage
              </NavLink>
            </li>
            <div className="ml-6">
              <li>
                <NavLink to="#" onClick={() => setCategory("kitchen-dining")}>
                  Monitor
                </NavLink>
              </li>

              <li>
                <NavLink to="#" onClick={() => setCategory("home-decor")}>
                  Networking Device
                </NavLink>
              </li>

              <li>
                <NavLink to="#" onClick={() => setCategory("home-furnishing")}>
                  Scanners
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  onClick={() => setCategory("furniture-home-mattress")}
                >
                  Tablets
                </NavLink>
              </li>
              <li>
                <NavLink to="#" onClick={() => setCategory("garden-outdoors")}>
                  Warranties
                </NavLink>
              </li>
            </div>
          </ul>
        </aside>
        <div className="flex-1 flex justify-center gap-72 text-gray-700 font-semibold font-sans text-3xl  mb-6 overflow-hidden">
          <Link to="#">PC Accessories</Link>
          <Link to="#">Gaming Accessories</Link>
        </div>
        <img src="ComputerBanner.jpg" className="mt-4 ml-4 mb-6 w-full " />
      </div>
    </div>
  );
}

export default Computer;
