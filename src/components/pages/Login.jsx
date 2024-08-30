import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handler = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };
  return (
    <div className="flex min-h-screen justify-center items-center bg-gray-100">
      <div className="w-full max-w-md bg-white-500 rounded-xl p-8 space-y-7 shadow-md">
        <h2 className="text-3xl font-medium text-center text-gray-700">
          welcome
        </h2>
        <form onSubmit={handler} className="space-y-6">
          <div className="">
            <label
              htmlFor="email"
              className="block text-md font-medium text-blue-500"
            >
              Email Address
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              placeholder="jhon@example.com"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 mt-2 rounded-lg text-slate-500 bg-gray-200 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
          </div>
          <div className="">
            <label
              htmlFor="password"
              className="block text-md font-medium text-blue-500"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="*****"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 mt-2 rounded-lg text-slate-500 bg-gray-200  focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-5 py-3 bg-blue-500 hover:bg-blue-700 text-white hover:font-bold rounded-lg"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
