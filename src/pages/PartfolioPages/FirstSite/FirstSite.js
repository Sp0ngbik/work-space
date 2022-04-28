import style from "./style.module.scss";
import { firstSiteConfig } from "./firstSiteConfig";
const FirstSite = () => {
  return (
    <div className={style.bodyFirstSite}>
      <header className={style.headerFirstSite}>
        <img src={firstSiteConfig.logoImg} alt="logoImg not found"></img>
        <div>
          <div className={style.headerLinks}>
            <h2>Home</h2>
            <h2>About</h2>
            <h2>Pricing</h2>
            <h2>Open positions</h2>
            <h2>Blog</h2>
            <h2>Templete</h2>
          </div>
        </div>
        <div>
          <button>Buy now</button>
        </div>
      </header>
      <main>
        <section className={style.upContentBlock}>
          <div className={style.mainBlock}>
            <div className={style.mainContent}>
              <div className={style.mainContentLeftBlock}>
                <div className={style.leftBlockHeadText}>
                  Molecule is a SaaS marketing template that's
                  <span> easy to modify</span>.
                </div>
                <div className={style.leftBlocDiscr}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
                </div>
                <div className={style.leftBlockInput}>
                  <input placeholder="Enter your email"></input>
                  <button>Sign up</button>
                </div>
                <div className={style.signDiscr}>
                  By clicking Sign Up you're confirming that you agree with our
                  <span> Terms and Conditions</span>.
                </div>
              </div>
              <img
                className={style.mainContentRightBlock}
                src={firstSiteConfig.frame}
                alt="frame not found"
              />
            </div>
          </div>
          <div className={style.usage}>
            Used by the leading SaaS companies of tomorrow.
          </div>
          <div className={style.sponsorImgBlock}>
            <img
              src={firstSiteConfig.mainBlockImg1}
              alt="mainBlockImg1 not found"
            />
            <img
              src={firstSiteConfig.mainBlockImg2}
              alt="mainBlockImg2 not found"
            />
            <img
              src={firstSiteConfig.mainBlockImg3}
              alt="mainBlockImg3 not found"
            />
            <img
              src={firstSiteConfig.mainBlockImg4}
              alt="mainBlockImg4 not found"
            />
            <img
              src={firstSiteConfig.mainBlockImg5}
              alt="mainBlockImg5 not found"
            />
            <img
              src={firstSiteConfig.mainBlockImg6}
              alt="mainBlockImg6 not found"
            />
          </div>
        </section>
        <section className={style.secondContentBlock}>
          <div className={style.secondBlockMainContent}>
            <div>
              <img
                className={style.secondContLeftBlock}
                src={firstSiteConfig.secondBlockImg}
                alt="secondBlock png not found"
              />
            </div>
            <div className={style.secondContRightBlock}>
              <div className={style.secondRightUpBlock}>
                <div>Features</div>
                <h3 className={style.secondRightTitle}>
                  See how easy it is to <span>edit Molecule</span> to your
                  liking.
                </h3>
                <h4>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
                </h4>
              </div>
              <div className={style.secBlockRightBottom}>
                <div>
                  <div className={style.titleBottomBlock}>
                    <img
                      className={style.rightBottonImage}
                      src={firstSiteConfig.blockImg1}
                      alt="blockimg1 not found"
                    />
                    <span>Pages you'll use</span>
                  </div>
                  <div className={style.titleBottomBlock}></div>
                  <h4>
                    Molecule doesn't come with 200+ page layout — it comes with
                    the pages yo'll actually use.
                  </h4>
                </div>
                <div>
                  <div className={style.titleBottomBlock}>
                    <img
                      className={style.rightBottonImage}
                      src={firstSiteConfig.blockImg2}
                      alt="blockimg2 not found"
                    />
                    <span>Native image effects</span>
                  </div>
                  <h4>
                    Instead of having to add effects to images in an image
                    editor, simply replace the existing images and all effects
                    will appear.
                  </h4>
                </div>
                <div>
                  <div className={style.titleBottomBlock}>
                    <img
                      className={style.rightBottonImage}
                      src={firstSiteConfig.blockImg3}
                      alt="blockimg3 not found"
                    />
                    <span>Global typography</span>
                  </div>
                  <h4>
                    Change the body font once and every single line of text on
                    the page will change.
                  </h4>
                </div>
                <div>
                  <div className={style.titleBottomBlock}>
                    <img
                      className={style.rightBottonImage}
                      src={firstSiteConfig.blockImg4}
                      alt="blockimg4 not found"
                    />
                    <span>Global colors</span>
                  </div>
                  <h4>
                    Change the global color swatches and see your colors change
                    everywhere.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={style.teamStats}>
          <div className={style.stats}>
            <div className={style.statsContent}>
              <div className={style.statsLeftBlock}>
                <div>Stats</div>
                <h3>
                  Teams all over the place have already used Molecule to get
                  <span> stunning results </span>.
                </h3>
              </div>
              <div className={style.statsRightBlock}>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
                </div>
                <div className={style.statsPercent}>
                  <div>
                    <h3>87%</h3>
                    <div>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                  </div>
                  <div>
                    <h3>99%</h3>
                    <div>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.teamInfo}>
            <div className={style.teamInfoLeftBlock}>
              <h4>Team</h4>
              <h3>
                Meet the <span>talented team</span> behind the molecule SaaS
                template.
              </h3>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </div>
              <button>Meet the team</button>
            </div>
            <div className={style.teamImages}>
              <div className={style.teamImageFirstBlock}>
                <img
                  src={firstSiteConfig.teamImage1}
                  alt="teamImage1 not found"
                />
                <img
                  src={firstSiteConfig.teamImage2}
                  alt="teamImage2 not found"
                />
              </div>
              <div className={style.teamImageSecondBlock}>
                <img
                  src={firstSiteConfig.teamImage3}
                  alt="teamImage3 not found"
                />
              </div>
            </div>
          </div>
        </section>
        <section className={style.buyRequest}>
          <div>
            <img src={firstSiteConfig.bigLogo} alt="bitLogo not found" />
            <h2>Think you've seen enough?</h2>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </h3>
            <div className={style.buyRequest_buttonBlock}>
              <button>Buy molecule</button>
              <button>Read more</button>
            </div>
          </div>
        </section>
        <section className={style.stepsToBuild}>
          <div className={style.stepsToBuild_leftBlock}>
            <div>Process</div>
            <span>
              What steps are required to build a SaaS marketing site using the
              molecule template?
            </span>
            <button>Get molecule</button>
          </div>
          <div className={style.stepsToBuild_rightBlock}>
            <div className={style.stepsRightBlockImages}>
              <div className={style.rightBlockImage}>
                <img
                  src={firstSiteConfig.stepsImages1}
                  alt="stepsImages1 not found"
                />
                <div>
                  <h2>Get molecule</h2>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                  </div>
                </div>
              </div>
              <div className={style.rightBlockImage}>
                <img
                  src={firstSiteConfig.stepsImages2}
                  alt="stepsImages2 not found"
                />
                <div>
                  <h2>Edit fonts, colors, images & text</h2>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                  </div>
                </div>
              </div>
              <div className={style.rightBlockImage}>
                <img
                  src={firstSiteConfig.stepsImages3}
                  alt="stepsImages3 not found"
                />
                <div>
                  <h2>Publish!</h2>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={style.creators}>
          <div className={style.creatorsDiscription}>
            <div>
              <img
                className={style.slideLogoDiscr}
                src={firstSiteConfig.chillIndImg}
                alt="ChillInd not found"
              />
              <div className={style.slideMainDiscr}>
                "Using molecule for our web was the best decision we made last
                year — and we made a ton of great decisions, trust me!"
              </div>
              <div className={style.slideContentBlock}>
                <img
                  src={firstSiteConfig.leftArrowSlider}
                  alt="left arrow slider not found"
                />
                <img
                  src={firstSiteConfig.designerPhoto}
                  alt="designer not found"
                />
                <img
                  src={firstSiteConfig.rightArrowSlider}
                  alt="right arrow slider not found"
                />
              </div>
              <div className={style.memberName}>Mark Watney</div>
              <div className={style.memberPosition}>
                Marketing Director, Chill Industries
              </div>
            </div>
          </div>
        </section>
        <section className={style.nonMissMessage}>
          <div className={style.nonMissBlock}>
            <div className={style.leftMissBlock}>
              <h5>Don't miss out!</h5>
              <div>
                Sign-up & we'll let you know as soon as we have something to
                show off. (Don't worry, we don't spam).
              </div>
            </div>
            <div className={style.rightMissBlock}>
              <div>
                <input placeholder="Enter your email" />
                <button>Sign up</button>
              </div>
              <div className={style.rightMissDiscr}>
                <div>
                  By clicking Sign Up you're confirming that you agree with our
                  <span> Terms and Conditions .</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={style.blogSection}>
          <div className={style.blogBody}>
            <div className={style.blogLabel}>Blog</div>
            <div className={style.blogTitle}>
              <h3>
                The <span>latest news</span> from Molecule.
              </h3>
              <div className={style.blockView}>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <button>View all</button>
              </div>
              <div className={style.blogMainInfo}>
                <div>
                  <img
                    src={firstSiteConfig.blogPhoto1}
                    alt="blogPhoto1 not found"
                  />
                  <h2>How to drive sales in SaaS</h2>
                  <span>
                    Vestibulum sit amet urna turpis. Mauris euismod elit et nisi
                    ultrices, ut faucibus orci tincidunt.
                  </span>
                  <div className={style.bloggerInfo}>
                    <img
                      src={firstSiteConfig.blogPerson1}
                      alt="blogPerson1 not found"
                    />
                    <div>
                      <div>Dwight Schrute</div>
                      <div className={style.blogerResponseStatus}>
                        January 25, 2022 <span>28 min read</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src={firstSiteConfig.blogPhoto2}
                    alt="blogPhoto2 not found"
                  />
                  <h2>Hiring the right talent</h2>
                  <span>
                    Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex,
                    condimentum dapibus congue et, vulputate ut ligula.
                  </span>
                  <div className={style.bloggerInfo}>
                    <img
                      src={firstSiteConfig.blogPerson2}
                      alt="blogPerson2 not found"
                    />
                    <div>
                      <div>Lexus Simonis</div>
                      <div className={style.blogerResponseStatus}>
                        January 25, 2022 <span>21 min read</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src={firstSiteConfig.blogPhoto3}
                    alt="blogPhoto3 not found"
                  />
                  <h2>Is remote work for you? (Yes it is)</h2>
                  <span>
                    Duis tristique sed lorem a vestibulum. Cras commodo
                    consequat orci, in convallis risus egestas non.
                  </span>
                  <div className={style.bloggerInfo}>
                    <img
                      src={firstSiteConfig.blogPerson3}
                      alt="blogPerson3 not found"
                    />
                    <div>
                      <div>Doug Howell</div>
                      <div className={style.blogerResponseStatus}>
                        January 25, 2022 <span>29 min read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={style.startDesigh}>
          <div>
            <div>
              <h3>Ready to start designing?</h3>
              <span>Molecule is available today!</span>
            </div>
            <button>Get Molecule</button>
          </div>
        </section>
      </main>
      <footer className={style.footerSection}>
        <div className={style.footerBody}>
          <div>
            <img
              src={firstSiteConfig.footerLogo}
              alt="footer logoImg not found"
            />
            <div className={style.footerLinks}>
              <span>Home</span>
              <span>About</span>
              <span>Pricing</span>
              <span>Open positions</span>
              <span>Blog</span>
            </div>
            <div className={style.socialMediaIcons}>
              <img
                src={firstSiteConfig.instaIcon}
                alt="instaIcon footer not found"
              />
              <img
                src={firstSiteConfig.twitterIcon}
                alt="twitterIcon footer not found"
              />
              <img
                src={firstSiteConfig.linkedInIcon}
                alt="linkedInIcon footer not found"
              />
            </div>
          </div>
          <div className={style.footerBottom}>
            <div>
              © Molecule, LLC. All rights reserved. Powered by
              <span> Webflow .</span>
            </div>
            <div className={style.politicsEtc}>
              <span>Licensing</span>
              <span>Privacy Policy</span>
              <span>Terms & conditions</span>
              <span>Cookie policy</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FirstSite;
