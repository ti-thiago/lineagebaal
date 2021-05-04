import React, { useState, useRef, useCallback, useEffect } from "react";
import Header from "../../components/Header";

import api from "../../services/api";
const Page: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const [charactersData, setcharactersData] = useState<any[]>([]);
  useEffect(() => {
    async function getData() {
      try {
        const resp = await api.get("/");
        setcharactersData(resp.data.rows);

        // const body = {
        //   login: "thiago",
        //   password: "thiago",
        //   email: "thiago@thiago.thiago",
        // };

        // const x = await api.post("/", body);
        // console.log("xxx", x);
      } catch (e) {
        console.log("erro requisição>", e.message);
      }
    }
    getData();
  }, []);
  return (
    <>
      <Header />

      <div id="modal-static" className="modal_div t-center ">
        <div className="modal_close">
          <span></span>
          <span></span>
        </div>
        {charactersData &&
          charactersData.length &&
          charactersData?.map((char: any) => <h1>Char:{char.char_name}/ PVPs:{char.pvpkills}</h1>)}
       
        <a href="#"></a>
       


      </div>
    </>
  );
};

export default Page;
