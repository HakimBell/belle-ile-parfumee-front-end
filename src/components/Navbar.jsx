import { NavLink } from "react-router-dom";
import { MdHomeFilled, MdCategory, MdShop2, MdContacts } from "react-icons/md";
function Navbar({ containerStyles }) {
  return (
    <nav className={`${containerStyles}`}>
      <NavLink to={"/"}>
        <div className="FlexCenter gap-x-1">
          <MdHomeFilled />
          Home
        </div>
      </NavLink>
      <NavLink to={"/mens"}>
        <div className="FlexCenter gap-x-1">
          <MdCategory />
          Men's
        </div>
      </NavLink>
      <NavLink to={"/womens"}>
        <div className="FlexCenter gap-x-1">
          <MdShop2 />
          Women's
        </div>
      </NavLink>
      <NavLink to={"/kids"}>
        <div className="FlexCenter gap-x-1">
          <MdContacts />
          Kid's
        </div>
      </NavLink>
    </nav>
  );
}

export default Navbar;
