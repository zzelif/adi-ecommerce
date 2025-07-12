import Link from "next/link";
import { ChevronsLeftRightEllipsis } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background sticky top-0 z-50 w-full border-b py-3">
      <nav className="container flex items-center justify-between px-2 pl-10 shadow-sm sm:px-4 lg:px-6">
        <div className="navbar-start mx-auto gap-6">
          <Button
            asChild
            variant={"ghost"}
            className="inline-flex gap-2 hover:bg-transparent"
          >
            <Link className="text-md font-semibold text-slate-950" href="/">
              <ChevronsLeftRightEllipsis />
              444
            </Link>
          </Button>
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
      </nav>
    </header>
  );
};

export default Header;
