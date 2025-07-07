import React, { useState } from "react";
import SideNav from "./SideNav";
import { NavLink, useNavigate } from "react-router-dom";

function AppNavbar() {
  const [dropDown, setDropDown] = useState(false);
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [signInModal, setSignInModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const navigate = useNavigate();

  const toggle = () => {
    setDropDown((prev) => !prev);
  };

  const dropdownItems = [
    { label: "All Categories" },
    { label: "Alexa Skills" },
    { label: "Amazon Devices" },
    { label: "Amazon Fashion" },
    { label: "Amazon Fresh" },
    { label: "Amazon Fresh Meat" },
    { label: "Amazon Pharmacy" },
    { label: "Appliances" },
    { label: "Apps and Games" },
    { label: "Audible Audiobooks" },
    { label: "Amazon Pay" },
    { label: "Baby" },
    { label: "Beauty" },
    { label: "Books" },
    { label: "Car & Motorbike" },
    { label: "Clothing & Accessories" },
    { label: "Collectibles" },
    { label: "Computers & Accessories" },
    { label: "Deals" },
    { label: "Electronics" },
    { label: "Furniture" },
    { label: "Garden and Outdoors" },
    { label: "Gift Cards" },
    { label: "Grocery & Gourmet Foods" },
    { label: "Health & Personal Care" },
    { label: "Home & Kitchen" },
    { label: "Industrial & Scientific" },
    { label: "Jewellery" },
    { label: "Kindle Store" },
    { label: "Luggage & Bags" },
    { label: "Luxury Beauty" },
    { label: "Movies & TV Shows" },
    { label: "MP3 Music" },
    { label: "Music" },
    { label: "Musical Instruments" },
    { label: "Office Products" },
    { label: "Pet Supplies" },
    { label: "Prime Video" },
    { label: "Shoes & Handbags" },
    { label: "Software" },
    { label: "Sports, Fitness & Outdoors" },
    { label: "Subscribe & Save" },
    { label: "Tools & Home Improvement" },
    { label: "Toys & Games" },
    { label: "Under Rs.500" },
    { label: "Video Games" },
    { label: "Watches" },
  ];

  const secondNavItems = [
    { label: "Fresh", path: "/fresh" },
    { label: "MX Player", path: "/mx-player" },
    { label: "Sell", path: "/sell" },
    { label: "Bestsellers", path: "/bestsellers" },
    { label: "Prime", path: "/prime" },
    { label: "Mobiles", path: "/mobiles" },
    { label: "Today's Deals", path: "/TodaysDeal" },
    { label: "Customer Service", path: "/customer-service" },
    { label: "New Releases", path: "/new-releases" },
    { label: "Fashion", path: "/fashion" },
    { label: "Amazon Pay", path: "/amazon-pay" },
    { label: "Electronics", path: "/electronics" },
    { label: "Home & Kitchen", path: "/home-kitchen" },
    { label: "Computers", path: "/computer" },
    { label: "Books", path: "/books" },
  ];

  return (
    <div className="w-full bg-gray-900 h-auto px-2 py-2 overflow-x-hidden">
      <div className="grid grid-cols-12 items-center ">
        <div className="col-span-2 sm:col-span-2 md:col-span-1 xl:col-span-1 ">
          <img src="Logo1.png" className="h-10 w-14" alt="Logo" />
        </div>

        <div className="col-span-8 sm:col-span-6 md:col-span-8 lg:col-span-6 xl:col-span-6  flex items-center min-w-0">
          <button className="bg-gray-400 p-2 text-sm rounded-l whitespace-nowrap min-w-0">
            {selectedCategory}
          </button>
          <input
            type="search"
            placeholder="Search Amazon.in"
            className="bg-white p-2 text-sm w-full min-w-0"
          />
          <button className="bg-yellow-400 p-2 text-sm rounded-r whitespace-nowrap min-w-0 ">
            Search
          </button>
        </div>

        <div className="col-span-2 sm:col-span-4 md:col-span-1 lg:col-span-2 xl:col-span-4  text-right mt-2 sm:mt-0">
          <NavLink
            to="#"
            className="text-white hover:text-yellow-400 whitespace-nowrap"
          >
            Sign In
          </NavLink>
        </div>

         {/* <div className=" md:flex col-span-8 justify-end gap-4 text-sm whitespace-nowrap ml-auto">
          <div
            className="relative"
            onMouseEnter={() => setSignInModal(true)}
            onMouseLeave={() => setSignInModal(false)}
          >
            <NavLink
              to="/sign-in"
              className="whitespace-nowrap hover:text-yellow-400"
            >
              Sign In
            </NavLink>
            {signInModal && (
              <div className="absolute top-full mt-2 right-0 w-64 bg-white text-black shadow-xl p-4 z-50 rounded border border-gray-300">
                <h3 className="font-semibold mb-2 text-lg">
                  Sign in to your account
                </h3>
                <button
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-1 cursor-pointer px-3 rounded"
                  onClick={() => navigate("/sign-in")}
                >
                  Sign In
                </button>
                <p className="text-sm mt-3 text-gray-600">
                  New customer?{" "}
                  <span
                    className="text-blue-600 cursor-pointer hover:underline"
                    onClick={() => navigate("/sign-in")}
                  >
                    Start here.
                  </span>
                </p>
              </div>
            )}
          </div> 
        </div>*/}
      </div> 

      <div className="w-full bg-gray-800 text-white text-sm sticky top-14 z-30">
        <div className="grid grid-cols-12 items-center h-10 px-2">
          
          <div className="col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1 flex items-center gap-2">
            <button
              onClick={() => setSideNavOpen(true)}
              className="text-lg font-bold hover:text-yellow-400"
            >
              ☰
            </button>
            <NavLink to="/" className="hover:text-yellow-400 whitespace-nowrap">
              All
            </NavLink>
          </div>

        
          <div className="col-span-9 sm:col-span-10 md:col-span-10 lg:col-span-11 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 whitespace-nowrap flex gap-4 px-2">
            {secondNavItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className="hover:text-yellow-400 whitespace-nowrap"
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppNavbar;

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { Container, Row, Col } from "reactstrap";

// function AppNavbar() {
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const toggle = () => {
//     setDropDown((prev) => !prev);
//   };
//   return (
//     // <Container className="w-full  ">
//     //   <Row className="bg-gray-900  h-14 w-full justify-center gap-8">
//     //     <div className="flex  bg-gray-900 h-14 w-100">
//     //       <Col xs="4" md="4" sm="4" lg="2">
//     //         <img src="Logo1.png" className="h-12 w-18 mb-2" />
//     //       </Col>

//     //       <Col xs="2" sm="2" md="4" lg="2" className="gap-x-8">
//     //         <button
//     //           className="cursor-pointer bg-gray-400 p-2 "
//     //           onClick={toggle}
//     //         >
//     //           {selectedCategory}
//     //         </button>
//     //       </Col>
//     //       <Col xs="2" sm="2" md="2" lg="12">
//     //         <input
//     //           type="search"
//     //           placeholder="Search Amazon.in"
//     //           className="bg-white p-2 "
//     //         />
//     //       </Col>
//     //       <Col xs="2" sm="2" md="2" lg="12">
//     //         <button className="cursor-pointer bg-yellow-400 p-2">search</button>
//     //       </Col>

//     //       <Col xs="2" sm="2" md="2" lg="2" className="text-end">
//     //         <NavLink
//     //           to="#"
//     //           className="p-2 hover:text-yellow-400 text-white ml-auto"
//     //         >
//     //           SignIn
//     //         </NavLink>
//     //       </Col>
//     //     </div>
//     //   </Row>
//     // </Container>
//     // <div className="w-full bg-gray-900 h-14 ">
//     //   <div className="grid grid-cols-12 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 ">
//     //     <div className="col-span-2 lg:col-span-1 md:col-span-1">
//     //       <img src="Logo1.png" className="h-10 w-14 mt-2 ml-2" alt="Logo" />
//     //     </div>

//     //     <div className="col-span-5 lg:col-span-4 md:col-span-2 mt-2">
//     //       <div className="flex w-full min-w-0">
//     //         <button className="bg-gray-400 p-2 text-sm rounded-l">
//     //           {selectedCategory}
//     //         </button>
//     //         <input
//     //           type="search"
//     //           placeholder="Search Amazon.in"
//     //           className="bg-white p-2 text-sm   min-w-0 "
//     //         />
//     //         <button className="bg-yellow-400 p-2 text-sm rounded-r whitespace-nowrap shrink-0">
//     //           Search
//     //         </button>
//     //       </div>
//     //     </div>

//     //     <div className="col-span-2 sm:col-span-4 lg:col-span-2  mt-2 text-right">
//     //       <NavLink
//     //         to="#"
//     //         className="text-white hover:text-yellow-400 whitespace-nowrap"
//     //       >
//     //         Sign In
//     //       </NavLink>
//     //     </div>
//     //   </div>
//     // </div>

//     <div className="w-full bg-gray-900 h-auto px-2 py-2">
//       <div className="grid grid-cols-12 items-center gap-2">
//         <div className="col-span-2 sm:col-span-2 md:col-span-1 xl:col-span-1 2xl:col-span-1">
//           <img src="Logo1.png" className="h-10 w-14" alt="Logo" />
//         </div>

//         <div className="col-span-8 sm:col-span-6 md:col-span-6 lg:col-span-3 xl:col-span-6 2xl:col-span-8 flex items-center min-w-0">
//           <button className="bg-gray-400 p-2 text-sm rounded-l whitespace-nowrap">
//             {selectedCategory}
//           </button>
//           <input
//             type="search"
//             placeholder="Search Amazon.in"
//             className="bg-white p-2 text-sm w-full min-w-0"
//           />
//           <button className="bg-yellow-400 p-2 text-sm rounded-r whitespace-nowrap">
//             Search
//           </button>
//         </div>

//         <div className="col-span-2 sm:col-span-4 md:col-span-1 lg:col-span-1 xl:col-span-2 2xl:col-span-3 text-right mt-2 sm:mt-0">
//           <NavLink
//             to="#"
//             className="text-white hover:text-yellow-400 whitespace-nowrap"
//           >
//             Sign In
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default AppNavbar;
