import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Search from "./components/Search";
import Filters from "./components/Filters";
import Candidates from "./components/Candidates";
import { useEffect, useState } from "react";
import { candidates, CandidateItem } from "./data/constants";

function App() {
  const [searched, setSearched] = useState("");
  const [filtered, setFiltered] = useState<CandidateItem[]>([]);

  useEffect(() => {
    const handleSearch = () => {
      setFiltered(
        candidates.filter(
          (item) =>
            item.name.toLowerCase().includes(searched) ||
            item.location.toLowerCase().includes(searched) ||
            item.degree.toLowerCase().includes(searched)
        )
      );
    };
    handleSearch();
  }, [searched]);
  return (
    <div className="flex flex-col flex-1 w-full h-screen">
      <Sidebar />
      <div className="ml-[72px] p-6 bg-[#F9FAFF] flex-1">
        <Header />
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-9 gap-8">
          <div className="md:col-span-3">
            <Search value={searched} onInput={setSearched} />
            <Filters />
          </div>
          <div className="md:col-span-6">
            <Candidates data={filtered} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
