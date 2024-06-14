import React, { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { NavBarData } from "../../data/SideBarDara";
function Sidebar() {
  const [open, setOpen] = useState(Array(NavBarData.length).fill(false));
  // const [active, setActive] = useState(0);
  const ref = useRef();
  function handleMenues(i) {
    setOpen((prev) => {
      const Menues = [...prev];
      Menues[i] = !Menues[i];
      return Menues;
    });
  }

  return (
    <div className="w-1/5 h-[90vh] fixed top-10 left-10 rounded-tl-xl rounded-bl-xl bg-white px-3 py-3 overflow-y-scroll">
      <div className="flex items-center justify-between">
        <img
          src="https://www.hopenotout.com/cdn/shop/files/Logo-02.svg?v=6858386245413467680"
          alt=""
          className="h-10 w-10"
        />
        <span className="text-sm font-semibold ">HNO's Dashboard</span>
      </div>
      {NavBarData.map((d, i) => (
        <React.Fragment key={i}>
          <NavLink to={d.path}>
            <div
              className={`flex justify-between py-2 px-4 items-center  `}
              onClick={() => handleMenues(i)}
            >
              <li className="list-none  capitalize">{d.label}</li>

              {d.isChildren && (
                <button
                  className={`${
                    open[i] ? "rotate-90 " : "rotate-0"
                  } transition-all duration-300`}
                >
                  <IoIosArrowForward />
                </button>
              )}
            </div>
          </NavLink>
          {d.isChildren && (
            <ul
              className={
                open[i]
                  ? ` transition-all  h-1/2 overflow-y-hidden duration-300 ps-8 pt-2`
                  : "transition-all h-0  duration-300 overflow-y-hidden ps-8 pt-2"
              }
              ref={ref}
            >
              {d.children.map((childData, e) => (
                <NavLink to={childData.path} key={e}>
                  <li
                    className="list hover:cursor-pointer capitalize text-slate-700 font-normal text-sm"
                    key={e}
                  >
                    {childData.label}
                  </li>
                </NavLink>
              ))}
            </ul>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Sidebar;
