import React from "react";
import "./portfolioStyle.css";
const portfolioTimeline = () => {
  return (
    <>
       <div
        class="page"
        data-uia-timeline-skin="5"
        data-uia-timeline-adapter-skin-5="uia-card"
      >
        <div class="uia-timeline">
          <div class="uia-timeline__container">
            <div class="uia-timeline__line"></div>
            <div class="uia-timeline__groups">
              <section
                class="uia-timeline__group"
                aria-labelledby="timeline-demo-5-heading-1"
              >
                <div class="uia-timeline__dot"></div>
                <div class="uia-timeline__point uia-card">
                  <div class="uia-card__container">
                    <div class="uia-card__intro">
                      <h3
                        id="timeline-demo-5-heading-1"
                        class="page__job-name uia-heading ra-heading"
                      >
                        Frontend developer at web-studio TOP1
                      </h3>
                    </div>
                    <div class="uia-card__body">
                      <p>
                        This is my current place of work. I am UX designer:
                        working on information architecture, userflows,
                        wireframes and create simple UI drafts. The result is
                        interactive prototypes to illustrate different
                        scenarios.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <section
                class="uia-timeline__group"
                aria-labelledby="timeline-demo-5-heading-2"
              >
                <div class="uia-timeline__dot"></div>
                <div class="uia-timeline__point uia-card">
                  <div class="uia-card__container">
                    <div class="uia-card__intro">
                      <h3
                        id="timeline-demo-5-heading-2"
                        class="page__job-name uia-heading ra-heading"
                      >
                        Frontend developer at web-studio Web E Studio
                      </h3>
                    </div>
                    <div class="uia-card__body">
                      <p>
                        This is my current place of work. I am UX designer:
                        working on information architecture, userflows,
                        wireframes and create simple UI drafts. The result is
                        interactive prototypes to illustrate different
                        scenarios.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default portfolioTimeline;
