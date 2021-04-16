import React, { useState, useRef, useCallback, useEffect } from "react";

import "./styled.css";
import LogoWhite from "../../images/logo-white.png";

import LogoFb from "../../images/facebook-button.png";

const Header: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const [displayLogin, setDisplayLogin] = useState(false);
  const [displayCommunity, setDisplayCommunity] = useState(false);
  const [displayGame, setDisplayGame] = useState(false);
  const toggleDropDown = useCallback((e: any) => {
    if (!e.target.closest("[data-class]")) {
      setDisplayCommunity(false);
      setDisplayGame(false);
    } else if (!!displayCommunity) {
      setDisplayGame(false);
    } else if (!!displayGame) {
      setDisplayCommunity(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", toggleDropDown);

    return () => {
      document.removeEventListener("click", toggleDropDown);
    };
  }, [toggleDropDown]);

  return (
    <>
      <div className="topPanel flex-c">
        <div className="topButton menuButton" data-class="nav">
          <span>asdf</span>
          <span>asdfg</span>
          <span>asdfgh</span>
        </div>
        <a href="/" className="topPanel-logo">
          <img src={LogoWhite} alt="Logo" />
        </a>
        <nav className="nav flex-c">
          <div className="topPanel-menu flex-c">
            <ul className="menu flex">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Create account</a>
              </li>
              <li>
                <a
                  data-class="m_3"
                  className="menu-a"
                  onClick={() => setDisplayGame((prev) => !prev)}
                >
                  Game
                </a>
                {displayGame && (
                  <ul className="dropDown-menu m_3">
                    <li>
                      <a href="">Statistic</a>
                    </li>
                    <li>
                      <a href="">Guides</a>
                    </li>
                    <li>
                      <a href="#">Support</a>
                    </li>
                    <li>
                      <a href="">Characters & Races</a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a
                  data-class="m_4"
                  className="menu-a"
                  onClick={() => setDisplayCommunity((prev) => !prev)}
                >
                  Community
                </a>
                {displayCommunity && (
                  <ul className="dropDown-menu m_4">
                    <li>
                      <a href="">Statistic</a>
                    </li>
                    <li>
                      <a href="">Guides</a>
                    </li>
                    <li>
                      <a href="">Support</a>
                    </li>
                    <li>
                      <a href="">Characters & Races</a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <div className="topPanel-button flex-c">
            <a
              href="#modal-login"
              className="loginButton"
              onClick={() => setDisplayLogin(true)}
            >
              Log In
            </a>
            <a href="" className="downloadButton bright">
              Download
            </a>
          </div>
        </nav>
        <div className="topSocBlock socBlock">
          <a href="" className="fb"></a>
          <a href="" className="dc"></a>
        </div>
      </div>
      <div
        id="modal-login"
        className="modal_div t-center "
        style={{ display: "none" }}
      >
        <div className="modal_close" onClick={() => setDisplayLogin(false)}>
          <span></span>
          <span></span>
        </div>
        <h1>Login</h1>
        <a href="#">
          <img src={LogoFb} alt="" />
        </a>
        <div className="or">Or</div>
        <form className="form-width">
          <p>
            <input type="text" placeholder="Login" />
          </p>
          <p>
            <input type="password" placeholder="Password" />
          </p>
          <p>
            <button>ok</button>
          </p>
        </form>
        <div className="formlinks">
          <p>
            <a href="">Forgot your password ?</a>
          </p>
          <p>
            Dont`t have an account ?{" "}
            <a href="" className="reg">
              Register
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
export default Header;
