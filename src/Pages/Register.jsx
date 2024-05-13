import { updateProfile } from "firebase/auth";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const navigate = useNavigate();
  const { createUser, logOut } = useAuth();
  const [registerError, setRegisterError] = useState("");
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
