import axios from "../../api/axios.input";
import React, { useEffect, useState } from "react";
//components//
import Cards from "../Cards/Cards";
import Slider from "../Slider/Slider";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios.get("/novostis?populate=*&pagination[pageSize]=3").then((res) => {
      const respons = res.data.data;
      setInfo(respons);
      console.log(info);
    });
  }, []);
  return (
    <>
      <Slider />
      <div className="cards-container">
        <div className="container">
          <ul className="cards">
            {info.map((item) => (
              <Cards info={item} key={item.id} />
            ))}
          </ul>
        </div>
      </div>
      <div className="container-btn">
        <Link to="/news" className=" all-news">
          Все новости
        </Link>
      </div>
      <hr />

      <div className="container">
        <div className="footer-part-input-btn">
          <input
            type="email"
            className="email-input"
            placeholder="Введите свой email"
          />
          <a href="/" className="btn-transition fpart">
            Подписаться на новости
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
