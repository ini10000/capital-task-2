import { CandidateItem, specials } from "../data/constants";

type Props = { item: CandidateItem; key: number };
export default function Candidate({ item }: Props) {
  const { name, location, degree } = item;
  return (
    <div className="flex items-center pb-4 border-b border-b-[#F2F2F2] py-4 w-full">
      <input type="checkbox" className="accent-[#1D5ECD] h-4 w-4" />
      <div
        className={`h-[56px] w-[56px] mx-6 flex items-center justify-center rounded-full bg-[#D7E5FD]`}
      >
        <p className="text-xl font-semibold text-[#B1CDFD]">AS</p>
      </div>
      <div className="flex flex-col justify-between">
        <p className="mb-2 text-sm font-semibold">{name}</p>
        <p className="mb-2 text-xs font-medium">{location}</p>
        <p className="mb-2 text-xs font-light">{degree}</p>
        <div className="mb-2 flex flex-row items-center">
          <p className="text-[#1D4ED8] text-[8px] mr-2">#top_candidate</p>
          <p className="text-[#1D4ED8] text-[8px]">#top_candidate</p>
        </div>
        <div className="flex flex-row items-center">
          {specials.map((special, index) => (
            <div
              key={index}
              className={`${
                special === "Marketing" ? "mx-2" : ""
              } flex items-center justify-center py-[2px] px-[10px] bg-[#F3FAFC] rounded-full`}
            >
              <p className="text-[8px] font-medium text-[#037092]">{special}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
