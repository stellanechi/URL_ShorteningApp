import { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/Firebase";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/Context";
// import Loginimage from "../assets/loginImage.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [user, setUser] = useState(null);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  // PROTECTED ROUTE

  // END OF PROTECTED ROUTE

  const signIn = (e: any) => {
    //: React.FormEvent<HTMLFormElement>
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/");
        console.log(userCredential);
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
    // <div className="flex">
    //   <div>
    //     {" "}
    //     <img src={Loginimage} alt="image" />
    //   </div>
    <div className=" flex items-center justify-center py-24 px-10">
      <div className="bg-white px-10  md:px-20 py-16  rounded shadow-md w-full md:w-[34%] ">
        <h2 className="flex justify-center text-3xl font-black mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Welcome Back
        </h2>
        <form onSubmit={signIn}>
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
          <span>
            <button
              type="button"
              onClick={signIn}
              className="px-6 py-2 w-full rounded font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 ..."
            >
              Login
            </button>
          </span>
          <div>
            <p className="flex justify-center mt-1 ">
              {" "}
              Don't have an account?{" "}
              <Link to="/signup">
                {" "}
                <span className="text-blue-500"> &nbsp; Signup</span>{" "}
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
    // </div>
  );
};

export default Login;
