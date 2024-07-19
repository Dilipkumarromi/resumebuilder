import React from "react";
import "./timeLineStyle.css";
const TimeLine = () => {
  return (
    <>
      
    
      <div
        class="page"
        data-uia-timeline-skin="4"
        data-uia-timeline-adapter-skin-4="uia-card-skin-#1"
      >
        <div class="uia-timeline">
          <div class="uia-timeline__container">
            <div class="uia-timeline__line"></div>
            <div class="uia-timeline__annual-sections">
              <span class="uia-timeline__year" aria-hidden="true">
                2008
              </span>
              <div class="uia-timeline__groups">
                <section
                  class="uia-timeline__group"
                  aria-labelledby="timeline-demo-4-heading-1"
                >
                  <div
                    class="uia-timeline__point uia-card"
                    data-uia-card-skin="1"
                    data-uia-card-mod="1"
                  >
                    <div class="uia-card__container">
                      <div class="uia-card__intro">
                        <h3
                          id="timeline-demo-4-heading-1"
                          class="ra-heading ha-screen-reader"
                        >
                          Philadelphia Museum School of Industrial Art
                        </h3>
                        <span class="uia-card__time">
                          <time datetime="2008-02-02">
                            <span class="uia-card__day">2</span>
                            <span>
                              Feb
                              <span class="ha-screen-reader">ruary 2008</span>
                            </span>
                          </time>
                        </span>
                      </div>
                      <div class="uia-card__body">
                        <div class="uia-card__description">
                          <p>
                            Attends the Philadelphia Museum School of Industrial
                            Art. Studies design with Alexey Brodovitch, art
                            director at Harper's Bazaar, and works as his
                            assistant.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  class="uia-timeline__group"
                  aria-labelledby="timeline-demo-4-heading-2"
                >
                  <div
                    class="uia-timeline__point uia-card"
                    data-uia-card-skin="1"
                    data-uia-card-mod="1"
                  >
                    <div class="uia-card__container">
                      <div class="uia-card__intro">
                        <h3 id="timeline-demo-4-heading-2" class="ra-heading">
                          The part of my life in University of Pennsylvania
                        </h3>
                        <span class="uia-card__time">
                          <time datetime="2008-09-02">
                            <span class="uia-card__day">2</span>
                            <span>
                              Sept
                              <span class="ha-screen-reader">ember 2008</span>
                            </span>
                          </time>
                        </span>
                      </div>
                      <div class="uia-card__body">
                        <div class="uia-card__description">
                          <p>
                            Started from University of Pennsylvania. This is an
                            important stage of my career. Here I worked in the
                            local magazine. The experience greatly affected me
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div class="uia-timeline__annual-sections">
              <span class="uia-timeline__year" aria-hidden="true">
                2014
              </span>
              <div class="uia-timeline__groups">
                <section
                  class="uia-timeline__group"
                  aria-labelledby="timeline-demo-4-heading-3"
                >
                  <div
                    class="uia-timeline__point uia-card"
                    data-uia-card-skin="1"
                    data-uia-card-mod="1"
                  >
                    <div class="uia-card__container">
                      <div class="uia-card__intro">
                        <h3
                          id="timeline-demo-4-heading-3"
                          class="ra-heading ha-screen-reader"
                        >
                          My travel to Europe
                        </h3>
                        <span class="uia-card__time">
                          <time datetime="2014-07-14">
                            <span class="uia-card__day">14</span>
                            <span>
                              Jul<span class="ha-screen-reader">e 2014</span>
                            </span>
                          </time>
                        </span>
                      </div>
                      <div class="uia-card__body">
                        <div class="uia-card__description">
                          <p>
                            Travels to France, Italy, Spain, and Peru. After
                            completing fashion editorial in Lima, prolongs stay
                            to make portraits of local people in a daylight
                            studio.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const DoubleTimeLine = () => {
  return (
    <>
      <div class="page">
        <div
          class="uia-timeline"
          data-uia-timeline-skin="2"
          data-uia-timeline-adapter-skin-2="ui-card-skin-#1"
          data-uia-card-skin="1"
          data-uia-card-mod="1"
        >
          <div class="uia-timeline__container">
            <div class="uia-timeline__line"></div>
            <div class="uia-timeline__groups">
              <section
                class="uia-timeline__group"
                aria-labelledby="experience-step-1-heading"
              >
                <div class="uia-timeline__dot"></div>
                <div class="uia-timeline__point uia-card">
                  <div class="uia-card__container">
                    <div class="uia-card__intro">
                      <h3 id="experience-step-1-heading" class="ra-heading">
                        Frontend developer at web-studio TOP1
                      </h3>
                      <span class="uia-card__time">
                        <span class="ha-screen-reader">from</span>
                        <time datetime="2012-02">February 2013</time>
                        <span
                          class="uia-card__time-divider"
                          aria-hidden="true"
                        ></span>
                        <span class="ha-screen-reader">to</span>
                        <time datetime="2013-07">July 2014</time>
                      </span>
                    </div>
                    <div class="uia-card__body">
                      <div class="uia-card__description">
                        <p>
                          The web studio TOP1 was my first company, where I was
                          developing sites using CMS Joomla. Those days were
                          very funny. I had to maintain browsers which worked in
                          different ways. Maybe it's not necessary to say IE 6
                          was my favorite browser. Also I made buttons with
                          rounded corners via 4 pictures! That was fun.
                        </p>
                        <p>
                          As a young developer I thought that I was good at it.
                          But my code sucked. For example, I didn't know about
                          W3C standards or best practices of development. Maybe
                          that happened because I didn't have experienced
                          mentors and no one could point out my mistakes.
                        </p>
                        <p>
                          But one day I felt it was time for a change. I quit
                          the company with the thought to find a mentor who can
                          train me.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section
                class="uia-timeline__group"
                aria-labelledby="experience-step-2-heading"
              >
                <div class="uia-timeline__dot"></div>
                <div class="uia-timeline__point uia-card">
                  <div class="uia-card__container">
                    <div class="uia-card__intro">
                      <h3 id="experience-step-2-heading" class="ra-heading">
                        Frontend developer at web-studio Web E Studio
                      </h3>
                      <span class="uia-card__time">
                        <span class="ha-screen-reader">from</span>
                        <time datetime="2013-09">September 2013</time>
                        <span
                          class="uia-card__time-divider"
                          aria-hidden="true"
                        ></span>
                        <span class="ha-screen-reader">to</span>
                        <time datetime="2014-02">February 2014</time>
                      </span>
                    </div>
                    <div class="uia-card__body">
                      <div class="uia-card__description">
                        <p>
                          My fears were confirmed when I was going through job
                          interview. I realized I was a really green developer.
                          But one day I met a great frontend developer Mikhail
                          and he invited me to join his team as a junior
                          developer.
                        </p>
                        <p>
                          I immediately plunged into another world in the first
                          days. It was very difficult for me because I started
                          to work among people who were more experienced than
                          me. Mikhail was demanding, but a fair lead. He helped
                          me but I couldn't prove myself because I felt
                          self-doubt.
                        </p>
                      </div>
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
const TreeTimeLine = () => {
  return (
    <>
      <div
        class="page"
        data-uia-timeline-skin="3"
        data-uia-timeline-adapter-skin-3="uia-card-skin-#1"
      >
        <div class="uia-timeline">
          <div class="uia-timeline__container">
            <div class="uia-timeline__line"></div>
            <div class="uia-timeline__annual-sections">
              <span class="uia-timeline__year" aria-hidden="true">
                2008
              </span>
              <div class="uia-timeline__groups">
                <section
                  class="uia-timeline__group"
                  aria-labelledby="timeline-demo-1-heading-1"
                >
                  <div
                    class="uia-timeline__point uia-card"
                    data-uia-card-skin="1"
                    data-uia-card-mod="1"
                  >
                    <div class="uia-card__container">
                      <div class="uia-card__intro">
                        <h3
                          id="timeline-demo-1-heading-1"
                          class="ra-heading ha-screen-reader"
                        >
                          Philadelphia Museum School of Industrial Art
                        </h3>
                        <span class="uia-card__time">
                          <time datetime="2008-02-02">
                            <span class="uia-card__day">2</span>
                            <span>
                              Feb
                              <span class="ha-screen-reader">ruary 2008</span>
                            </span>
                          </time>
                        </span>
                      </div>
                      <div class="uia-card__body">
                        <div class="uia-card__description">
                          <p>
                            Attends the Philadelphia Museum School of Industrial
                            Art. Studies design with Alexey Brodovitch, art
                            director at Harper's Bazaar, and works as his
                            assistant.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  class="uia-timeline__group"
                  aria-labelledby="timeline-demo-1-heading-2"
                >
                  <div
                    class="uia-timeline__point uia-card"
                    data-uia-card-skin="1"
                    data-uia-card-mod="1"
                  >
                    <div class="uia-card__container">
                      <div class="uia-card__intro">
                        <h3 id="timeline-demo-1-heading-2" class="ra-heading">
                          The part of my life in University of Pennsylvania
                        </h3>
                        <span class="uia-card__time">
                          <time datetime="2008-09-02">
                            <span class="uia-card__day">2</span>
                            <span>
                              Sept
                              <span class="ha-screen-reader">ember 2008</span>
                            </span>
                          </time>
                        </span>
                      </div>
                      <div class="uia-card__body">
                        <div class="uia-card__description">
                          <p>
                            Started from University of Pennsylvania. This is an
                            important stage of my career. Here I worked in the
                            local magazine. The experience greatly affected me
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div class="uia-timeline__annual-sections">
              <span class="uia-timeline__year" aria-hidden="true">
                2014
              </span>
              <div class="uia-timeline__groups">
                <section
                  class="uia-timeline__group"
                  aria-labelledby="timeline-demo-1-heading-3"
                >
                  <div
                    class="uia-timeline__point uia-card"
                    data-uia-card-skin="1"
                    data-uia-card-mod="1"
                  >
                    <div class="uia-card__container">
                      <div class="uia-card__intro">
                        <h3
                          id="timeline-demo-1-heading-3"
                          class="ra-heading ha-screen-reader"
                        >
                          My travel to Europe
                        </h3>
                        <span class="uia-card__time">
                          <time datetime="2014-07-14">
                            <span class="uia-card__day">14</span>
                            <span>
                              Jul<span class="ha-screen-reader">e 2014</span>
                            </span>
                          </time>
                        </span>
                      </div>
                      <div class="uia-card__body">
                        <div class="uia-card__description">
                          <p>
                            Travels to France, Italy, Spain, and Peru. After
                            completing fashion editorial in Lima, prolongs stay
                            to make portraits of local people in a daylight
                            studio.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const timeLineStyle = {
  TimeLine,
  DoubleTimeLine,
};
export default timeLineStyle;
