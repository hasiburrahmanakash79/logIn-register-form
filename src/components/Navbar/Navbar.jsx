import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
    .then(()=>{ })
    .catch(error => console.log(error))
  }

  return (
    <div>
      <div className="navbar bg-neutral text-neutral-content flex justify-between">
        <a className="btn btn-ghost normal-case text-xl">Login Master</a>
        <div className="flex gap-10 pe-5">
          <Link to="/">Home</Link>
          {user && <Link to="/orders">Orders</Link>}
          <Link to="/signUp">Sign up</Link>
          <div>
            {user ? (
              <div>
                <span>{user.email}</span>
                <button onClick={handleLogOut} className="ms-5 btn btn-outline btn-primary">
                  Log Out
                </button>
              </div>
            ) : (
              <Link to="/signIn">Sign in</Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
