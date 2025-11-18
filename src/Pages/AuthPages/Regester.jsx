import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import Sociallogin from "../SocialLogin/Sociallogin";
import axios from "axios";

const Regester = () => {
    const location = useLocation();
    const naviagte = useNavigate();
  const { regesterUser, googlesingin, updatesProfile } = useAuth();
  //   const [user, setUser] = useState([]);
  console.log(location);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleregestation = (data) => {
    console.log("after registration:", data.photo[0]);

    const profileImg = data.photo[0];

    regesterUser(data.email, data.password)
      .then((res) => /*  */ {
        console.log("User created:", res.user);
         naviagte(location?.state || '/');

        //new from data for img store !

        const fromData = new FormData();
        fromData.append("image", profileImg);

        const imgUri = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMAGE_HOST
        }`;
        axios
          .post(imgUri, fromData)

          .then((result) => {
            console.log(result.data.data.url);
            // update profile here
            const updateProfile = {
              displayName: data.name,
              photoURL: result.data.data.url,
            };
            // update for firebase profile here
            // console.log(updateProfile);

            updatesProfile(updateProfile)
              .then(() => console.log("profile updated done!!"))
              .catch((er) => console.log(er));
          });
      })
      .catch((er) => console.log("Error:", er));
  };

  const googlesingins = () => {
    googlesingin()
      .then((res) => console.log("Google login:", res.user), naviagte(location?.state || '/'))
      .catch((err) => console.log("Error:", err));
  };

  return (
    <div className="mt-8">
      <form onSubmit={handleSubmit(handleregestation)}>
        <div className="text-center">
          <h3 className="text-4xl font-semibold">Welcome to Zap Shift</h3>
          <p className="text-xl mb-4">Please Register</p>
        </div>

        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="input"
                placeholder="Your Name"
              />
              {errors.name && <p className="text-red-500">Name is required</p>}

              {/* Photo */}
              <label className="label">Photo</label>
              <input
                type="file"
                {...register("photo", { required: true })}
                className="file-input"
              />
              {errors.photo && (
                <p className="text-red-500">Photo is required</p>
              )}

              {/* Email */}
              <label className="label">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="input"
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-500">Email is required</p>
              )}

              {/* Password */}
              <label className="label">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                })}
                className="input"
                placeholder="Password"
              />

              {errors.password?.type === "required" && (
                <p className="text-red-500">Password is required</p>
              )}

              {errors.password?.type === "pattern" && (
                <p className="text-red-500">
                  Password must include lowercase, uppercase, number & special
                  character
                </p>
              )}

              {/* Submit Button */}
              <button className="btn btn-neutral mt-4" type="submit">
                Register
              </button>

              {/* Google Login */}
              <button
                type="button"
                onClick={googlesingins}
                className="mt-3 btn btn-outline"
              >
                <Sociallogin />
              </button>
            </fieldset>

            <p className="mt-4 text-center">
              Already have an account?{" "}
              
              <Link 
             
              className="text-blue-500" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Regester;
