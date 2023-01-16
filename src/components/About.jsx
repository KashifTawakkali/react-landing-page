import React from "react";

export const About = () => {
  return (
    <div>
      <section class="about" id="about">
        <h1 class="heading"> about the app </h1>

        <div class="column">
          <div class="image">
            <img src="images/about-img.png" alt="" />
          </div>

          <div class="content">
            <h3>Easy And Perfect Solution For Your Business App</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
              placeat deserunt saepe repudiandae veniam soluta minima dolor hic
              aperiam iure.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium, quaerat. Dolorem ratione saepe magni quo inventore
              porro ab voluptates eos, nam eius provident accusantium, quia
              similique est, repellendus et reiciendis.
            </p>
            <div class="buttons">
              <a href="#" class="btn">
                {" "}
                <i class="fab fa-apple"></i> app store{" "}
              </a>
              <a href="#" class="btn">
                {" "}
                <i class="fab fa-google-play"></i> google-play{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
      <div class="newsletter">
        <h3>Subscribe For New Features</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sed
          aliquam quibusdam neque magni magnam est laborum doloribus, facere
          dolores.
        </p>
        <form action="">
          <input type="email" placeholder="enter your email" />
          <input type="submit" value="Subscribe" />
        </form>
      </div>
    </div>
  );
};
