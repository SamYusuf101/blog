import Link from "next/link";

function Header() {
  return (
    <header>
      <div className="flex">
        <Link href="/">
          <img
            className=" w-44 h-20 object-contain cursor-pointer"
            src="https://www.pngitem.com/pimgs/m/175-1757329_my-blog-logo-png-transparent-png.png"
            alt=""
            w-30
          />
        </Link>
        <div className="hidden md:inline-flex items-center space-x-5 justify-center">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="text-white bg-green-600 rounded px-4 py-1">Follow</h3>
        </div>
      </div>
      <div></div>
    </header>
  );
}

export default Header;
