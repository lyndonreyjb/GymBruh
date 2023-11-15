import { Link } from "react-router-dom";
import { GiMuscleUp } from "react-icons/gi";
const Navbar = () => {
  return (
    <div className="navbar  fixed  z-10 bg-black drop-shadow-sm">
      <Link to="/" className="text-white">
        <div className="absolute hidden font-medium lg:flex px-14 normal-case text-xl text-green-400">
          Gym
          <GiMuscleUp />
          Bruh
        </div>
      </Link>

      <div className="navbar-start lg:hidden">
        <div className="dropdown">
          <div className="drawer ">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label
                htmlFor="my-drawer"
                className=" lg:hidden bg-primary btn  drawer-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"></label>

              <ul className="text-xl uppercase menu p-4 w-80 min-h-full bg-primary font-medium ">
                <li>
                  <Link to="/" className="text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="exercises" className="text-white">
                    Exercises
                  </Link>
                </li>
                <li>
                  <Link to="about" className="text-white">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-10">
          {/* <img src={logo} className="h-full w-full" /> */}
        </div>
      </div>
      <div className="mx-auto navbar-center hidden lg:flex text-white font-semibold">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/" className="text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="exercises" className="text-white">
              Exercises
            </Link>
          </li>
          <li>
            <Link to="about" className="text-white">
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
