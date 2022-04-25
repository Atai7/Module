import React, { useEffect, useState } from "react";
import axios from "../../api/axios.input";
import { useParams } from "react-router-dom";
import "./NewsItem.css";

function NewsItem() {
  const [info, setInfo] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`/novostis/${id}?populate=Media`).then((res) => {
      const respons = res.data.data;
      setInfo(respons);
    });
  }, []);

  return (
    <div>
      <div className="container-news">
        <div className="wrapper">
          <img className="news-image" src={info?.Media?.url} alt="Image" height={"380px"} />
          <div className="news-info">
            <hr />
            <h4 className="news-title">{info?.Title}</h4>
            <div className="text">
              <p className="news-text">{info.fullDesc}</p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
