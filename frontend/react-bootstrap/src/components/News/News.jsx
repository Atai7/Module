import "bootstrap/dist/css/bootstrap.min.css";
import axios from "../../api/axios.input";
import React, { useEffect, useState } from "react";
import "./News.css";
//components//
import Cards from "../Cards/Cards";
import { Link } from "react-router-dom";
//pages//

function News() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get("/novostis?pagination[pageSize]=20&populate=Media")
      .then((res) => {
        const respons = res.data.data;
        setInfo(respons);
      });
  }, []);

  return (
    <>
      <div className="news-part">
        <div className="title-news">Новости</div>
        <Link className="btn__news" to="/AddNews">
          Добавить новость
        </Link>
      </div>
      <div className="cards-container">
        <div className="container">
          <ul className="cards">
            {info.map((item) => (
              <Cards info={item} key={item.id} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default News;
