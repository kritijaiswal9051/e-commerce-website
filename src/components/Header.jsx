import { CiHeart, CiSearch } from "react-icons/ci";
import img from "../assets/shop.png";
import { GrUserManager } from "react-icons/gr";
import { IoBagHandleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex bg-white w-full h-[70px] shadow-md fixed">
      <div className="w-[10%] flex items-center justify-center">
        <Link to={"/"}>
          <img src={img} alt="image" className="h-[45px]" />
        </Link>
      </div>
      <div className="w-[40%] flex items-center">
        <ul className="flex gap-10 ml-3 font-bold text-gray-600 cursor-pointer">
          <li>Men</li>
          <li>Women</li>
          <li>Beauty</li>
          <li>HomeItems</li>
        </ul>
      </div>
      <div className="w-full relative sm:w-[50%] md:w-[30%] flex justify-center items-center">
        <CiSearch size={25} className="inline absolute left-2 text-gray-500" />
        <input
          type="text"
          id="search-input"
          placeholder="Search your items"
          className="h-[40px] rounded-lg outline-none bg-gray-100 w-full pl-[40px] focus:bg-white focus:border-2 focus:border-gray-200"
        />
      </div>
      <div className="w-[20%] flex items-center gap-6 justify-center px-3">
        <div className="flex flex-col items-center">
          <GrUserManager size={20} />
          <span className="text-sm font-semibold text-gray-600">Profile</span>
        </div>
        <div className="flex flex-col items-center">
          <CiHeart size={20} />
          <span className="text-sm font-semibold text-gray-600">Wishlist</span>
        </div>
        <div className="flex flex-col items-center">
          <IoBagHandleOutline size={20} />
          <span className="text-sm font-semibold text-gray-600">Cart</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
