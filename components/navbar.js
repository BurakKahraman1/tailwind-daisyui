import Title from "./Title";
import Link from "next/link";
const Navbar = () => {
  return (
<div className="navbar bg-base-100">
  <div className="flex-1">
   <Link href='/'><a className="btn btn-ghost normal-case text-xl"><Title>B-Shop</Title></a></Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li><Link href="/"><a>Wallet</a></Link></li>
      <li tabIndex="0">
        <a>
          Other
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100">
        <li><Link href='/'><a> Filters </a></Link></li>
        <li><Link href='/'><a> About </a></Link></li>
        </ul>
      </li>
      <li><a>Basket</a></li>
    </ul>
  </div>
</div>
  );
};

export default Navbar;
