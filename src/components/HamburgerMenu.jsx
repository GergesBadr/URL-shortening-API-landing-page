import hamburgerMenuImg from "../assets/images/icon-hamburger-menu.svg";

function HamburgerMenu({ isOpenNav, handleOpenNav }) {
  return (
    <button
      onClick={handleOpenNav}
      className={`duration-200 sm:hidden ${
        isOpenNav ? "rotate-90" : "rotate-0"
      }`}
      // Make it accessible
      aria-expanded={isOpenNav}
      aria-label="toggle menu"
      aria-controls="navbar-menu"
    >
      <img src={hamburgerMenuImg} alt="hamburger menu" aria-hidden="true" />
    </button>
  );
}

export default HamburgerMenu;
