import style from "./style.module.scss";
import { secondSiteImages } from "./secondSiteConfig";

const SecondSite = () => {
  return (
    <div>
      <header className={style.headerBlock}>
        <div className={style.headerBlockShadow}>
          <div className={style.headerUpperBlock}>
            <img src={secondSiteImages.siteLogo} alt="sitelogo not found" />
            <button>Book A Consultation</button>
          </div>
          <nav className={style.navBarLinks}>
            <div className={style.linksHeader}>
              <h3>Home</h3>
              <h3>About Us</h3>
              <h3>Pages</h3>
              <h3>Contact Us</h3>
            </div>
            <div className={style.headerContactInfo}>
              <img src={secondSiteImages.callImage} alt="callimg not found" />
              <div className={style.connectInfo}>
                <h5>Call Us On:</h5>
                <h6>911-987654321</h6>
              </div>
              <img
                src={secondSiteImages.messageFrame}
                alt="messageimg not found"
              />
              <div className={style.connectInfo}>
                <h5>Email Us On:</h5>
                <h6>yourmail@mail.com</h6>
              </div>
            </div>
          </nav>
          <div className={style.ourGroupInfo}>
            <div className={style.leftBlockOurGroup}>
              <img src={secondSiteImages.miniLogo} alt="mini logo not found" />
              <h5>We're Group Of Certified Law Professionals</h5>
              <h3>
                we have helped countless maritime workers and their families go
                up against the largest offshore companies and win.
              </h3>
              <button>Get In Touch</button>
            </div>
            <div className={style.rightBlockOurGroup}>
              <img src={secondSiteImages.mate} alt="mate not found" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default SecondSite;
