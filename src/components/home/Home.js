import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home-container">
      <div className="intro-area">
        <h1> Hello, my name is Ismail.</h1>
        <h2>I’m a web developer from Chittagong, Bangladesh.</h2>
        <p>
          I'm a dedicated web developer and hard worker. I have strong
          Proficiency in Responsive Web Design. Functionality. Authentication.
          REST API. Database. Git GitHub. Deploy. Google Search. etc. I try to
          write clean and scalable code. I have been attached in programming for
          over one and a half years.
        </p>
      </div>
      <div className="img-area">
        <img
          src="https://img.freepik.com/free-vector/flat-creativity-concept-illustration_52683-64279.jpg?t=st=1654747482~exp=1654748082~hmac=9429ace813306c65b272cb3989a3058b6373d12cbbe6fdd2de5adbf1a5f9626e&w=826"
          alt=""
        />
      </div>
    </section>
  );
};

export default Home;
