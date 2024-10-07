import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container mx-auto w-full">
        <div>
          <div>
            <Link to="/">
              <h1 className="underline font-bold">HOTELIER</h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
