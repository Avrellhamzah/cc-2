import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-black pt-3 sm:pt-10 lg:pt-10">
      <footer className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="flex flex-col items-center border-t pt-6">
          <nav className="mb-4 flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
            <Link
              href="/About"
              className="text-white transition duration-100 hover:text-white active:text-gray-800 "
            >
              About
            </Link>
            <Link
              href="/Services"
              className="text-white transition duration-100 hover:text-white active:text-gray-800 "
            >
              Services
            </Link>
            <Link
              href="/Teams"
              className="text-white transition duration-100 hover:text-white active:text-gray-800 "
            >
              Teams
            </Link>
          </nav>

          <div className="flex gap-4">
            <Link
              href="/"
              className="text-white transition duration-100 hover:text-white active:text-gray-800"
            >
              <FaInstagram />
            </Link>
          </div>
          {/* SosMed End */}
        </div>
        <div className="py-8 text-center text-sm text-white">
          © 2024 - Present By SPEEDSUR9E Garage
        </div>
      </footer>
    </div>
  );
};

export default Footer;
