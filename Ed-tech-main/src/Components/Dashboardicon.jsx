import React from 'react'
import { BookOpen, CalendarDays, ChartPie, CircleArrowRight, CircleUser, CircleUserRound, GraduationCap, LayoutGrid, ScanFace,} from "lucide-react";
import { Link } from 'react-router';

const Dashboardicon = () => {
  return (
 <div className="p-10  mt-3 md:mt-10 max-sm:flex max-sm:gap-4 max-sm:justify-center">
      <div className="mb-5 hover:transition-colors ease-in-out cursor-pointer hover:text-black  hover:translate-x-1 hover:scale-110"><Link to="/dashboard"> <LayoutGrid size={28} /></Link> </div>
      <div className="mb-5 hover:transition-colors ease-in-out cursor-pointer hover:text-black  hover:translate-x-1 hover:scale-110"><Link to="/totalstudenticon"> <GraduationCap size={32} /></Link> </div>
      <div className="mb-5 hover:transition-colors ease-in-out cursor-pointer hover:text-black  hover:translate-x-1 hover:scale-110"><Link to="/progressicon"><ChartPie size={28} /></Link></div>
      <div className="mb-5 hover:transition-colors ease-in-out cursor-pointer hover:text-black  hover:translate-x-1 hover:scale-110"> <Link to="/profileicon"><CircleUserRound size={28} /></Link> </div>
      <div className="mb-5 hover:transition-colors ease-in-out cursor-pointer hover:text-black  hover:translate-x-1 hover:scale-110"> <Link to="/spandinghouricon"><CalendarDays size={28}/></Link> </div>
      <div className="mb-5 hover:transition-colors ease-in-out cursor-pointer hover:text-black  hover:translate-x-1 hover:scale-110"> <Link to="/Famousecourse"> <BookOpen size={28}/></Link> </div>
    </div>
  )
}

export default Dashboardicon
