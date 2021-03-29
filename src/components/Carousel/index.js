import React from "react";
import { Link } from '@material-ui/core'
import s from './styles.module.scss';
import classnames from 'classnames';
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons";

const Carousel = () => {
  return (
    <div className="s.root">
      <div className="s.root__container">
        <div className={classnames(s.root__container__mySlides, s.root__container__fade)}>
          {/* <div class="">1 / 3</div> */}
          <img src="https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg" className={s.image} alt="this is test" />
          <div className={s.text}>Caption Text</div>
        </div>

        <div className={classnames(s.root__container__mySlides, s.root__container__fade)}>
          {/* <div class="">2 / 3</div> */}
          <img src="https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg" className={s.image} alt="this is test" />
          <div className={s.text}>Caption Two</div>
        </div>

        <div className={classnames(s.root__container__mySlides, s.root__container__fade)}>
          {/* <div class="">3 / 3</div> */}
          <img src="https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg" className={s.image} alt="this is test" />
          <div className={s.text}>Caption Three</div>
        </div>

        <Link className={s.root__previous}>
          <ArrowBackIosOutlined />
        </Link>
        <Link className={s.root__next}>
          <ArrowForwardIosOutlined />
        </Link>
      </div>
      <div>
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
      </div>
    </div>
  );
};

export default Carousel;
