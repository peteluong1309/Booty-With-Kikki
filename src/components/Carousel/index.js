import React from "react";

const Carousel = () => {
  return (
    <>
      <div className="container">
        <div class="mySlides fade">
          <div class="">1 / 3</div>
          <img src="fav" alt="this is test" />
          <div class="text">Caption Text</div>
        </div>

        <div class="mySlides fade">
          <div class="">2 / 3</div>
          <img src="fav" alt="this is test" />
          <div class="text">Caption Two</div>
        </div>

        <div class="mySlides fade">
          <div class="">3 / 3</div>
          <img src="fav" alt="this is test" />
          <div class="text">Caption Three</div>
        </div>

        <a class="prev" onclick="plusSlides(-1)">
          &#10094;
        </a>
        <a class="next" onclick="plusSlides(1)">
          &#10095;
        </a>
      </div>
      <div>
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
      </div>
    </>
  );
};

export default Carousel;
