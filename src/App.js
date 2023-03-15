import React from "react";
import "./App.css";

const App = () => {
  return (
    <div>
      <div class="maincard">
        <form>
          <h1>Login</h1>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              <h5 class="bold"> Password</h5>
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <div className="remfor">
              <label class="form-check-label" for="exampleCheck1">
                Remember Me
              </label>
              <div>
                <a href="">Forgot Password</a>
              </div>
            </div>
          </div>
          <div>
            Don't have an account?
            <a href="">Sign Up</a>
          </div>
          <button type="submit" class="btn">
            Login
          </button>
        </form>
        <div class="maincord2">
          <h1 class="signup">Signup</h1>
          <h5 class="bold">Full Name</h5>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <h5 class="bold">Restaurant Name</h5>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />

          <h5 class="email">Email</h5>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <h5 class="bold">password</h5>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div>
            Already Have ab Acciybt?
            <a href="">Sign In</a>
            <div>
              <button type="submit" class="btn">
                sign Up
              </button>
            </div>
          </div>
        </div>
        <div class="main2nd">
          <h1>forgot Password</h1>
          <h5 class="bold">Email</h5>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <a href="">Back To Login</a>
          <button type="Resend password" class="btn">
            Reset Passwird
          </button>
        </div>
        <div class="last">
          <h1>Reset Password</h1>
          <h5 class="bold">New Password</h5>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <h5 class="bold">Confirm Password</h5>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <a href="">Back To Login</a>
          <button type="Reset Passwird" class="btn">
            Reset Passwird
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
