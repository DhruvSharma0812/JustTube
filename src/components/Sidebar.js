import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SideBarData } from "../utils/SideBarData"; // Adjust the import path as necessary

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const navigate = useNavigate();

  if (!isMenuOpen) {
    return null;
  }

  const handleNavigate = (search) => {
    navigate(`/results?search_query=${search}`);
  }

  return (
    <div className="p-5 shadow-lg w-[15%] h-full bg-white ">
      {SideBarData.map((section, index) => (
        <div key={index}>
          {section.section && (
            <>
              <h1 className="font-bold pt-5 pb-2 text-gray-900">{section.section}</h1>
              <hr className="my-1 border-t-1 border-black" />
            </>
          )}
          <ul>
            {(section.items || [section]).map((item, idx) => (

              <li
                key={idx}
                className="flex items-center gap-2 text-gray-700 hover:bg-gray-100 p-2 rounded-md cursor-pointer"
                onClick={() => handleNavigate(item.title)}
                >
                {item.icon === "#" ? (
                  <span className="font-bold h-6">#</span>
                ) : (
                  <lord-icon
                    src={item.icon}
                    trigger="hover"
                    style={{ width: "14px", height: "14px" }}
                  ></lord-icon>
                )}
                {item.title}
              </li>

            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
