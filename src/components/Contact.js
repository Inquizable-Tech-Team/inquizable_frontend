import React, {Fragment} from "react";
import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Navbar
 from "./Navbar";

const Contact = () => {
  const [state, handleSubmit] = useForm("mqkwbyve");
 const getCount = () => {
    const timer = setTimeout(() => {
      window.location.href = "/contact";
    }, 1000)

    return () => clearTimeout(timer);

 }

  if (state.succeeded) {
    return (
      <>
      <Navbar />
      <div className="submitMessage">
        <p>Thanks for contacting us!</p>
          {getCount()}
      </div>
    </>
    )
  }
  return (
    <Fragment >
      <Navbar />
      <div className={"contactMain"}>
        <div className={"contactLeft"}>
          <div className={"contactContainer"}>
            <div className={"contactLeftInside"}>
              <div className={"contactTitle"}>
                <h1>Get in touch</h1>
              </div>
              <div className={"contactParagraph"}>
                <p>
                  Feel free to reach out to us if you have any questions
                  or suggestions! <br/>
                  We appreciate any kind of feedback.
                </p>
              </div>
              <div className={"contactAddress"}>
                <address>Weiskopffstraße 16</address>
                <address>12459 Berlin</address>
              </div>
              <div className={"contactIcons"}>
                <div>
                  <i className="fas fa-phone-alt"></i>
                  <p>123 4567 890</p>
                </div>
                <div>
                  <i className="far fa-envelope"></i>
                  <p>Inquizable@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"contactRight"}>
          <form
            onSubmit={handleSubmit}
            action="https://formspree.io/f/mqkwbyve"
            method="POST"
          >
            <input
              id="text"
              className='text-black'
              type="text"
              name="text"
              placeholder="Full Name"
              required
            ></input>
            <ValidationError prefix="text" field="text" errors={state.errors} />
            <input
              id="email"
              className='text-black'
              type="email"
              name="email"
              placeholder="Email"
              required
            ></input>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <input
              id="tel"
              className='text-black'
              type="tel"
              name="tel"
              placeholder="Phone"
              required
            ></input>
            <ValidationError prefix="tel" field="tel" errors={state.errors} />
            <textarea
              className="text-black contactTextarea"
              id="message"
              name="message"
              placeholder="Message"
              required
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              className="contactBtn"
              type="submit"
              disabled={state.submitting}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
