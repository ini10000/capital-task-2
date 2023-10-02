import search from "../assets/svg/search.svg";
import warning from "../assets/svg/warning.svg";

type Props = {
  value: string;
  onInput: (v: string) => void;
};
export default function Search({ value, onInput }: Props) {
  return (
    <div className="bg-white rounded-[8px] border border-[#F8F8F8] p-3 flex items-center justify-between w-full mb-6">
      <div className="flex items-center w-full">
        <img src={search} alt="search" />
        <input
          value={value}
          onChange={(e) => onInput(e.target.value)}
          className="ml-2 mr-10 w-full text-[#9AA6AC] text-sm"
          placeholder="Search by name, edu, exp or #tag"
        />
      </div>
      <img src={warning} alt="warning" />
    </div>
  );
}
