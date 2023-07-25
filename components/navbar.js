import Link from "next/Link";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logoipsum-288.svg" width={198} height={70} />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/hashiras">
        <a>HashiraList</a>
      </Link>
    </nav>
  );
};

export default Navbar;
