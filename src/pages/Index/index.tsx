import React, { useState, useRef, useCallback, useEffect } from "react";
import "./index.css";
import "./js/main";
import LogoFb from "../../images/facebook-button.png";
import LogoWhite from "../../images/logo-white.png";
import LogoDark from "../../images/logo-dark.png";
import Slide from "../../images/slider-img.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// var swiper: any = new Swiper(".swiper-container", {
//   autoplay: {
//     delay: 4000,
//   },
//   speed: 1000,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });
const Index: React.FC = () => {
  const [displayCommunity, setDisplayCommunity] = useState(false);
  const [displayGame, setDisplayGame] = useState(false);

  const [displayLogin, setDisplayLogin] = useState(false);

  const toggleDropDown = useCallback(
    (e: any) => {
      if (!e.target.closest("[data-class]")) {
        setDisplayCommunity(false);
        setDisplayGame(false);
      } else if (!!displayCommunity) {
        setDisplayGame(false);
      } else if (!!displayGame) {
        setDisplayCommunity(false);
      }
    },
    [displayCommunity, displayGame]
  );
  useEffect(() => {
    document.addEventListener("click", toggleDropDown);

    return () => {
      document.removeEventListener("click", toggleDropDown);
    };
  }, [toggleDropDown]);
  return (
    <>
      <div className="socBlock">
        <a href="" className="fb"></a>
        <a href="" className="dc"></a>
      </div>

      <div className="toTop buttonTop">TOP</div>

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
                  onClick={() => {
                    setDisplayGame((prev) => !prev);
                    console.log(displayGame);
                  }}
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
      <div className="wrapper">
        <header className="header">
          <div className="logo">
            <a href="/">
              <img src={LogoDark} alt="Logo" />
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
          <div className="flex-s block">
            <div className="newsBlock">
              <h2 className="content-title white-title">
                News{" "}
                <a href="#" className="more">
                  <span></span>
                  <span></span>
                </a>
              </h2>
              <div className="newsFeed flex-s">
                <a
                  href="#"
                  className="news"
                  style={{ backgroundImage: `url(images / news - img_1.jpg)` }}
                >
                  <div className="news-info">
                    <h3>
                      <span>[Hot]</span> Upcoming 22.10 x50 Nightmare
                    </h3>
                    <div className="date">10.09</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="news"
                  style={{ backgroundImage: `url(images / news - img_2.jpg)` }}
                >
                  <div className="news-info">
                    <h3>
                      <span>[Update]</span> New Fafurion Boss update
                    </h3>
                    <div className="date">10.09</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="news"
                  style={{ backgroundImage: `url(images / news - img_3.jpg)` }}
                >
                  <div className="news-info">
                    <h3>
                      <span>[Event]</span> Social Media Events
                    </h3>
                    <div className="date">10.09</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="eventsBlock">
              <h2 className="content-title white-title">
                Events{" "}
                <a href="#" className="more">
                  <span></span>
                  <span></span>
                </a>
              </h2>
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <Swiper
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                  >
                    <SwiperSlide>
                      <img src={Slide} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Slide} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Slide} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Slide} alt="" />
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
          <div className="block blockBorder">
            <h2 className="content-title dark-title">Find out our streamers</h2>
            <div className="flex streamBlock">
              <a href="" className="twitchBlock">
                <img src="../../images/twitch-icon.png" alt="Twitch" />
              </a>
              <a href="" className="youtubeBlock">
                <img src="../../images/youtube-icon.png" alt="Youtube" />
              </a>
            </div>
          </div>
          <div className="contentHome">
            <h1>Content</h1>
            <h3>Check out what makes "Giran" special</h3>
            <a href="" className="block-a blockPvp">
              <div className="buttonPlay">
                <span></span>
              </div>
              Intense PvP
            </a>
            <div className="flex">
              <div className="blockExp">
                <a href="" className="block-a blockSolo">
                  <div className="buttonPlay buttonPlay-small">
                    <span></span>
                  </div>
                  Good for solo players
                </a>
                <a href="" className="block-a blockRaids">
                  <div className="buttonPlay buttonPlay-small">
                    <span></span>
                  </div>
                  Best Raid Bosses
                </a>
              </div>
              <a href="" className="block-a blockUpdate">
                <div className="buttonPlay">
                  <span></span>
                </div>
                Best Updates
              </a>
            </div>
            <div className="allContent">
              <a href="" className="button button-not-bg">
                See all content
              </a>
            </div>
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
            <span>© 21</span> Lineage II BaaL
          </p>
          <p>
            This server is a test option of the game lineage 2 and is intended
            only for the acquaintance of players.
          </p>
          <p>All rights owned by NCSOFT</p>
        </div>
      </footer>
      {displayLogin && (
        <div id="modal-login" className="modal_div t-center">
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
      )}
      <div id="overlay"></div>
    </>
  );
};

export default Index;
