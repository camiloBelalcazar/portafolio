import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClickShowModal = () => setShowModal(!showModal);

  return (
    <header className="text-lg flex align-center justify-between p-6 gap-2 border-b md:px-8 bg-gradient-to-r from-slate-500">
      <Link to="/" className="text-cyan-300 font-bold text-3xl">
        Camilo <span className=" font-bold text-blue-200">B.</span>{" "}
      </Link>

      <nav
        className={`absolute bg-black/90 flex md:top-4 md:right-4  gap-3 ${
          showModal
            ? "py-6 w-full flex-col items-center top-[80px] left-0"
            : "-top-[600px]"
        }`}
      >
        <Link
          className="bg-[#5c5c5cd5] hover:bg-[#8d8d8dd5] p-2 text-center  w-16 transition-bg"
          to="/work"
        >
          Work
        </Link>

        <Link className="bg-[#21bfe6] hover:bg-[#61c1da] p-2" to="/skills">
          Skills
        </Link>

        <Link className="bg-[#5221E6] hover:bg-[#845cff] p-2" to="/contact">
          Contact
        </Link>
      </nav>

      <button className="text-xl md:hidden">
        {showModal ? (
          <i onClick={handleClickShowModal} className="bx bx-x"></i>
        ) : (
          <i
            onClick={handleClickShowModal}
            className="bx bx-menu-alt-right"
          ></i>
        )}
      </button>
    </header>
  );
};

export default Header;
