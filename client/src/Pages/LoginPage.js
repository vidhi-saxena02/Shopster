import { useState } from "react";
import cart from "../assets/cart.gif";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //TODOS: CALL BACKEND

    setEmail("");
    setPassword("");
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePasword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex flex-row  justify-between items-center">
      <img src={cart} alt="cart" className="ml-10" />

      <div className="flex flex-col justify-between mr-32">
        <div className="text-3xl font-bold text-blue-900">Welcome Back</div>
        <div className="w-full max-w-xs">
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={email}
                type="text"
                onChange={handleEmail}
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={password}
                onChange={handlePasword}
                type="password"
                placeholder="******************"
              />
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
