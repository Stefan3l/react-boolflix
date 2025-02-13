import SearchBar from "./SearchBar";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className=" bg-black">
      <div className="container mx-auto  flex justify-between bg-black px-3.5 py-5">
        <img className="w-1/8" src="../image/Boolflix.png" alt="boolflix" />
        <NavBar />
        <SearchBar />
      </div>
    </header>
  );
}
