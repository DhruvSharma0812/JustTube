import React from "react";
import { useSelector } from "react-redux";
import store from "../utils/store";

const Sidebar = () => {

  const isMenuOpen = useSelector ((store) => store.app.isMenuOpen)

  if (!isMenuOpen) {
    return null;
  }

  return (
    <div className="p-5 shadow-lg w-48 bg-white overflow-y-auto">
      <ul className="">
        <li className="flex items-center gap-2 text-gray-700 bg-gray-100 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
          <lord-icon
            style={{ width: "24px", height: "24px" }}
            src="https://cdn.lordicon.com/wmwqvixz.json"
            trigger="hover"
          ></lord-icon>
          Home
        </li>

        <li className="flex items-center gap-2 text-gray-700 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
          <lord-icon
            src="https://cdn.lordicon.com/qisgortv.json"
            trigger="hover"
            style={{ width: "24px", height: "24px" }}
          ></lord-icon>
          Shorts
        </li>

        <li className="flex items-center gap-2 text-gray-700 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
          <lord-icon
            src="https://cdn.lordicon.com/gewhxiwb.json"
            trigger="hover"
            style={{ width: "24px", height: "24px" }}>
          </lord-icon>
          Videos
        </li>

        <li className="flex items-center gap-2 text-gray-700 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
          <lord-icon
            src="https://cdn.lordicon.com/uwtqzoif.json"
            trigger="hover"
            style={{ width: "24px", height: "24px" }}
          ></lord-icon>
          Live
        </li>
      </ul>
      <hr className="my-1 border-t-1 border-black" />

      <h1 className="font-bold pt-5 pb-2 text-gray-900">Explore</h1>
      <ul className="">
        <li className="flex items-center gap-2 text-gray-700 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
          <span className="font-bold h-6 px-2">#</span> Trending
        </li>
        <li className="flex items-center gap-2 text-gray-700 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
          <lord-icon
            src="https://cdn.lordicon.com/cosvjkbu.json"
            trigger="hover"
            style={{ width: "24px", height: "24px" }}>
          </lord-icon>
          Shopping
        </li>
        <li className="flex items-center gap-2 text-gray-700 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
          <lord-icon
            src="https://cdn.lordicon.com/ihajlcqd.json"
            trigger="hover"
            style={{ width: "24px", height: "24px" }}>
          </lord-icon>
          Fashion & beauty
        </li>
        <li className="flex items-center gap-2 text-gray-700 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
          <lord-icon
            src="https://cdn.lordicon.com/ceogkocw.json"
            trigger="hover"
            style={{ width: "24px", height: "24px" }}>
          </lord-icon>
          Podcasts
        </li>
        <li className="flex items-center gap-2 text-gray-700 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
          <lord-icon
            src="https://cdn.lordicon.com/gemrrbjz.json"
            trigger="hover"
            style={{ width: "24px", height: "24px" }}>
          </lord-icon>
          News
        </li>
      </ul>

      <hr className="my-1 border-t-1 border-black" />
      <h1 className="font-bold pt-5 pb-2 text-gray-900">More from Youtube</h1>
      <ul className="">
        <li className="flex items-center gap-2 text-gray-700 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
          <lord-icon
            src="https://cdn.lordicon.com/yvsfcbjq.json"
            trigger="hover"
            style={{ width: "24px", height: "24px" }}>
          </lord-icon>
          Music
        </li>
        <li className="flex items-center gap-2 text-gray-700 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
          <lord-icon
            src="https://cdn.lordicon.com/jdngjjzg.json"
            trigger="hover"
            style={{ width: "24px", height: "24px" }}>
          </lord-icon>
          Sports
        </li>
        <li className="flex items-center gap-2 text-gray-700 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
          <lord-icon
            src="https://cdn.lordicon.com/nkmrdfzh.json"
            trigger="hover"
            style={{ width: "24px", height: "24px" }}>
          </lord-icon>
          Gaming
        </li>
        <li className="flex items-center gap-2 text-gray-700 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
          <lord-icon
            src="https://cdn.lordicon.com/wwdlquyd.json"
            trigger="hover"
            style={{ width: "24px", height: "24px" }}>
          </lord-icon>
          Movies
        </li>
      </ul>

    </div>
  );
};

export default Sidebar;
