import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t-4  py-4 flex gap-6  justify-around">
      <div className="text-lg ml-10 font-semibold">
        <ul>
          <li>Contact Us</li>
          <li>FAQ</li>
          <li>Returns</li>
          <li>Privacy policy</li>
        </ul>
      </div>
      <div className="text-lg ml-10 font-semibold">
        <ul>
          <li>Terms Of Use</li>
          <li>Careers</li>
          <li>Cancellation</li>
          <li>T&C</li>
        </ul>
      </div>
      <div className="mr-10 text-center">
        <h3 className="font-bold text-lg mb-5">Keep in touch</h3>
        <div className="flex gap-5">
          <Link to={"/"}>
            <FaFacebook size={25} />
          </Link>
          <Link to={"/"}>
            <FaTwitter size={25} />
          </Link>
          <Link to={"/"}>
            <IoLogoWhatsapp size={25} />
          </Link>
          <Link to={"/"}>
            <FaLinkedin size={25} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
