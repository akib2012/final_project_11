import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router";
import Sociallogin from "../SocialLogin/Sociallogin";

const Regester = () => {
  const { regesterUser, googlesingin } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

//   console.log(register)

  const handleregestation = (data) => {
    regesterUser(data.email, data.password)
      .then((res) => console.log(res.user))
      .catch((er) => console.log(er));
  };

  const googlesingins = () => {
    googlesingin()
      .then((res) => console.log(res.user))
      .catch((err) => console.log(err));
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
              {/* name feild  */}
              <label className="label">Name</label>
              <input
                type="name"
                {...register("name", { required: true })}
                className="input"
                placeholder="name"
              />
              {errors.name?.type === "required" && (
                <p className="text-red-500">name is required</p>
              )}

              {/* photo feild */}
              <label className="label">photoURL</label>
              <input
                type="file"
                {...register("photo", { required: true })}
                // className="input"
                className="file-input"
                placeholder="photo"
              />
              {errors.name?.type === "required" && (
                <p className="text-red-500">photo is required</p>
              )}

              {/* Email */}
              <label className="label">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="input"
                placeholder="Email"
              />
              {errors.email?.type === "required" && (
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

              <button className="btn btn-neutral mt-4">Register</button>

              {/* Social Login */}
              {/* <Sociallogin></Sociallogin> */}
              <button>
                <button onClick={googlesingins}>
                  <Sociallogin></Sociallogin>
                </button>
              </button>
            </fieldset>

            <p>
              Already have an account?{" "}
              <Link className="text-blue-500" to="/login">
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
