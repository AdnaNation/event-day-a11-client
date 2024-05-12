import { MdOutlineCelebration } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut().then().catch();
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>

      {user && (
        <>
          <li>
            <details className="relative z-10">
              <summary>Dashboard</summary>
              <ul>
                <li>
                  <NavLink className="w-[160px]" to="/addService">
                    Add Service
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/manageService">Manage Service</NavLink>
                </li>
                <li>
                  <NavLink to="/bookedServices">Booked-Services</NavLink>
                </li>
                <li>
                  <NavLink to="/serviceToDo">Service-To-Do</NavLink>
                </li>
              </ul>
            </details>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 px-4 shadow-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link
          to="/"
          className=" flex items-center text-xl md:text-3xl font-platypi"
        >
          <span className="text-sky-600 flex items-center">
            <MdOutlineCelebration /> Event
          </span>
          Day
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex gap-3 items-center">
            <div id="tooltip-1">
              <img
                alt=""
                className="w-8 h-8 md:w-10 md:h-10 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 dark:ring-violet-600 dark:ring-offset-gray-100 "
                src={user?.photoURL}
              />
            </div>

            <button
              onClick={handleLogOut}
              className="btn bg-blue-950 text-white p-1 md:p-2"
            >
              Log Out
            </button>
          </div>
        ) : (
          <>
            <Link to="login" className="btn bg-blue-500 text-white p-1 md:p-2">
              Login
            </Link>
            <Link
              to="register"
              className="btn bg-pink-400 text-white p-1 md:p-2"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
