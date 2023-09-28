import React from 'react';

function Regester() {

  return (
    <div className='login-container'>
      <h2>Login</h2>
      <form >
        <div className="form-group">
          <label htmlFor="username">Name</label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Email</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Phone Number</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
        Regester
        </button>
      </form>
    </div>
  );
}

export default Regester;