function NavBar({ isOpenNav }) {
  return (
    <nav
      id="navbar-menu"
      className={`sm:nav-reset absolute left-1/2 top-16 z-50 w-[90%] -translate-x-1/2 divide-y
      divide-gray/30 rounded-lg bg-dark-violet px-6 duration-1000 ${
        isOpenNav
          ? "visible translate-y-0"
          : "invisible top-[-100%] translate-y-[-100%]"
      } `}
    >
      {/* Main links */}
      <ul className="space-y-4 py-8 text-center sm:flex sm:gap-5 sm:space-y-0 sm:py-0">
        <li>
          <a href="#" className="navlink">
            Features
          </a>
        </li>
        <li>
          <a href="#" className="navlink">
            Pricing
          </a>
        </li>
        <li>
          <a href="#" className="navlink">
            Resources
          </a>
        </li>
      </ul>
      {/* Login and Sign up links */}
      <ul className="space-y-4 py-8 text-center sm:flex sm:items-center sm:gap-5 sm:space-y-0 sm:py-0">
        <li>
          <a href="#" className="navlink">
            Login
          </a>
        </li>
        <li>
          <button className="btn btn-primary block w-full rounded-full">
            Sign Up
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
