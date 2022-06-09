import React from "react";
import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xzbowgbn");
  return (
    <section className="container">
      <h1>
        Thanks for taking the time to reach out. How <br /> can I help you
        today?
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="input-field-area">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="massage">Massage</label>
          <textarea id="massage" name="massage" cols="30" rows="10" />
          <ValidationError
            prefix="Massage"
            field="massage"
            errors={state.errors}
          />
        </div>
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
        {state.succeeded && <p style={{ color: "red" }}>Thanks for joining!</p>}
      </form>
    </section>
  );
};

export default Contact;
