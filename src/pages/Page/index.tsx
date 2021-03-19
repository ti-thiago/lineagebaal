import React, { useState, useRef, useCallback, useEffect } from "react";

const Page: React.FC = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className="socBlock">
        <a href="" className="fb"></a>
        <a href="" className="dc"></a>
      </div>
      <div className="toTop buttonTop">TOP</div>
      <div className="topPanel flex-c">
        <div className="topButton menuButton" data-className="nav">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <a href="/" className="topPanel-logo">
          <img src="images/logo-white.png" alt="Logo" />
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
                <a data-className="m_3" className="menu-a">
                  Game
                </a>
                <ul className="dropDown-menu m_3">
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
              </li>
              <li>
                <a data-className="m_4" className="menu-a">
                  Community
                </a>
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
              </li>
            </ul>
          </div>
          <div className="topPanel-button flex-c">
            <a href="#modal-login" className="loginButton bright open_modal">
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
      <div className="wrapper">
        <header className="header">
          <div className="logo">
            <a href="/">
              <img src="images/logo-dark.png" alt="Logo" />
            </a>
          </div>
          <div className="serverBlock flex">
            <div className="server server_1">
              <p>X50 Nightmare</p>
              <span>Upcoming 22.10</span>
            </div>
            <div className="server server_2">
              <p>X300 Paradise</p>
              <span>9864</span>
            </div>
            <div className="server server_3">
              <p>X1000 Warland</p>
              <span>7853</span>
            </div>
          </div>
          <div className="stars">
            <span className="star_1"></span>
            <span className="star_2"></span>
            <span className="star_3"></span>
            <span className="star_4"></span>
            <span className="star_5"></span>
            <span className="star_6"></span>
            <span className="star_7"></span>
            <span className="star_8"></span>
          </div>
        </header>
        <main className="content">
          <h1 className="page-title">Download</h1>
          <div className="main-content">
            <h2>H2 Page title</h2>
            <h3>H3 Page title</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              <img src="images/page-test-img.jpg" alt="" />
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a{" "}
              <a href="">
                galley of type and scrambled it to make a type specimen book
              </a>
              . It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <form>
              <div className="formGroup">
                <p>Choise realm:</p>
                <select>
                  <option>Nightmare x50</option>
                  <option>Paradise x300</option>
                  <option>Warland x1000</option>
                </select>
              </div>
              <div className="formGroup">
                <p>Field content:</p>
                <input type="text" placeholder="Field" />
              </div>
              <div className="formGroup">
                <button>Button</button>{" "}
                <a href="" className="button">
                  Button link
                </a>
              </div>
            </form>
            <table>
              <tbody>
                <tr>
                  <td>Table 1</td> <td>Table 2</td> <td>Table 3</td>{" "}
                  <td>Table 4</td> <td>Table 5</td>
                </tr>
                <tr>
                  <td>Content 1</td> <td>Content 2</td> <td>Content 3</td>{" "}
                  <td>Content 4</td> <td>Content 5</td>
                </tr>
                <tr>
                  <td>Table 1</td> <td>Table 2</td> <td>Table 3</td>{" "}
                  <td>Table 4</td> <td>Table 5</td>
                </tr>
                <tr>
                  <td>Content 1</td> <td>Content 2</td> <td>Content 3</td>{" "}
                  <td>Content 4</td> <td>Content 5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
      <footer className="footer">
        <div className="footerTopBlock">
          <div className="container">
            <div className="footerLogo">
              <a href="/">
                <img src="images/logo-white.png" alt="Logo" />
              </a>
            </div>
            <ul className="flex-c-c">
              <li>
                <a href="">Terms of service</a>
              </li>
              <li>
                <a href="">Privacy policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footerBottomBlock">
          <p>
            <span>© 2019</span> Giran: Lineage 2
          </p>
          <p>
            This server is a test option of the game lineage 2 and is intended
            only for the acquaintance of players.
          </p>
          <p>All rights owned by NCSOFT</p>
        </div>
      </footer>

      <div id="modal-login" className="modal_div t-center">
        <div className="modal_close">
          <span></span>
          <span></span>
        </div>
        <h1>Login</h1>
        <a href="#">
          <img src="images/facebook-button.png" alt="" />
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
      <div id="overlay"></div>
    </>
  );
};

export default Page;
