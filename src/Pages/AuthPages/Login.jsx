import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router";
import Sociallogin from "../SocialLogin/Sociallogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { singinUser, googlesingin } = useAuth();

  const hadnlelogin = (data) => {
    singinUser(data.email, data.password)
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error));
    console.log("form data after login", data);
  };

  const handlegoogleauth = () => {
    googlesingin()
    .then(res => console.log(res.user))
    .catch(error => console.log(error))
  }
  return (
    <div className="mt-5">
      <form onSubmit={handleSubmit(hadnlelogin)}>
        <div className="text-center">
          <h3 className="text-5xl  font-semibold">Welcome Back</h3>
          <p className="text-xl mb-4">Please Login</p>
        </div>
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="input"
                placeholder="Email"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500">this is must requre</p>
              )}
              <label className="label">Password</label>
              <input
                type="password"
                {...register("password", { required: true })}
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
              <button onClick={handlegoogleauth}><Sociallogin></Sociallogin></button>
            </fieldset>
            <p>New to Zap shiift <Link className="text-blue-500" to='/regester'> regesrer</Link></p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
