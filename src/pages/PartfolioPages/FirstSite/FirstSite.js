import style from "./style.module.scss";
import logoImg from "./firstSiteImages/logo-img.svg";
import mainBlockImg1 from "./firstSiteImages/img1.svg";
import mainBlockImg2 from "./firstSiteImages/img2.svg";
import mainBlockImg3 from "./firstSiteImages/img3.svg";
import mainBlockImg4 from "./firstSiteImages/img4.svg";
import mainBlockImg5 from "./firstSiteImages/img5.svg";
import mainBlockImg6 from "./firstSiteImages/img6.svg";
import frame from "./firstSiteImages/Frame.png";
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
      </main>
    </div>
  );
};

export default FirstSite;
