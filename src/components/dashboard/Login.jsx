import React from "react";

export const Login = () => {
  return (
    <div style={{ height: "100vh" }} className="bg-light">
      <div className="container">
        <div className="bg-white p-5 position-absolute start-50 top-50 translate-middle w-50">
          <h2>Login</h2>
          <form className="d-flex flex-column gap-3 ">
            <input
            className="form-control"
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              required
            />
            <input
            className="form-control"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
            />
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};
