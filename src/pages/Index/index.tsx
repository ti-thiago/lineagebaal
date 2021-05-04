import React, { useState, useRef, useCallback, useEffect } from "react";
import "./index.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import LogoDark from "../../images/logo-dark.png";
import Slide from "../../images/slider-img.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import Header from "../../components/Header";
import ReactPlayer from "react-player";
import Ranking from "../../components/Ranking";

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
  return (
    <>
      <div className="socBlock">
        <a href="" className="fb"></a>
        <a href="" className="dc"></a>
      </div>

      <div className="toTop buttonTop">TOP</div>
      <Header />
      <div className="wrapper">
        <div className="header">
          <div className="logo">
            <a href="/">
              <img src={LogoDark} alt="Logo" />
              <p>LINEAGE 2 ESSENCE</p>
            </a>
          </div>
          <div className="serverBlock flex">
            <div className="server server_1">
              <p>New Class Included</p>
              <span>Death Knight</span>
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
        </div>
        <main className="content">
          <div style={{ display: "flex" }}>
            <ReactPlayer url="https://www.youtube.com/watch?v=GPDY61SA9bg" />
            <ReactPlayer url="https://www.youtube.com/watch?v=GPDY61SA9bg" />
          </div>
          <h4 className="content-title">
            Features
            <a href="#" className="more">
              <span></span>
              <span></span>
            </a>
            <p>General Server Info</p>
          </h4>
          <div className="flex-s block">
            <div className="news-info">
              <h5 className="sub-title">
                Server Rates
                <p>General Information about Asteroth</p>
              </h5>

              <br />
              <div className="date">
                <a href="" className="exp-img"></a>
                <p>Experience </p>
                <h1>10x</h1>
              </div>

              <div className="date">
                <a href="" className="adena-img"></a>
                <p>Adena</p> <h1>3x</h1>
              </div>

              <div className="date">
                <a href="" className="enchant-img"></a>
                <p>Safe</p>
                <h1>+3</h1> <p style={{ marginLeft: 5 }}>Max</p>
                <h1>+16</h1>
              </div>
            </div>
            <div className="eventsBlock">
              <h4 className="content-title">
                Rank
                <a href="#" className="more">
                  <span></span>
                  <span></span>
                </a>
                <p>The best of the best</p>
              </h4>

              <Ranking />
            </div>
          </div>
          <div className="block blockBorder">
            <h2 className="content-title dark-title">Find out our streamers</h2>
            <div className="flex streamBlock">
              <a href="" className="twitchBlock">
                <img src="images/twitch-icon.png" alt="Twitch" />
              </a>
              <a href="" className="youtubeBlock">
                <img src="images/youtube-icon.png" alt="Youtube" />
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
          <p style={{ backgroundColor: "#f00" }}></p>
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

      <div id="overlay"></div>
    </>
  );
};

export default Index;
