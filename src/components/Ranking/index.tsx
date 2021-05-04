import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import api from "../../services/api";

const Ranking: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [pvpRank, setPvpRank] = useState<any>();
  const [pkRank, setPkRank] = useState<any>();
  const [heroRank, setHeroRank] = useState<any>();
  const [castleRank, setCastleRank] = useState<any>();

  useEffect(() => {
    async function getData() {
      try {
        const resp = await api.get("/");
        const pvpkills = resp.data.rows.sort((a: any, b: any) => {
          return a.pvpkills > b.pvpkills;
        });
        setPvpRank(pvpkills);
      } catch (err) {
        console.log(err.message);
      }
    }
    getData();
  }, []);

  return (
    <>
      <div className="ranking">
        <Tabs>
          <TabList>
            <Tab>PVP</Tab>
            <Tab>PK</Tab>
            <Tab>Castle</Tab>
            <Tab>Heros</Tab>
          </TabList>

          <TabPanel>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>POS </p>
              <p>Player </p>
              <p>Pvp </p>
            </div>
            {pvpRank &&
              pvpRank?.map((char: any, i: number) => (
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p style={{ color: i <= 2 ? "#f00" : "#fff" }}>{i + 1}</p>
                  <p style={{ color: i <= 2 ? "#f00" : "#fff" }}>
                    {char.char_name}
                  </p>
                  <p style={{ color: i <= 2 ? "#f00" : "#fff" }}>
                    {char.pvpkills}
                  </p>
                </div>
              ))}
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};
export default Ranking;
