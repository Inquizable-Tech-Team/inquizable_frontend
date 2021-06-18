import React, {Fragment} from "react";
import classes from "./About.module.css";
const About = () => {
  return (
    <Fragment>
      <div className={classes.Main}>
        <div className={classes.Left}>
          <div className={classes.Container}>
            <div className={classes.LeftInside}>
              <div className={classes.LeftInsideTitle}>
                <p>VALUABLE METRICS</p>
              </div>
              <div className={classes.LeftInsideBigTitle}>
                <h1>Get actionable data that will help grow your business</h1>
              </div>
              <div className={classes.LeftInsideParagraph}>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using Content
                  here, content here', making it look like readable English.
                </p>
              </div>
              <div className={classes.LeftInsideSplit}>
                <div className={classes.Split}>
                  <div className={classes.SplitLeft}>
                    <h1>8K+</h1>
                    <p>
                      <span>Companies</span> making it look like readable
                      English.
                    </p>
                  </div>
                  <div className={classes.SplitRight}>
                    <h1>25K+</h1>
                    <p>
                      <span>Companies</span> making it look like readable
                      English.
                    </p>
                  </div>
                </div>
              </div>

              <div className={classes.LeftInsideSplit}>
                <div className={classes.Split}>
                  <div className={classes.SplitLeft}>
                    <h1>8K+</h1>
                    <p>
                      <span>Companies</span> making it look like readable
                      English.
                    </p>
                  </div>
                  <div className={classes.SplitRight}>
                    <h1>25K+</h1>
                    <p>
                      <span>Companies</span> making it look like readable
                      English.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.Right}></div>
      </div>
    </Fragment>
  );
};
export default About;
