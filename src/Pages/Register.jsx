import { GoogleAuthProvider, updateProfile } from "firebase/auth";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const navigate = useNavigate();
  const { createUser, logOut, googleSignIn, setUser } = useAuth();
  const [registerError, setRegisterError] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(name, email, photo, password);

    // reset error
    setRegisterError("");

    if (password.length < 6) {
      setRegisterError("Password must be at least 6 characters or longer");
      return;
    }

    // create user
    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            console.log("registered");
          })
          .catch();
        Swal.fire({
          title: "Congrats!",
          text: "You have successfully registered! Log in for continue",
          icon: "success",
        });

        logOut().then().catch();
        navigate("/login");
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
        setRegisterError("The email you provided is already in-use");
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
        <title>EventDay | Register</title>
      </Helmet>
      <div className="bg-white bg-opacity-75 p-2 md:p-6 md:w-3/4 lg:w-2/4 mx-auto rounded-md mt-10">
        <h2 className="text-2xl md:text-3xl font-extrabold font-platypi text-center underline mb-2">
          Register Please
        </h2>
        <form onSubmit={handleRegister}>
          {" "}
          <div className="mb-2">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="input input-bordered border  w-full shadow-xl"
                />
              </label>
            </div>
          </div>
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
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered w-full shadow-xl"
                  required
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
                  required
                />
              </label>
            </div>
            {registerError && <p className="text-red-700">{registerError}</p>}
          </div>
          <input
            type="submit"
            value="Register"
            className="btn btn-block btn-primary text-white shadow-xl my-4"
          />
        </form>
        <p className="text-center">OR</p>

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
        <p className="text-center mt-3">
          Already have a account? Please{" "}
          <Link to="/login" className="underline text-blue-800">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
