import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/Firebase";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/Context";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const signup = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, []);
  return (
    <div className=" flex items-center justify-center py-24 px-10">
      <div className="bg-white px-10 py-14 md:p-10 rounded shadow-md  w-full md:w-[34%]">
        <h2 className="flex justify-center text-3xl font-black mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Create Acoount
        </h2>
        <form onSubmit={signup}>
          {/* <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Enter Name:
            </label>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              name="password"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div> */}

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              Enter Email:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              name="email"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Enter Password:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              name="password"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Confirm Password:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              name="password"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <button
            type="submit"
            onClick={signup}
            className=" px-6 py-2 w-full rounded font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500"
          >
            Register
          </button>
          <div>
            <p className="flex justify-center mt-1 ">
              {" "}
              Have an account?{" "}
              <Link to="/login">
                {" "}
                <span className="text-blue-500"> &nbsp; Login </span>{" "}
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
