import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { GoBrowser } from "react-icons/go";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare} from "react-icons/fa";
import { FaTelegram} from "react-icons/fa";

function Contact() {
  return (
    <div className="container">
      <div className="contact-container">
        <div className="left-info">
          <div className="tel">
            <h5 className="title-tel">Контактные данные</h5>
            <div className="telephone">
              <MdCall className="icon-tel" size="1.5rem" />
              <div className="full-info">
                <p className="num">+996-500-00-32-62</p>
                <p className="num-second">+996-700-00-32-62</p>
                <div className="num-time">
                  <p className="time-work">
                    Пон-Пят: С 8:30 УТРА ДО 7:30 ВЕЧЕРА
                  </p>
                  <p className="time-work">СБ: С 10:00 УТРА ДО 16:00 ВЕЧЕРА</p>
                </div>
              </div>
            </div>
          </div>
          <div className="social">
            <h5 className="title-tel">Cоциальные сети</h5>
            <div className="social-part">
              <GoBrowser className="icon" size="1.5rem" />
              <div className="info-icon">
                <div className="instagram">
                  <span><BsInstagram size="1.5rem"/><a href="https://www.instagram.com/omks_kg/" className="icon-text">Instagram</a></span>
                </div>
                <div className="facebook">
                  <span><FaFacebookSquare size="1.5rem"/><a href="https://www.facebook.com/pages/category/Choir/Omks-One-Million-Kyrgyz-Stories-106807994324991/" className="icon-text">Facebook</a></span>
                </div>
                <div className="telegram">
                  <span><FaTelegram size="1.5rem"/><a href="https://t.me/joinchat/AAAAAEQfrSUmjgjwRTafVg" className="icon-text">Telegram</a></span>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="image-right"></div>
      </div>
  );
}

export default Contact;
