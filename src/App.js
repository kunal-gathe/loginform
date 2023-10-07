import React from "react";
import logo from "./png.png";
import "./App.css";
import { FaHandPointRight } from "react-icons/fa";

function App() {
  return (
    <>
      <div className="navbar">
        <img className="logo" src={logo} alt="placeholder" />
        <div className="info">
          <h2>WELCOME TO ANANT NIDHI PRIVATE LIMITED</h2>
          <p className="address">
            235, 2nd Floor Opposite Sector - 13 Entrance, Modal Town Hisar
            Haryana - 125001
          </p>
          <div className="contact">
            <p>
              Contact: 9015702702 <span> Email: infopb77@gmail.com</span>
            </p>
          </div>
          <p className="cin">CIN NO.: U65999HR2018PLC077024</p>
        </div>
      </div>

      <div className="container">
        <div className="box1">
          <div className="heading">
            <h4 className="h-name">Benefits of Saving Account </h4>
          </div>

          <div className="flex">
          <FaHandPointRight className="icon"/>
          <span>Liquidity. One of the benefits of opening a
            savings account is that it offers you liquidity</span>
          </div>
          <div className="flex">
          <FaHandPointRight className="icon"/>
          <span>Liquidity. One of the benefits of opening a
            savings account is that it offers you liquidity</span>
          </div>
          <div className="flex">
          <FaHandPointRight className="icon"/>
          <span>Liquidity. One of the benefits of opening a
            savings account is that it offers you liquidity</span>
          </div>
          <div className="flex">
          <FaHandPointRight className="icon"/>
          <span>Liquidity. One of the benefits of opening a
            savings account is that it offers you liquidity</span>
          </div>
          <div className="flex">
          <FaHandPointRight className="icon"/>
          <span>Liquidity. One of the benefits of opening a
            savings account is that it offers you liquidity</span>
          </div>
        </div>
        <div className="box2">
          <div className="login">
            <label>Enter Number</label>
            <br />
            <input type="text" placeholder="Enter mobile No." />
            <br />
            <label>Enter Password</label>
            <br />
            <input type="text" placeholder="Enter mobile No." />
            <p className="pass">Forgot Password?</p>
            <br />
            <button className="btn">Login</button>
            <p className="b-name">Become a member</p>
          </div>
        </div>
      </div>

      <footer>
        <div className="cat-1">
          <h4>Company</h4>
          <p>About Us</p>
          <p>Blog</p>
          <p>Careers</p>
        </div>
        <div className="cat-1">
          <h4>Support</h4>
          <p>Help Center</p>
          <p>Safety Center</p>
          <p>Community Guidelines</p>
        </div>
        <div className="cat-1">
          <h4>Legal</h4>
          <p>Cookies Policy</p>
          <p>Privacy Policy</p>
          <p>Term of Service</p>
          <p>Low Enforcement</p>
        </div>
        <div className="cat-1">
          <h4>Install App</h4>
        </div>
      </footer>
    </>
  );
}

export default App;
