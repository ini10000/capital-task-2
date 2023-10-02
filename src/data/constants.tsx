import user from "../assets/svg/user.svg";
import house from "../assets/svg/house.svg";
import users from "../assets/svg/users.svg";
import calendar from "../assets/svg/calendar.svg";
import share from "../assets/svg/share.svg";
import file from "../assets/svg/file.svg";
import notebook from "../assets/svg/notebook.svg";
import heart from "../assets/svg/heart.svg";
import right from "../assets/svg/right.svg";
import tag from "../assets/svg/tag.svg";
import close from "../assets/svg/close.svg";
import check from "../assets/svg/check.svg";
import voice from "../assets/svg/voice.svg";
import mail from "../assets/svg/mail.svg";

interface MenuItem {
  name: string;
  icon: string;
}
interface CandidateItem {
  name: string;
  location: string;
  degree: string;
}

let menuItems: MenuItem[] = [
  { name: "user", icon: user },
  { name: "house", icon: house },
  { name: "users", icon: users },
  { name: "calendar", icon: calendar },
  { name: "share", icon: share },
  { name: "file", icon: file },
  { name: "notebook", icon: notebook },
  { name: "heart", icon: heart },
  { name: "right", icon: right },
];

let navItems: MenuItem[] = [
  { name: "tag", icon: tag },
  { name: "close", icon: close },
  { name: "check", icon: check },
  { name: "voice", icon: voice },
  { name: "mail", icon: mail },
];

let dropdownList: string[] = [
  "Applied",
  "Shortlisted",
  "Technical Interview",
  "Opportunity Browsing",
  "Video Interview I",
  "Video Interview II",
  "Video Interview III",
  "Offer",
  "Withdrawn",
];

let filters: string[] = [
  "Personal Information",
  "Education",
  "Work Experience",
  "Activity Filter",
  "Advanced Filter",
];

let candidates: CandidateItem[] = [
  {
    name: "Aaliyah Sanderson",
    location: "Riyadh, Saudi Arabia",
    degree: "Bachelor - Cambridge University (2023 - 2023)",
  },
  {
    name: "John Doe",
    location: "Bostom, USA",
    degree: "Bachelor - MIT (2023 - 2023)",
  },
  {
    name: "Thomas Matt",
    location: "Edinburgh, UK",
    degree: "Bachelor - Harvard University (2023 - 2023)",
  },
  {
    name: "Kamilia Smith",
    location: "London, UK",
    degree: "Bachelor - Boston University (2023 - 2023)",
  },
  {
    name: "Roy Jade",
    location: "Cambridge,  UK",
    degree: "Bachelor - Yale (2023 - 2023)",
  },
  {
    name: "Ahmed Salman",
    location: "New York, USA",
    degree: "Bachelor - Cambridge University (2023 - 2023)",
  },
];

let specials: string[] = ["New York", "Marketing", "London"];

export { menuItems, navItems, dropdownList, filters, candidates, specials };
export type { CandidateItem };
