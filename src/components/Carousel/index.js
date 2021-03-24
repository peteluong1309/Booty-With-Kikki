import React from "react";

const Carousel = () => {
  return (
    <div className = >
      <div class="mySlides fade">
        <div class="">1 / 3</div>
        <img src="fav" alt='this is test' />
        <div class="text">Caption Text</div>
      </div>

      <div class="mySlides fade">
        <div class="">2 / 3</div>
        <img src="fav" alt='this is test' />
        <div class="text">Caption Two</div>
      </div>

      <div class="mySlides fade">
        <div class="">3 / 3</div>
        <img src="fav" alt='this is test' />
        <div class="text">Caption Three</div>
      </div>

      <a class="prev" onclick="plusSlides(-1)">
        &#10094;
      </a>
      <a class="next" onclick="plusSlides(1)">
        &#10095;
      </a>
    </div>
  );
};

export default Carousel;
