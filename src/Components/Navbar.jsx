import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Our Services" },
  { to: "/projects", label: "Our Projects" },
  { to: "/certifications", label: "Our Certifications" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="container lg:container_lg xl:container fixed w-full left-0 right-0 top-0 z-50 bg-black">
      <div className=" mx-auto flex items-center justify-between h-16 px-4">

        {/* 🟢 Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="logo"
            className="h-[55px] w-[55px] rounded-full object-cover"
          />
          <span className="text-xl font-bold text-white">
            4 Seasons
          </span>
        </Link>

        {/* 🟡 Desktop Links */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;

            return (
              <Link
                key={link.to}
                // to={link.to}
                className={`relative text-md transition-all duration-300
                  ${
                    isActive
                      ? "text-white font-bold opacity-100 after:content-[''] after:absolute after:left-[50%] after:transform after:translate-x-[-50%] after:-bottom-2 after:w-[5px] after:h-[5px]  after:bg-[#9D1A10] after:rounded-full"
                      : "text-white opacity-60 hover:opacity-100 font-light"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
          {/* 🔵 Button */}
        </nav>
          <div>
            <Link
              // to="/contact"
              className="btn hidden lg:block text-white bg-[#9D1A10] rounded-xl font-light text-md uppercase"
            >
              Contact Us
            </Link>
          </div>

        {/* 📱 Mobile button */}
        <button
          className="lg:hidden text-white cursor-pointer" style={{ paddingRight:"20px" }} 
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* 📱 Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-black/90 border-t border-white/10">
          <div className="flex flex-col gap-5" style={{ padding:"30px 0" }}>

            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`text-sm transition
                    ${
                      isActive
                        ? "text-white border-l-4 border-red-600 pl-2"
                        : "text-white opacity-60 font-light"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
              <Link
                onClick={() => setOpen(false)}
                className="btn text-center w-fit bg-[#9D1A10] text-white rounded-lg uppercase"
              >
                Contact Us
              </Link>
          </div>
        </div>
      )}
    </header>
  );
}
