import { NavLink } from "react-router-dom";
import { MdHomeFilled, MdContacts } from "react-icons/md";
import { IoMdFemale } from "react-icons/io";
import { IoMdMale } from "react-icons/io";
import { FaClipboardList } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
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
          <IoMdMale />
          Men's
        </div>
      </NavLink>
      <NavLink
        to={"/womens"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="flexCenter gap-x-1">
          <IoMdFemale />
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
          <MdAdd />
          Add Product
        </div>
      </NavLink>
    </nav>
  );
}

export default Navbar;
