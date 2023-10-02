import { CandidateItem } from "../data/constants";
import Candidate from "./Candidate";

type Props = {
  data: CandidateItem[];
};
export default function Candidates({ data }: Props) {
  return (
    <div className="bg-white rounded-[16px] p-4 w-full">
      <div className="flex items-center justify-between pb-4 border-b border-b-[#F2F2F2] w-full">
        <div className="flex items-center">
          <input type="checkbox" className="accent-[#1D5ECD] h-4 w-4" />
          <p className="ml-8 text-[#1D5ECD] text-sm font-semibold">
            247 Candidates
          </p>
        </div>
        <div className="md:flex items-center hidden">
          <div className="px-3 flex">
            <p className="text-[#1D5ECD] text-sm">Qualified</p>
          </div>
          <div className="px-3 flex border-r border-l items-center justify-center">
            <p className="text-[#0B0B0B] text-sm">Task</p>
            <div className="bg-[#F7F8FD] rounded-full p-[6px] items-center justify-center ml-2">
              <p className="text-[#22215B] text-xs">25</p>
            </div>
          </div>
          <div className="px-3 flex items-center justify-center">
            <p className="text-[#0B0B0B] text-sm">Disqualified</p>
            <div className="bg-[#F7F8FD] rounded-full p-[6px] items-center justify-center ml-2">
              <p className="text-[#22215B] text-xs">78</p>
            </div>
          </div>
        </div>
      </div>
      {data.map((candidate, index) => (
        <Candidate item={candidate} key={index} />
      ))}
    </div>
  );
}
