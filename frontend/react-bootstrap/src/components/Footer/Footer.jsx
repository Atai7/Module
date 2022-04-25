import React from "react";
import "./Footer.css";

import { BsInstagram } from 'react-icons/bs';
import { BsTelegram } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';

//photo//
import logo from './img/omks-icon.jpg';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row category">
          {/* Column1 */}
          <div className="col">
            <h4>Навигация по сайту</h4>
            <nav className="list-unstyled links">
              <a className="link" href="/">Главная</a>
              <a className="link" href="/about">О нас</a>
              <a className="link" href="/news">Новости</a>
              <a className="link" href="/contact">Контакты</a>
            </nav>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Социальные сети</h4>
            <nav className="list-unstyled icons">
              <a className="fb" href="https://www.facebook.com/pages/category/Choir/Omks-One-Million-Kyrgyz-Stories-106807994324991/"><FaFacebookSquare size="30px"/></a>
              <a className="tw" href="https://twitter.com/kyrgyzstories"><FaTwitterSquare size="30px"/></a>
              <a className="vk" href="https://vk.com/omks_kg "><BsTelegram size="30px"/></a>
              <a className="inst" href="https://www.instagram.com/omks_kg/"><BsInstagram size="30px"/></a>
            </nav>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Контактные данные</h4>
            <nav className="list-unstyled number">
            <a className="contact" href="tel:+996-500-00-32-62">+996-500-00-32-62</a>
            <a className="contact" href="tel:+996-705-70-90-70">+996-705-70-90-70</a>
            <a className="contact" href="https://gmail.com">ukievatai5@gmail.com</a>
            </nav>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm icon-info">
            &copy;{new Date().getFullYear()} One Million Kyrgyz Stories
            <img src={logo} alt="" style={{width: '50px'}} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;