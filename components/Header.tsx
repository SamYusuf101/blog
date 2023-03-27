import Link from "next/link";
import Image from "next/image";
import logaImg from "../public/loga.png";

function Header() {
  return (
    <header className=" flex justify-between p-5 max-w-8xl mx-auto">
      <div className="flex space-x-5">
        <div className=" w-20 h-35 object-contain cursor-pointer ">
          <Link href="/">
            <Image src={logaImg} alt="/" />
          </Link>
        </div>
        <div className="hidden md:inline-flex items-center space-x-5 justify-center">
          <h3 className="text-black">About</h3>
          <h3 className="text-black">Contact</h3>
          <h3 className="text-white bg-green-600 rounded-full px-4 py-1">
            Follow
          </h3>
        </div>
      </div>
      <div className="flex items-center space-x-5 text-green-500">
        
      </div>
    </header>
  );
}

export default Header;
