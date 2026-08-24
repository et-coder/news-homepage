import { useState, useEffect } from "react";
import Logo from "../assets/logo.svg";
import Menu from "../assets/icon-menu.svg";
import closeMenu from "../assets/icon-menu-close.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navItems = ["Home", "New", "Popular", "Trending", "Categories"];

  return (
    <header className="flex justify-between items-center mx-auto">
      <img src={Logo} alt="Logo" className="w-[46px] lg:w-[65px]" />
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 rounded-lg hover:bg-gray-100 md:hidden"
        aria-label="Open menu"
      >
        <img
          src={Menu}
          alt="Mobile menu"
          className="w-[40px] h-[17px] lg:hidden hover:pointer"
        />
      </button>

      <ul className="hidden lg:flex lg:block gap-10 lg:text-dark-grayish-blue">
        {navItems.map((item) => (
          <li className="text-dark hover:text-soft-red hover:cursor-pointer">
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>

      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Full-height menu panel */}
      <nav
        className={`fixed inset-y-0 right-0 w-72 bg-off-white z-50 transform transition-transform duration-300 ease-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex items-center justify-end p-5">
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100"
            aria-label="Close menu"
          >
            <img src={closeMenu} alt="Close" />
          </button>
        </div>

        {/* Nav links - fills remaining height */}
        <ul className="flex flex-col h-[calc(100dvh-65px)] overflow-y-auto p-6 mt-8 space-y-1 flex flex-col gap-4">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href="#"
                onClick={() => setIsOpen(false)}
                className=" text-gray-700 hover:bg-gray-100 hover:text-black transition-colors font-bold text-xl"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
