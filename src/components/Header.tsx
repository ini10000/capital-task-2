import expand from "../assets/svg/expand.svg";
import down from "../assets/svg/down.svg";
import { dropdownList, navItems } from "../data/constants";

type Props = {};

function Header(props: Props) {
  return (
    <div className="w-full flex-wrap flex items-center justify-between">
      <div>
        <p className="font-semibold text-xl text-[#1D4ED8]">
          London Internship Programme
        </p>
        <p className="my-1 font-light text-xs text-[#0B0B0B]">London</p>
      </div>
      <div className="relative inline-flex items-center">
        <img
          src={down}
          alt="down"
          className=" absolute right-1  pointer-events-none"
        />
        <select
          defaultValue={"Opportunity Browsing"}
          className="rounded-full font-medium text-base text-[#1D4ED8] h-10 pl-3 pr-20 bg-white appearance-none"
          data-te-select-init
        >
          {dropdownList.map((item, index) => (
            <option
              selected={item === "Opportunity Browsing"}
              key={index}
              value={item}
            >
              <p>{item}</p>
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap items-center justify-between">
        {navItems.map((item, index) => (
          <div
            key={index}
            className={`cursor-pointer mx-1 my-1 p-2 rounded-[8px] bg-white flex items-center justify-center`}
          >
            <img
              key={index}
              src={item.icon}
              className={`w-5`}
              alt={item.name}
            />
          </div>
        ))}
        <div className="border-l pl-2 h-7 my-1 cursor-pointer">
          <div className="flex bg-[#1D5ECD] rounded-[8px]">
            <p className="text-white px-2 py-1 border-r border-r-white">
              Move to Video Interview I
            </p>
            <img className="px-1" src={expand} alt="expand" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
