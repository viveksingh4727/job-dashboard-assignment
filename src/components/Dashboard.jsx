
import { Jobtitle } from "./Jobtitle";
import { JobSkills } from "./JobSkills";
import { JobAbout } from "./JobAbout";
import { JobCompanyDetails } from "./JobCompanyDetails";
import { SideBar } from "./Sidebar";

export const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-3/4  border-r bg-white ">
        <Jobtitle />
        <JobSkills />
        <JobAbout />
        <JobCompanyDetails />
      </div>
      <div className="w-1/4 ">
        <SideBar />
      </div>
    </div>
  );
};
