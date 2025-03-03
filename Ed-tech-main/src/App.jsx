import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Routes/Home'
import About from './Routes/About'
import { Route, Routes } from 'react-router'
import Course from './Routes/Course'
import ShowCourse from './Routes/Course/ShowCourse'
import Frontend from './Routes/webdev-course/Frontend'
import AdminDashboard from './Routes/Daseboard/AdminDashboard'
import Totalstudenticon from './Routes/Daseboard/Totalstudenticon'
import Progressicon from './Routes/Daseboard/Progressicon'
import Profileicon from './Routes/Daseboard/Profileicon'
import Spandighouricon from './Routes/Daseboard/Spandighouricon'
import Famousecourseicon from './Routes/Daseboard/Famousecourseicon'
import Registragion from './Routes/Login/Registragion'
import Login from './Routes/Login/Login'
import Backend from './Routes/webdev-course/Backend'
import Fullstack from './Routes/webdev-course/Fullstack'
import Profile from './Routes/Profile/Profile'
import Progress from './Routes/Daseboard/Userdashboard/Progress'
import Userdashboardf from './Routes/Daseboard/Userdashboard/Userdashboardf'
import UserProfile from './Routes/Daseboard/Userdashboard/UserProfile'
import UserSpendigtime from './Routes/Daseboard/Userdashboard/UserSpendigtime'
import Adminpanal from './Routes/Admin/Adminpanal'
function App() {
  

  return (
    <div className='bg-white overflow-x-clip' >
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />   
      <Route path='/dashboard'element={<AdminDashboard/>}/>
      <Route path="/course" element={<Course />} />
      <Route path='/courspage' element={<ShowCourse/>}/>
      <Route path='/frontend' element={<Frontend/>}/>
      <Route path='/backend' element={<Backend/>}/>
      <Route path='/fullstack' element={<Fullstack/>}/>
      <Route path="/totalstudenticon" element={<Totalstudenticon/>}/>
      <Route path='/progressicon' element={<Progressicon/>}/>
      <Route path='/profileicon' element={<Profileicon/>}/>
      <Route path='/spandinghouricon' element={<Spandighouricon/>}/>
      <Route path='/Famousecourse' element={<Famousecourseicon/>}/>
      <Route path='/Userdashboard' element={<Userdashboardf/>}/>
      <Route path='/registration' element={<Registragion/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/uprogress' element={<Progress/>}/>
      <Route path='/userprofile' element={<UserProfile/>}/>
      <Route path='/userspendinghour' element={<UserSpendigtime/>}/>
      <Route path='/Adminpanal' element={<Adminpanal/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App
