import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <nav>
      <div className="fixed left-4 top-3 cursor-pointer text-[40px] z-20 text-gray-600">
        {!open && (
          <ion-icon
            name="menu-outline"
            onClick={() => {
              return handleOpen();
            }}
          ></ion-icon>
        )}
        {open && (
          <ion-icon
            name="close-outline"
            onClick={() => {
              return handleOpen();
            }}
          ></ion-icon>
        )}
      </div>
      {open && (
        <div className="fixed bg-[#8873EF]/60 text-white w-full h-[42vh] z-10 backdrop-blur-2xl">
          <ul className="flex flex-col mt-20 ml-6 font-mono text-xl">
            <li className="mb-10 font-mono flex items-center">
              <div className="p-6 text-[#8873EF] bg-white rounded-[50%] w-4 h-4 flex justify-center items-center font-semibold">
                k
              </div>
              <div className="ml-4">
                <p>Kenechukwu</p>
                <p className="text-sm font-light">personal</p>
              </div>
            </li>
            <li className="mb-2 font-semibold">About</li>
            <li className="mb-2">Services</li>
            <li className="mb-2">Contact Us</li>
            <li className="mb-2 text-sm mt-12 py-2 px-4 border-white rounded-[1rem] border-solid border-2 w-[50%] flex items-center justify-center">
              <a href="">See Portfolio</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
