import { useState } from "react";

import { Link } from "react-router-dom";

function NavBar() {
  const [logged, setLogged] = useState(true);
  return (
    <div className="flex justiy-between mt-4 mx-2 gap-32 items-end">
      <div className="text-5xl font-bold mr-10 ml-10 text-blue-300">
        Shopster
      </div>

      <div className="flex justify-between items-end gap-10 mx-48">
        <Link to="/">
          <div className="text-2xl hover:text-sky-200 cursor-pointer">Home</div>
        </Link>
        <div className="text-2xl hover:text-sky-200 cursor-pointer ">
          Orders
        </div>
        <div className="text-2xl hover:text-sky-200 cursor-pointer">
          AboutUs
        </div>
      </div>
      <div className="relative flex items-end ml-28 ">
        <img
          src="https://images.unsplash.com/photo-1624669240815-815a23372f37?"
          alt="baby with headphones"
          className="w-12 h-12 rounded-full object-cover"
        />
        <Link to={logged ? "/login" : "/signup"}>
          <div className="text-xl cursor-pointer hover:font-semibold">
            Account
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
