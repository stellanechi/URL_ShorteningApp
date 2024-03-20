import { FormEvent, useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/Firebase";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/Context";
import { signUp } from "../firebase/signUp";
import { toast } from "react-toastify";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      password,
    };
    if (password !== confirmPassword) {
      toast("password and confirm password does not match");
      return;
    }
    if (password.length < 6) {
      toast("password must be atleast six characters");
      return;
    }
    setLoading(true);
    const response = await signUp(formData);
    if (!response?.error) {
      setLoading(false);
      navigate("/");
    }
    setLoading(false);

    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     console.log(userCredential);
    //     navigate("/");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
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
        <form onSubmit={onSubmit}>
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
            <label htmlFor="name" className="block text-gray-600">
              Name:
            </label>
            <input
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              name="name"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

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
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              name="password"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-600">
              Confirm Password:
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              id="confirmPassword"
              name="confirmPassword"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <button
            type="submit"
            className=" px-6 py-2 w-full rounded font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500"
          >
            {loading ? "Registering..." : "Register"}
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
