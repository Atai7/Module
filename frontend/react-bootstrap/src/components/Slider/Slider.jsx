import React from "react";
import { Carousel } from "react-bootstrap";

//photo//

import womans from "../../assets/img/womans.jpg";
import friends from "../../assets/img/friends.jpg";
import ww from "../../assets/img/ww.jpg";


export default function Slider() {
  return (
    <Carousel className="h-50">
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "80vh", objectFit: "cover" }}
          src={womans}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>НАШИ ПОСТЫ</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          style={{ height: "80vh", objectFit: "cover" }}
          src={friends}
          alt="Second-slide"
        />
        <Carousel.Caption>
          <h3>СБЛИЖАЮТ</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          style={{ height: "80vh", objectFit: "cover" }}
          src={ww}
          alt="Three-slide"
        />
        <Carousel.Caption>
          <h3>ВДОХНОВЛЯЮТ</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
