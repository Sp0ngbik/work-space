import style from "./style.module.scss";
import logoImg from "./firstSiteImages/logo-img.svg";
import mainBlockImg1 from "./firstSiteImages/img1.svg";
import mainBlockImg2 from "./firstSiteImages/img2.svg";
import mainBlockImg3 from "./firstSiteImages/img3.svg";
import mainBlockImg4 from "./firstSiteImages/img4.svg";
import mainBlockImg5 from "./firstSiteImages/img5.svg";
import mainBlockImg6 from "./firstSiteImages/img6.svg";
import secondBlockImg from "./firstSiteImages/secondBlock.png";
import frame from "./firstSiteImages/Frame.png";
import blockImg1 from "./firstSiteImages/block1.svg";
import blockImg2 from "./firstSiteImages/block2.svg";
import blockImg3 from "./firstSiteImages/block3.svg";
import blockImg4 from "./firstSiteImages/block4.svg";
import teamImage1 from "./firstSiteImages/IMAGE.png";
import teamImage2 from "./firstSiteImages/IMAGE2.png";
import teamImage3 from "./firstSiteImages/IMAGE3.png";
import bigLogo from "./firstSiteImages/imageBig_logo.svg";

import { Button } from "antd";
const FirstSite = () => {
  return (
    <div className={style.bodyFirstSite}>
      <header className={style.headerFirstSite}>
        <img src={logoImg} alt="logoImg not found"></img>
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
          <Button>Buy now</Button>
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
                  <Button>Sign up</Button>
                </div>
                <div className={style.signDiscr}>
                  By clicking Sign Up you're confirming that you agree with our
                  <span> Terms and Conditions</span>.
                </div>
              </div>
              <img
                className={style.mainContentRightBlock}
                src={frame}
                alt="frame not found"
              />
            </div>
          </div>
          <div className={style.usage}>
            Used by the leading SaaS companies of tomorrow.
          </div>
          <div className={style.sponsorImgBlock}>
            <img src={mainBlockImg1} alt="mainBlockImg1 not found" />
            <img src={mainBlockImg2} alt="mainBlockImg2 not found" />
            <img src={mainBlockImg3} alt="mainBlockImg3 not found" />
            <img src={mainBlockImg4} alt="mainBlockImg4 not found" />
            <img src={mainBlockImg5} alt="mainBlockImg5 not found" />
            <img src={mainBlockImg6} alt="mainBlockImg6 not found" />
          </div>
        </section>
        <section className={style.secondContentBlock}>
          <div className={style.secondBlockMainContent}>
            <div>
              <img
                className={style.secondContLeftBlock}
                src={secondBlockImg}
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
                      src={blockImg1}
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
                      src={blockImg2}
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
                      src={blockImg3}
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
                      src={blockImg4}
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
                <img src={teamImage1} alt="teamImage1 not found" />
                <img src={teamImage2} alt="teamImage2 not found" />
              </div>
              <div className={style.teamImageSecondBlock}>
                <img src={teamImage3} alt="teamImage3 not found" />
              </div>
            </div>
          </div>
        </section>
        <section className={style.buyRequest}>
          <div>
            <img src={bigLogo} alt="bitLogo not found" />
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
          <div></div>
        </section>
      </main>
    </div>
  );
};

export default FirstSite;
