import React from "react";

function SideNav({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 h-full w-70 bg-white shadow-lg  p-4 overflow-y-auto  bg-opacity-50 z-60">
      <ul className="text-black space-y-2 mt-2">
        <li className="font-bold text-lg">Trending</li>
        <li>Bestsellers</li>
        <li>New Releases</li>
        <li>Movers and Shakers</li>
        <div className="border-t border-gray-400 w-96" />
        <li className="font-bold text-lg">Top Categories for You</li>
        <li>Mobiles</li>
        <li>Computers</li>
        <li>Books</li>
        <li>Amazon Fashion</li>
        <li>See All Categories</li>
        <div className="border-t border-gray-400 w-96 " />
        <li className="font-bold text-lg">Programs & Features</li>
        <li>Today's Deal</li>
        <li>Amazon Bazaar</li>
        <li>Amazon Pay</li>
        <li>Amazon LaunchPad</li>
        <div className="border-t border-gray-400 w-96" />
        <li>Handloom and Handicrafts</li>
        <li>Amazon Saheli</li>
        <li>Amazon Custom</li>
        <li>Try Prime</li>
        <li>Buy more, Save more</li>
        <li>Sell on Amazon</li>
        <li>International Branch</li>
      </ul>

      <button
        onClick={onClose}
        className="text-black font-bold text-xl cursor-pointer "
      >
        Close
      </button>
    </div>
  );
}

export default SideNav;
