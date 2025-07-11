import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky backdrop-blur">
      <div className="navbar bg-base-100 justify-between shadow-sm">
        <div className="navbar-start">
          <Link className="btn btn-ghost text-md text-blue-500" href="/">
            444
          </Link>
        </div>
        <div className="navbar-end gap-6">
          <Link className="btn btn-ghost w-auto" href="/">
            Home
          </Link>
          <Link className="btn btn-ghost w-auto" href="/products">
            Products
          </Link>
          <Link className="btn btn-ghost w-auto" href="/prices">
            Pricelist
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
