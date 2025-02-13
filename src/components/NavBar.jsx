import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <ul className="text-white flex gap-4 items-center font-medium">
      <li>
        <NavLink to="/categories">Categories</NavLink>
      </li>
      <li>
        <NavLink to="/movies">Movies</NavLink>
      </li>
      <li>
        <NavLink to="/series">Series</NavLink>
      </li>
      <li>
        <NavLink to="/kids">Kids</NavLink>
      </li>
      <li>
        <NavLink to="/Adults">Adults</NavLink>
      </li>
    </ul>
  );
}
