import React from "react";

export const Footer = () => {
  return (
    <div>
      <div class="footer">
        <div class="box-container">
          <div class="box">
            <h3>about us</h3>
            <p>
            To serve to its clients with the well managed programmatic personnel
             as per their needs and requirement so as to excel and automate the implementation, 
            execution and to provide exceptional customer service.
            </p>
          </div>

          <div class="box">
            <h3>quick links</h3>
            <a href="#">home</a>
            <a href="#">features</a>
            <a href="#">about</a>
            <a href="#">review</a>
            <a href="#">pricing</a>
            <a href="#">contact</a>
          </div>

          <div class="box">
            <h3>follow us</h3>
            <a href="https://www.facebook.com/profile.php?id=100004399726316" target="_blank">facebook</a>
            <a href="https://www.instagram.com/tawakkalipatil/" target="_blank">instagram</a>
            <a href="https://in.pinterest.com/kashifpatil/" target="_blank">pinterest</a>
            <a href="https://twitter.com/kashifpatil007" target="_blank">twitter</a>
          </div>

          <div class="box">
            <h3>contact info</h3>
            <div class="info">
              <i class="fas fa-phone"></i>
              <p>
                {" "}
                +918668234170 <br /> +919130217864{" "}
              </p>
            </div>
            <div class="info">
              <i class="fas fa-envelope"></i>
              <p>
                {" "}
                patelkashif08@gmail.com <br /> kashifpatil007@gmail.com{" "}
              </p>
            </div>
            <div class="info">
              <i class="fas fa-map-marker-alt"></i>
              <p> Pune India 412308 </p>
            </div>
          </div>
        </div>

        <h1 class="credit"> &copy; copyright @ 2023 by PeoplesmaticLab </h1>
      </div>
    </div>
  );
};
