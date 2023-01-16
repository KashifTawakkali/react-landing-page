import React from "react";

export const Contact = () => {
  return (
    <div>
      <section class="contact" id="contact">
        <div class="image">
          <img src="images/contact-img.png" alt="" />
        </div>

        <form action="">
          <h1 class="heading">contact us</h1>

          <div class="inputBox">
            <input type="text" required />
            <label>name</label>
          </div>

          <div class="inputBox">
            <input type="email" required />
            <label>email</label>
          </div>

          <div class="inputBox">
            <input type="number" required />
            <label>phone</label>
          </div>

          <div class="inputBox">
            <textarea required name="" id="" cols="30" rows="10"></textarea>
            <label>message</label>
          </div>

          <input type="submit" class="btn" value="send message" />
        </form>
      </section>
    </div>
  );
};
