import { NavLink } from "react-router-dom";
import { MdHomeFilled, MdCategory, MdShop2, MdContacts } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
function Navbar({ containerStyles }) {
  return (
    <nav className={`${containerStyles}`}>
      <NavLink
        to={"/home"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="flexCenter gap-x-1">
          <MdHomeFilled />
          Home
        </div>
      </NavLink>
      <NavLink
        to={"/mens"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="flexCenter gap-x-1">
          <MdCategory />
          Men's
        </div>
      </NavLink>
      <NavLink
        to={"/womens"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="flexCenter gap-x-1">
          <MdShop2 />
          Women's
        </div>
      </NavLink>
      <NavLink
        to={"/mixte"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="flexCenter gap-x-1">
          <MdContacts />
          Mixte
        </div>
      </NavLink>

      <NavLink
        to={"/listproduct"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="flexCenter gap-x-1">
          <FaClipboardList />
          Product List
        </div>
      </NavLink>
      <NavLink
        to={"/addproduct"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="flexCenter gap-x-1">
          <FaClipboardList />
          Add Product
        </div>
      </NavLink>
    </nav>
  );
}

export default Navbar;
