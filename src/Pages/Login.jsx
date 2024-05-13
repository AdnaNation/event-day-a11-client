import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { signIn, setUser, googleSignIn } = useAuth();
  const [loginError, setLoginError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // reset error
    setLoginError("");
    signIn(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        setUser(loggedInUser);
        Swal.fire({
          title: "Congrats!",
          text: "You have successfully logged in",
          icon: "success",
        });
        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        setLoginError(
          "Can't find the user with the email/password you provided"
        );
      });
  };

  const handleGoogleSingIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser.photoURL);
        setUser(loggedInUser);
        Swal.fire({
          title: "Congrats!",
          text: "You have successfully logged in",
          icon: "success",
        });
        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>EventDay | Login</title>
      </Helmet>
      <div className="bg-white bg-opacity-75 p-2 md:p-6 md:w-3/4 lg:w-2/4 mx-auto rounded-md mt-10">
        <h2 className="text-2xl md:text-3xl font-extrabold font-platypi text-center underline mb-2">
          Login Please
        </h2>

        <div className="flex justify-center space-x-4">
          <button
            onClick={handleGoogleSingIn}
            aria-label="Log in with Google"
            className="p-3 rounded-lg btn w-full bg-white shadow-xl my-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            Log in with Google
          </button>
        </div>
        <div className="flex items-center pt-4 space-x-1 mt-4">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          <p className="px-3 text-sm dark:text-gray-600 flex items-center">
            <span>
              <hr className="w-20 border-gray-300" />
            </span>
            <p className="text-black font-medium">
              Login with Email and Password
            </p>
            <span>
              <hr className="w-20 border-gray-300" />
            </span>
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        </div>

        <form onSubmit={handleSignIn}>
          <div className="mb-2">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <label className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="input input-bordered w-full shadow-xl"
                />
              </label>
            </div>
          </div>

          <div className="mb-2">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <label className="input-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered w-full shadow-xl"
                />
              </label>
            </div>
          </div>

          <input
            type="submit"
            value="Login"
            className="btn btn-block btn-primary text-white my-2"
          />

          {loginError && (
            <p className="text-red-700 text-center">{loginError}</p>
          )}

          <p className="text-center mb-3">
            Don&apos;t have a account? Please{" "}
            <Link to="/register" className="underline text-blue-800">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
