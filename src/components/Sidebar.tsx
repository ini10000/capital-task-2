import { menuItems } from "../data/constants";
import settings from "../assets/images/settings.png";

export default function Sidebar() {
  return (
    <div className="w-[72px] py-6 shadow-md flex flex-col h-screen items-center justify-between fixed left-0 z-[20]">
      <div>
        {menuItems.map((item, index) =>
          item.name === "user" ? (
            <img
              key={index}
              src={item.icon}
              className={`cursor-pointer w-[48px] mb-5`}
              alt={item.name}
            />
          ) : (
            <div
              className={`cursor-pointer my-2 p-2 h-10 ${
                item.name === "house" ? "rounded-[8px] bg-[#E9EFFF]" : ""
              } flex items-center justify-center`}
            >
              <img
                key={index}
                src={item.icon}
                className={`w-6`}
                alt={item.name}
              />
            </div>
          )
        )}
      </div>
      <div>
        <div
          className={`cursor-pointer my-2 p-2 h-10 flex items-center justify-center`}
        >
          <img src={settings} className={`w-6`} alt={"settings"} />
        </div>
        <div
          className={`cursor-pointer mt-2 p-2 h-10 flex items-center justify-center`}
        >
          <div
            className={`h-6 w-6 flex items-center justify-center rounded-full bg-[#D7E5FD]`}
          >
            <p className="text-xs font-semibold text-[#B1CDFD]">AS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
