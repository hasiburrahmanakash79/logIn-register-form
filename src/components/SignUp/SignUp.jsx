import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {

  const {user, createUser} = useContext(AuthContext)
  console.log(createUser);

  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(username, email, password)

    createUser(email, password)
    .then(result =>{
      const loggedUser = result.user
      console.log(loggedUser);
      
    })
    .catch(error =>{
      console.log(error);
    })

  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center mb-5">
          <h1 className="text-5xl font-bold">Please Registration!</h1>

          
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your name</span>
              </label>
              <input
                type="text"
                name="username"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
                <button className="btn btn-primary mb-5">Sign up</button>
              </div>
            <Link className="hover:underline" to="/signIn">
              Already have an account?
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
