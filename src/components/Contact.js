import React, {Fragment} from "react";
import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Navbar
 from "./Navbar";
const Contact = () => {
  const [state, handleSubmit] = useForm("mqkwbyve");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
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
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className={"contactAddress"}>
                <address>742 Evergreen Terrace</address>
                <address>springfield, OR 12345</address>
              </div>
              <div className={"contactIcons"}>
                <div>
                  <i class="fas fa-phone-alt"></i>
                  <p>010 23667 37497</p>
                </div>
                <div>
                  <i class="far fa-envelope"></i>
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
              className={"contactTextarea"}
              className='text-black'
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
              className={"contactBtn"}
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
