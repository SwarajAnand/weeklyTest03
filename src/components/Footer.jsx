import { NavLink, useLocation } from "react-router-dom";
import { SiConvertio } from "react-icons/si";
import { ImBoxRemove } from "react-icons/im";
import { CiSearch, CiSettings } from "react-icons/ci";
import { GiLifeSupport } from "react-icons/gi";

let ptag = "w-[10px] m-auto text-xl";
let footerCss = "text-center w-1/5 ";

const Footer = () => {
  const location = useLocation();
  const currentRoute = location.pathname;

  // console.log(location, currentRoute);

  return (
    <div className="fixed flex justify-evenly p-2 w-full bottom-0 bg-[#121420] z-20">
      <NavLink
        to="/app/convert"
        className={
          currentRoute === "/app/convert" ? `${footerCss} text-[#48CAE4]` : footerCss + "text-white"
        }
      >
        <p className={ptag}>
          <SiConvertio />
        </p>
        <p>Convert</p>
      </NavLink>

      <NavLink
        to="/app/remove"
        className={
          currentRoute === "/app/remove" ? `${footerCss} text-[#48CAE4]` : footerCss + "text-white"
        }
      >
        <p className={ptag}>
          <ImBoxRemove />
        </p>
        <p>Remove</p>
      </NavLink>

      <NavLink
        to="/app/search"
        className={
          currentRoute === "/app/search" ? `${footerCss} text-[#48CAE4]` : footerCss + "text-white"
        }
      >
        <p className={ptag}>
          <CiSearch />
        </p>
        <p>Search</p>
      </NavLink>

      <NavLink
        to="/app/settings"
        className={
          currentRoute === "/app/settings" ? `${footerCss} text-[#48CAE4]` : footerCss + "text-white"
        }
      >
        <p className={ptag}>
          <CiSettings value={{ color: "blue",}}/>
        </p>
        <p>Settings</p>
      </NavLink>

      <NavLink
        to="/app/support"
        className={
          currentRoute === "/app/support" ? `${footerCss} text-[#48CAE4]` : footerCss + "text-white"
        }
      >
        <p className={ptag}>
          <GiLifeSupport />
        </p>
        <p>Support</p>
      </NavLink>
    </div>
  );
};

export default Footer;
