import React from 'react';

const Header = () => {
    return (
        <div>
           <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full ">
    <img src="https://img.freepik.com/free-vector/hand-drawn-kids-toys-facebook-cover_23-2149651187.jpg?size=626&ext=jpg&ga=GA1.2.12329601.1673265588&semt=ais" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-vector/hand-drawn-kids-toys-sale-banner_23-2149540763.jpg?size=626&ext=jpg&ga=GA1.2.12329601.1673265588&semt=ais" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-vector/hand-drawn-kids-toys-facebook-cover_23-2149540745.jpg?size=626&ext=jpg&ga=GA1.2.12329601.1673265588&semt=ais" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-vector/flat-kids-twitch-banner-template_23-2149658118.jpg?size=626&ext=jpg&ga=GA1.2.12329601.1673265588&semt=ais" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Header;