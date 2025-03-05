

import React from "react";
import BarChart from "../../Components/Barchart";
import Famouse from "../../Components/Famouse";
import Dashboardicon from "../../Components/Dashboardicon";
import Totalstudent from "../../Components/Totalstudent";
import Progress from "../../Components/Progress";
import Profile from "../../Components/Profile";
import Spendinghour from "../../Components/Spendinghour";
import Famouscourses from "../../Components/Famouscourses";
import Adminnavbar from "../Adminpanal/Adminnavbar";


const AdminDashboard = () => {
  return (
    <div>
      <Adminnavbar/>
    <div className="flex md:flex-row flex-col ">
      <Dashboardicon/>
    <div className="h-full w-full  ">
        <div className="justify-self-center mx-5 gap-y-5">
        <div className="flex md:flex-row flex-col pt-7 gap-y-5 gap-x-3">
           <Totalstudent/>
           <Progress />
           <Profile/>
        
        </div>
            <div className="flex md:flex-row flex-col gap-y-5 gap-x-2 my-3">
              <Spendinghour/>
              <Famouscourses/>

            </div>
            </div>
        
    </div>
    </div>
    </div>
  );
};

export default AdminDashboard;
