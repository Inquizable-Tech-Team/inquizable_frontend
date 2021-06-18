import React, {Fragment} from "react";
import "./About.css";

const About = () => {
  return (
    <Fragment>
      <div className={"aboutMain"}>
        <div className={"aboutLeft"}>
          <div className={"aboutContainer"}>
            <div className={"aboutLeftInside"}>
              <div className={"aboutLeftInsideTitle"}>
                <p>VALUABLE METRICS</p>
              </div>
              <div className={"aboutLeftInsideBigTitle"}>
                <h1>Get actionable data that will help grow your business</h1>
              </div>
              <div className={"aboutLeftInsideParagraph"}>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using Content
                  here, content here', making it look like readable English.
                </p>
              </div>
              <div className={"aboutLeftInsideSplit"}>
                <div className={"aboutSplit"}>
                  <div className={"aboutSplitLeft"}>
                    <h1>8K+</h1>
                    <p>
                      <span>Companies</span> making it look like readable
                      English.
                    </p>
                  </div>
                  <div className={"aboutSplitRight"}>
                    <h1>25K+</h1>
                    <p>
                      <span>Companies</span> making it look like readable
                      English.
                    </p>
                  </div>
                </div>
              </div>

              <div className={"aboutLeftInsideSplit"}>
                <div className={"aboutSplit"}>
                  <div className={"aboutSplitLeft"}>
                    <h1>8K+</h1>
                    <p>
                      <span>Companies</span> making it look like readable
                      English.
                    </p>
                  </div>
                  <div className={"aboutSplitRight"}>
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
        <div className={"aboutRight"}></div>
      </div>
    </Fragment>
  );
};
export default About;
