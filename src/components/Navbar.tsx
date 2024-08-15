import { satoshiBold } from "@/components/utils/font";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-[10vh] flex items-center ">
      <Link
        href="#intro"
        className={`${satoshiBold.className} text-2xl tracking-[4px] italic`}
      >
        {"<dR/>"}
      </Link>
    </nav>
  );
};

export default Navbar;
