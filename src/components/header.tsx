import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur">
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
          <ul className="menu menu-horizontal">
            <li>
              <details>
                <summary className="font-semibold">Products</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <Link className="btn-ghost w-auto" href="/products/candles">
                      Candles
                    </Link>
                  </li>
                  <li>
                    <Link className="btn-ghost w-auto" href="/products/magnets">
                      Magnets
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
          <Link className="btn btn-ghost w-auto" href="/prices">
            Pricelist
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
