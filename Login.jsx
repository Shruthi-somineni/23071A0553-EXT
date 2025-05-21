import React from 'react';

const Login = () => {
  return (
    <div className="form-container">
      <h2>Student Login</h2>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
