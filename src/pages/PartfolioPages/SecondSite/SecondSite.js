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
      <main className={style.mainBlock}>
        <div className={style.mainBlockDiscription}>
          <div className={style.mainBlockImageSection}>
            <img src={secondSiteImages.mainFirst} alt="first not found" />
            <img src={secondSiteImages.mainSec} alt="second img not found" />
          </div>
          <div className={style.mainBLockTextColumn}>
            <h3>
              Welcome to Attorney Law - <br /> Lawyer and Law Firm Company
            </h3>
            <img
              src={secondSiteImages.miniLogo}
              alt="minilogo discr not found"
            />
            <p>
              Although we are located in Brooklyn, our maritime lawyers are
              proud to help the injured throughout the nation, including workers
              who were working in foreign waters at the time of the incident go
              up against the largest offshore companies and win.
            </p>
            <div className={style.smallMateBlock}>
              <img
                src={secondSiteImages.smallMate}
                alt="small mate not found ;C"
              />
              <h2>Peter Parker</h2>
            </div>
            <div className={style.mainBlockButtons}>
              <div className={style.succesButton}>
                <img
                  src={secondSiteImages.successCount}
                  alt="sucess count not found"
                />
                <div>
                  <p>95%</p>
                  <p>Case sucess</p>
                </div>
              </div>
              <div className={style.experienceButton}>
                <img
                  src={secondSiteImages.experienceCount}
                  alt="exp count not found"
                />
                <div>
                  <p>Years</p>
                  <p>Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SecondSite;
