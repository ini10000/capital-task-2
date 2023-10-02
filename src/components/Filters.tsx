import down from "../assets/svg/down.svg";
import file from "../assets/svg/file.svg";
import { filters } from "../data/constants";

export default function Filters() {
  return (
    <div className="bg-white rounded-[8px] w-full">
      <div className="flex items-center p-4 border-b border-b-[#F2F2F2] justify-between">
        <p className="text-[#0B0B0B] text-sm font-medium">Filters</p>
        <p className="text-[#0B0B0B] text-xs font-light">0 Selected</p>
      </div>
      {filters.map((filter, index) => (
        <div
          key={index}
          className="flex p-4 border-b border-b-[#F2F2F2] items-center justify-between w-full"
        >
          <div className="flex items-center">
            <img className="mr-2 w-4" src={file} alt="file" />
            <p>{filter}</p>
          </div>
          <img className="h-[18px]" src={down} alt="file" />
        </div>
      ))}
    </div>
  );
}
