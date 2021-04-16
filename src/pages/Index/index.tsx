import React, { useState, useRef, useCallback, useEffect } from "react";
import "./index.css";

import LogoDark from "../../images/logo-dark.png";
import Slide from "../../images/slider-img.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import api from "../../services/api";
import Header from "../../components/Header";

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
  const [charactersData, setcharactersData] = useState<any>(null);

  useEffect(() => {
    async function getData() {
      try {
        const resp = await api.get("/");
        setcharactersData(resp.data);

        // const body = {
        //   login: "thiago",
        //   password: "thiago",
        //   email: "thiago@thiago.thiago",
        // };

        // const x = await api.post("/", body);
        // console.log("xxx", x);
        console.log(resp.data);
      } catch (e) {
        console.log("erro requisição>", e.message);
      }
    }
    getData();
  }, []);

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
        </div>
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
                  style={{
                    backgroundImage: `url(images / news - img_1.jpg)`,
                  }}
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
                  style={{
                    backgroundImage: `url(images / news - img_2.jpg)`,
                  }}
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
                  style={{
                    backgroundImage: `url(images / news - img_3.jpg)`,
                  }}
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
