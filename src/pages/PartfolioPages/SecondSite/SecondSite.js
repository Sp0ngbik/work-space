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
      <main>
        <div className={style.mainBlockUpperContent}>
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
                proud to help the injured throughout the nation, including
                workers who were working in foreign waters at the time of the
                incident go up against the largest offshore companies and win.
              </p>
              {/* need to change picture cuz background */}
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
          <div className={style.mainDiscriptionSecondBlock}>
            <div className={style.secondBlockContent}>
              <h2>
                Explore The Perfect <br /> Out Practice Areas
              </h2>
              <img
                src={secondSiteImages.miniLogo}
                alt="mini logo on content not found"
              />
            </div>
            <p>
              We are a group of civil litigation/trial attorneys who focus on
              providing a justice based on the issues relating to insurance
              defense, insurance coverage, bad faith, insurance fraud and
              criminal litigation.
            </p>
          </div>
          <div className={style.secondBlockSelectSection}>
            <div>
              <h2>Business Law</h2>
              <p>
                Be aware of new developments, as laws and rules often change
                based on the situation.
              </p>
              <div className={style.buttonSectionDiscr}>
                <img
                  src={secondSiteImages.firstDisrcLogo}
                  alt="first discr logo not found"
                />
                <button>View More</button>
              </div>
            </div>
            <div>
              <h2>Construction Law</h2>
              <p>
                Never judge, just listen and advise. Even if your client has
                made a bad decision in the case.
              </p>
              <div className={style.buttonSectionDiscr}>
                <img
                  src={secondSiteImages.secDiscrLogo}
                  alt="sec discr logo not found"
                />
                <button>View More</button>
              </div>
            </div>
            <div>
              <h2>Car Accident</h2>
              <p>
                Being untruthful will get you nowhere and give you a reputation
                of the dishonesty in law.
              </p>
              <div className={style.buttonSectionDiscr}>
                <img
                  src={secondSiteImages.thirdDiscrLogo}
                  alt="third discr logo not found"
                />
                <button>View More</button>
              </div>
            </div>
            <div>
              <h2>Wrongful Death</h2>
              <p>
                Keep yourself up-to-date on your area of law. Be aware of new
                justice, as laws and rules.
              </p>
              <div className={style.buttonSectionDiscr}>
                <img
                  src={secondSiteImages.fourthDiscrLogo}
                  alt="first discr logo not found"
                />
                <button>View More</button>
              </div>
            </div>
            <div>
              <h2>Criminal Law</h2>
              <p>
                Our attorneys are fully committed to providing you with the
                support and attention that you deserve.
              </p>
              <div className={style.buttonSectionDiscr}>
                <img
                  src={secondSiteImages.fifthDiscrLogo}
                  alt="first discr logo not found"
                />
                <button>View More</button>
              </div>
            </div>
            <div>
              <h2>Family Law</h2>
              <p>
                You may find yourself unable to work or complete work-related
                responsibilities safely.
              </p>
              <div className={style.buttonSectionDiscr}>
                <img
                  src={secondSiteImages.sixDiscrLogo}
                  alt="first discr logo not found"
                />
                <button>View More</button>
              </div>
            </div>
          </div>
        </div>
        <div className={style.mainBlockSecondContent}>
          <h2>
            Fighting To Get What <br />
            You Deserve
          </h2>
          <img src={secondSiteImages.equalMiniLogo} alt="mini logo not found" />
          <p>
            Our board-certified family law attorneys work to achieve a fair and
            <br />
            timely resolution of the legal issues in your case.
          </p>
          <div className={style.companyStats}>
            <div className={style.statsSection}>
              <div className={style.upperStatsBlock}>
                <img
                  src={secondSiteImages.heartStats}
                  alt="heart stats not found"
                />
                <h2>7230</h2>
              </div>
              <div className={style.bottomStatsBlock}>
                <h3>Trusted clients</h3>
                <p>Number Of Clients We've</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SecondSite;
