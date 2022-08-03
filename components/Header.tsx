import Link from "next/link";
import Image from "next/image";
import logaImg from "../public/loga.png";

function Header() {
  return (
    <header className=" flex justify-between p-5 max-w-8xl mx-auto">
      <div className="flex space-x-5">
        <div className=" w-20 h-30 object-contain cursor-pointer ">
          <Link href="/">
            <Image src={logaImg} alt="/" />
          </Link>
        </div>
        <div className="hidden md:inline-flex items-center space-x-5 justify-center">
          <h3>About</h3>
          <h3 className="border-">Contact</h3>
          <h3 className="text-white bg-green-600 rounded-full px-4 py-1">
            Follow
          </h3>
        </div>
      </div>
      <div className="flex items-center space-x-5 text-green-600">
        <h3>Sign In</h3>
        <h3 className="border px-4 py-2 rounded-full border-green-600 text-center">
          Get Started
        </h3>
      </div>
    </header>
  );
}

export default Header;