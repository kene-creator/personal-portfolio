const Navbar = () => {
  return (
    <nav>
      <div className="fixed left-4 top-3 cursor-pointer text-[40px]">
        <ion-icon name="menu-outline"></ion-icon>
      </div>
      <div className="fixed bg-[#8873EF]/60 text-white w-full h-[40vh]">
        <ul className="flex flex-col mt-20 ml-6">
          <li>About</li>
          <li>Services</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
