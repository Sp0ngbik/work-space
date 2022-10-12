import style from "./style.module.scss";
import { secondSiteImages } from "./secondSiteConfig";
import { Link } from "react-router-dom";

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
            <div className={style.statsSection}>
              <div className={style.upperStatsBlock}>
                <img
                  className={style.starStatsImg}
                  src={secondSiteImages.starStats}
                  alt="star stats not found"
                />
                <h2>98%</h2>
              </div>
              <div className={style.bottomStatsBlock}>
                <h3>Successful Cases</h3>
                <p>Largest winning value</p>
              </div>
            </div>
            <div className={style.statsSection_judge}>
              <div className={style.bottomStatsBlock_judge}>
                <h4>15,890+</h4>
                <span>Criminal Defense</span>
                <span>Case Served</span>
              </div>
            </div>
          </div>
          <div className={style.pathnersBlock}>
            <div className={style.headerPathners}>
              <img
                src={secondSiteImages.parthnersSymbols}
                alt="symbol_1 not found"
              />
              <h2>Meet the Partners</h2>
              <img
                src={secondSiteImages.parthnersSymbols}
                alt="symbol_2 not found"
              />
            </div>
            <div className={style.parthnersBrand}>
              <Link to="/modernHomeParthner">
                <img
                  src={secondSiteImages.modernHomeParthner}
                  alt="modernHome pathner not found"
                />
              </Link>
              <Link to="/vsParthner">
                <img
                  src={secondSiteImages.vsParthner}
                  alt="vsPathner pathner not found"
                />
              </Link>
              <Link to="/brandPathner">
                <img
                  src={secondSiteImages.brandParthner}
                  alt="brandPathner pathner not found"
                />
              </Link>
              <Link to="/natureHomeParthner"></Link>
            </div>
          </div>
        </div>
        <div className={style.historyBlock}>
          <div className={style.historyContent}>
            <div className={style.leftHistory}>
              <h2>
                We Are Top Lawyers <br /> And History
              </h2>
              <img
                src={secondSiteImages.miniLogo}
                alt="mini logo left history not found"
              />
              <div className={style.leftBlockMainContent}>
                <h5>2000 – Establishment of the Company!</h5>
                <h6>
                  The origins of lawyers and the first founders of law make
                  their appearance in Ancient Greece and Rome.
                </h6>
                <h5>2006 – Together we Build</h5>
                <h6>
                  Lawyers in medieval times found themselves struggling to make
                  a living as the legal profession collapsed in the western
                  world.
                </h6>
                <h5>2008 – Completed 10000 cases</h5>
                <h6>
                  When did lawyers first start practicing in the United States?
                  It’s important to understand that the history of attorneys.
                </h6>
                <h5>2011 – We are Number One</h5>
                <h6>
                  Eventually, the prejudices against lawyers started to fall
                  away and the legal profession began to gain respect and power.
                </h6>
              </div>
            </div>
            <div className={style.middleHistory}>
              <img src={secondSiteImages.historyJudge} alt="judge not found" />
            </div>
            <div className={style.rightHistory}>
              <h2>
                We Are Specialised
                <br /> And Experienced
              </h2>
              <img
                src={secondSiteImages.miniLogo}
                alt="mini logo right history not found"
              />
              <div className={style.rightBlockMainContent}>
                <h5>
                  Keep yourself up-to-date on your area of law. Be aware of new
                  developments, as laws and rules often change based on the
                  situation and new cases are being decided every day.
                </h5>
                <div className={style.historyCases}>
                  <div className={style.divorceCase}>
                    <div>Divorce And Family Cases</div>
                    <span>75%</span>
                  </div>
                  <div className={style.propertyCase}>
                    <div>Property And Construction</div>
                    <span>80%</span>
                  </div>
                  <div className={style.bankingCases}>
                    <div>Banking And Finance</div>
                    <span>75%</span>
                  </div>
                  <div className={style.accidentCases}>
                    <div>Accident and Wrongful Death</div>
                    <span>90%</span>
                  </div>
                </div>
                <Link to="/consulting">
                  <button>Free Consulting</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={style.clientReviews}>
          <div className={style.headerClientReviews}>
            <h2>Client Opinions & Reviews</h2>
            <img
              src={secondSiteImages.widthLogo}
              alt="width logo on reviews logo not found"
            />
          </div>
          <div className={style.reviewsExamples}>
            <div>
              <div className={style.reviewContent}>
                <img
                  src={secondSiteImages.reviewsDotsLogo}
                  alt="reviewsDots1 not found"
                />
                <p>
                  Could you please thank Paul personally for me, the stars are
                  for his forehead. The perfect way of handling the case based
                  on the situation.
                </p>
              </div>
              <div className={style.feedBackSender}>
                <img
                  src={secondSiteImages.feedbackPerson1}
                  alt="feedback person 1 not found"
                />
                <div>
                  <p>Natasha</p>
                  <p>Private Employee</p>
                </div>
              </div>
            </div>
            <div>
              <div className={style.feedBackSenderInTop}>
                <img
                  src={secondSiteImages.feedbackPerson2}
                  alt="feedback person 2 not found"
                />
                <div>
                  <p>Hannah Butler</p>
                  <p>Business Sector</p>
                </div>
              </div>
              <div className={style.reviewContentInBottom}>
                <img
                  src={secondSiteImages.reviewsDotsLogo}
                  alt="reviewsDots1 not found"
                />
                <p>
                  Attorney law firm really helped me with all my family law and
                  custody issues at the right time. Words are not enough to
                  thank the firm.
                </p>
              </div>
            </div>
            <div>
              <div className={style.reviewContent}>
                <img
                  src={secondSiteImages.reviewsDotsLogo}
                  alt="reviewsDots1 not found"
                />
                <p>
                  Attorney law firm really helped me with all my family law and
                  custody issues at the right time. Words are not enough to
                  thank the firm.
                </p>
              </div>
              <div className={style.feedBackSender}>
                <img
                  src={secondSiteImages.feedbackPerson3}
                  alt="feedback person 3 not found"
                />
                <div>
                  <p>Phillip Arnold</p>
                  <p>Bus Driver</p>
                </div>
              </div>
            </div>
            <div>
              <div className={style.feedBackSenderInTop}>
                <img
                  src={secondSiteImages.feedbackPerson4}
                  alt="feedback person 4 not found"
                />
                <div>
                  <p>Joshua Warren</p>
                  <p>Private Engineer</p>
                </div>
              </div>
              <div className={style.reviewContentInBottom}>
                <img
                  src={secondSiteImages.reviewsDotsLogo}
                  alt="reviewsDots1 not found"
                />
                <p>
                  I frequently check the Best Lawyers list to select an attorney
                  in areas too familiar with at the end they came and lead to
                  achive the justice.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.workersBlock}>
          <h3>
            Our Experienced Attorney Are Ready
            <br />
            To Answer Any Questions
          </h3>
          <img src={secondSiteImages.widthLogo} alt="width logo not founc" />
          <div className={style.workersPhoto}>
            <div>
              <img src={secondSiteImages.worker1} alt="worker 1 not found" />
              <div>
                <h4>John Turner</h4>
                <p>Civil Attorney</p>
              </div>
            </div>
            <div>
              <div className={style.middleWorkerContainer}>
                <img src={secondSiteImages.worker2} alt="worker 2 not found" />
                <div className={style.workersContacts}>
                  <img
                    src={secondSiteImages.facebookLogo}
                    alt="facebook logo not found"
                  />
                  <img
                    src={secondSiteImages.twitterLogo}
                    alt="twitterLogo logo not found"
                  />
                  <img
                    src={secondSiteImages.instagramLogo}
                    alt="instagramLogo logo not found"
                  />
                  <img
                    src={secondSiteImages.pinterestLogo}
                    alt="pinterestLogo logo not found"
                  />
                </div>
              </div>
              <h4>Martha Black</h4>
              <p>Associate Attorney</p>
            </div>
            <div>
              <img src={secondSiteImages.worker3} alt="worker 3 not found" />
              <h4>Brian Gomez</h4>
              <p>Titular Attorney</p>
            </div>
          </div>
        </div>
        <div className={style.contactInformation}>
          <div className={style.conatactDiscription}>
            <h2>
              Our Professional Expert Law
              <br /> Team Is Always Ready To Serve <br />
              You
            </h2>
            <img
              src={secondSiteImages.miniLogo}
              alt="mini logo contant info not found"
            />
            <p>
              We’re always available for new cases big or small. Send us an
              email and we’ll get in touch shortly, or phone between 8:00 am and
              7:00 pm Monday to Saturday.
            </p>
            <button>Contact Us</button>
          </div>
          <div className={style.consultationInfo}>
            <div>
              <h3>Get a Free Consultation</h3>
              <p>
                You can get free consultation and case evaluation from us via
                the following contact number
              </p>
              <div className={style.callContacts}>
                <button>
                  <img
                    src={secondSiteImages.phoneIco}
                    alt="phoneIco not found"
                  />
                </button>
                <p>
                  Call Us On: <br />
                  <span>911-987654321</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.userInfoBlock}>
          <div className={style.inputBlockInfo}>
            <input placeholder="Full Name*" />
            <input placeholder="Email Adress*" />
            <input placeholder="Phone Number" />
            <input placeholder="Subject" />
            <input className={style.userMessage} placeholder="Your Message" />
            <button>Get An Appointment</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SecondSite;
