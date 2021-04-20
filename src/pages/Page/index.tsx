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
        setcharactersData(resp.data);

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
          charactersData?.map((char: any) => <h1>{JSON.stringify(char)}</h1>)}
        <h1>Login</h1>
        <a href="#"></a>
        <div className="or">Or</div>
        <form className="form-width">
          <p>
            <input placeholder="Login" />
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

export default Page;
