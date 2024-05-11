import { FaChild } from "react-icons/fa6";
import { IoManSharp } from "react-icons/io5";
import { IoWoman } from "react-icons/io5";
import { LiaChildSolid } from "react-icons/lia";
import { MdKeyboardArrowRight } from "react-icons/md";
function Categories() {
  const categories = [
    { label: "men", icon: <IoManSharp /> },
    { label: "men eastern", icon: <IoManSharp /> },
    { label: "women", icon: <IoWoman /> },
    { label: "women eastern", icon: <IoWoman /> },
    { label: "boys", icon: <LiaChildSolid /> },
    { label: "mini boys", icon: <FaChild /> },
    { label: "girls", icon: <FaChild /> },
    { label: "mini girls", icon: <FaChild /> },
  ];
  return (
    <div className="w-1/3 bg-white me-3 px-3 py-4 rounded-xl">
      <h1 className="font-semibold text-lg capitalize">categories</h1>
      {categories.map((e, i) => (
        <div className="flex items-center justify-start  " key={i}>
          <div className="bg-black text-white p-2 rounded-lg">
            {e.icon}
            {/* <IoManSharp /> */}
          </div>
          <div className="flex-1 ms-2 leading-3">
            <p className="text-sm font-medium">{e.label}</p>
            <p>
              <span className="text-xs"> 250 in stock </span>
              <span className="text-xs font-medium"> 50 sold </span>
            </p>
          </div>
          <div>
            <MdKeyboardArrowRight />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Categories;
