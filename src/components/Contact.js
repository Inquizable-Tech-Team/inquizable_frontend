import classes from "./Contact.module.css";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mqkwbyve");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <>
      <div className={classes.Main}>
        <div className={classes.Left}>
          <div className={classes.Container}>
            <div className={classes.LeftInside}>
              <div className={classes.Title}>
                <h1>Get in touch</h1>
              </div>
              <div className={classes.Paragraph}>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className={classes.Address}>
                <address>742 Evergreen Terrace</address>
                <address>springfield, OR 12345</address>
              </div>
              <div className={classes.Icons}>
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
        <div className={classes.Right}>
          <form
            onSubmit={handleSubmit}
            action="https://formspree.io/f/mqkwbyve"
            method="POST"
          >
            <input
              id="text"
              type="text"
              name="text"
              placeholder="Full Name"
              required
            ></input>
            <ValidationError prefix="text" field="text" errors={state.errors} />
            <input
              id="email"
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
              type="tel"
              name="tel"
              placeholder="Phone"
              required
            ></input>
            <ValidationError prefix="tel" field="tel" errors={state.errors} />
            <textarea
              className={classes.Textarea}
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
              className={classes.Btn}
              type="submit"
              disabled={state.submitting}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
