import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="container">
      <h1>
        Thanks for taking the time to reach out. How <br /> can I help you today?
      </h1>

      <form action="">
        <div className="input-field-area">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="massage">Massage</label>
          <textarea id="massage" cols="30" rows="10" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
