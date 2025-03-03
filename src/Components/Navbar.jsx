import { Link } from "react-router";

const Navbar = () => {
    return (
      <div className="navbar bg-gray-50 text-black">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/course">Course</Link></li> 
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/about">About us</Link></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl"><img src="/public/Image/MainLogo.png" alt="Logo" className="w-12" /><p className="text-black text-4xl">Ed</p><p className="text-blue-800 text-4xl">Tech</p></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-sm text-black font-semibold font-serif">
           <li><Link to="/">Home</Link></li>
            <li><Link to="/course">Course</Link></li> 
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/Userdashboard">User Dashboard</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
      <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-white text-black font-serif  font-xs rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <Link to="/profile" className="justify-between">
            Profile
          </Link>
        </li>
        <li><Link to="/login">Sign in</Link></li>
      </ul>
    </div>

      </div>
    </div>
        )
}


export default Navbar;