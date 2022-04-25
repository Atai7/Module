import React from "react";
import "./Cards.css";
import { MdDateRange } from "react-icons/md";
import { Link } from "react-router-dom";
//photo//

function Cards({ info }) {
  console.log(info);
  return (
    <li className="cards__item">
      <div className="card">
        <div className="card__image">
          <img src={info?.Media?.url} alt="Image" />
        </div>
        <div className="card__content">
          <div className="card__title">{info.Title}</div>
          <p className="card__text">{info.Description}</p>
          <div className="footer-part">
            <p className="date">
              {info.publishedAt}
              <MdDateRange />
            </p>
            <button className="btn btn--block card__btn">
              <Link className="cards-news-btn" to={`/NewsItem/${info.id}`}>
                Подробнее
              </Link>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
export default Cards;
