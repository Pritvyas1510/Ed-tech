import { CalendarDays, ChartPie, CircleUserRound, LayoutGrid } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const Userdashboardicon = () => {
  return (
    <div className=''>
       <div className="p-10 mt-3 md:mt-10 max-sm:flex max-sm:gap-4 max-sm:justify-center">
      <div className="mb-5 hover:transition-colors ease-in-out cursor-pointer hover:text-black  hover:translate-x-1 hover:scale-110"><Link to="/Userdashboard"> <LayoutGrid size={28} /></Link> </div>
      <div className="mb-5 hover:transition-colors ease-in-out cursor-pointer hover:text-black  hover:translate-x-1 hover:scale-110"><Link to="/uprogress"><ChartPie size={28} /></Link></div>
      <div className="mb-5 hover:transition-colors ease-in-out cursor-pointer hover:text-black  hover:translate-x-1 hover:scale-110"> <Link to="/userprofile"><CircleUserRound size={28} /></Link> </div>
      <div className="mb-5 hover:transition-colors ease-in-out cursor-pointer hover:text-black  hover:translate-x-1 hover:scale-110"> <Link to="/userspendinghour"><CalendarDays size={28}/></Link> </div>
    </div>
    </div>
  )
}

export default Userdashboardicon
