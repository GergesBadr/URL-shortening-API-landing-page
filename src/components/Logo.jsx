import darkLogo from "../assets/images/logo.svg";
import lightLogo from "../assets/images/light-logo.svg";
function Logo({ color }) {
  return <img src={color === "dark" ? darkLogo : lightLogo} alt="shortly" />;
}

export default Logo;
