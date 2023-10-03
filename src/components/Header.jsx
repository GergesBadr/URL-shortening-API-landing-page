import Logo from "./Logo";
import NavBar from "./NavBar";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";

function Header() {
  const [isOpenNav, setIsOpenNav] = useState(false);

  function handleOpenNav() {
    setIsOpenNav((prev) => !prev);
  }

  return (
    <header className="center-content relative flex h-12 items-center justify-between mt-6 sm:justify-normal sm:gap-14">
      <Logo color="dark" />
      <HamburgerMenu isOpenNav={isOpenNav} handleOpenNav={handleOpenNav} />
      <NavBar isOpenNav={isOpenNav} />
    </header>
  );
}

export default Header;