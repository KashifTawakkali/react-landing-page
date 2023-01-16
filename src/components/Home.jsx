import React from "react";

export const Home = () => {
  return (
    <div>
      <header>
        <a href="#" class="logo">
          <span>best</span> Kmobile App
        </a>

        <input type="checkbox" id="menu-bar" />
        <label for="menu-bar" class="fas fa-bars"></label>

        <nav class="navbar">
          <a href="#home">home</a>
          <a href="#features">features</a>
          <a href="#about">about</a>
          <a href="#review">review</a>
          <a href="#pricing">pricing</a>
          <a href="#contact">contact</a>
        </nav>
      </header>
      <section class="home" id="home">
        <div class="content">
          <h3>
            best mobile app <span>showcase</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus suscipit porro nam libero natus error consequatur sed
            repudiandae eos quo?
          </p>
          <a href="#" class="btn">
            download now
          </a>
        </div>

        <div class="image">
          <img src="./images/home-img.png" alt="" />
        </div>
      </section>
    </div>
  );
};
