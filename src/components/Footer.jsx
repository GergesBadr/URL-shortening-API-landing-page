import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import instagram from "../assets/images/icon-instagram.svg";
import pinterest from "../assets/images/icon-pinterest.svg";

import Logo from "./Logo";

function Footer() {
  return (
    <footer className=" bg-very-dark-violet py-10  ">
      <div className="center-content flex flex-col items-center text-center lg:flex-row lg:items-start lg:justify-between lg:text-left">
        <div className="mb-6">
          <Logo color="light" />
        </div>
        <div className="space-y-6 lg:flex lg:gap-12 lg:space-y-0">
          <div>
            <p className="mb-4 text-lg font-medium text-white">Features</p>
            <ul className="space-y-3 text-gray [&>li>a:hover]:text-cyan [&>li>a]:duration-200">
              <li>
                <a href="#">Link Shortening</a>
              </li>
              <li>
                <a href="#">Branded Links</a>
              </li>
              <li>
                <a href="#">Analytics</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-lg font-medium text-white">Resources</p>
            <ul className="space-y-3 text-gray [&>li>a:hover]:text-cyan [&>li>a]:duration-200">
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Developers</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-lg font-medium text-white">Company</p>
            <ul className="space-y-3 text-gray [&>li>a:hover]:text-cyan [&>li>a]:duration-200">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="mx-auto flex items-center justify-center gap-5">
              <li>
                <a href="#">
                  <img src={facebook} alt="facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={twitter} alt="twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={pinterest} alt="pinterest" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={instagram} alt="instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
