import footerBg from '../assets/img/footer-bg.jpg';
import dcLogoBg from '../assets/img/dc-logo-bg.png';
import facebookIcon from '../assets/img/footer-facebook.png';
import twitterIcon from '../assets/img/footer-twitter.png';
import pinterestIcon from '../assets/img/footer-pinterest.png';
import youtubeIcon from '../assets/img/footer-youtube.png';

// ...e così via per ogni social

function Appfooter() {
      return (
            <div className="footer-section" style={{ position: 'relative', overflow: 'hidden' }}>
                  <img src={footerBg} alt="sfondo" className="footer-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
                  <img src={dcLogoBg} alt="logo" className="footer-top-right" style={{ position: 'absolute', top: 0, right: 0, width: '320px', opacity: 0.8, pointerEvents: 'none', zIndex: 2 }} />
                  <div className="footer-columns" style={{ position: 'relative', zIndex: 1 }}>
                        <div>
                              <h4>DC COMICS</h4>
                              <ul>
                                    <li>Characters</li>
                                    <li>Comics</li>
                                    <li>Movies</li>
                                    <li>TV</li>
                                    <li>Games</li>
                                    <li>Videos</li>
                                    <li>News</li>
                              </ul>
                              <h4>SHOP</h4>
                              <ul>
                                    <li>Shop DC</li>
                                    <li>Shop DC Collectibles</li>
                              </ul>
                        </div>
                        <div>
                              <h4>DC</h4>
                              <ul>
                                    <li>Terms Of Use</li>
                                    <li>Privacy policy (New)</li>
                                    <li>Ad Choices</li>
                                    <li>Advertising</li>
                                    <li>Jobs</li>
                                    <li>Subscriptions</li>
                                    <li>Talent Workshops</li>
                                    <li>CPSC Certificates</li>
                                    <li>Ratings</li>
                                    <li>Shop Help</li>
                                    <li>Contact Us</li>
                              </ul>
                        </div>
                        <div>
                              <h4>SITES</h4>
                              <ul>
                                    <li>DC</li>
                                    <li>MAD Magazine</li>
                                    <li>DC Kids</li>
                                    <li>DC Universe</li>
                                    <li>DC Power Visa</li>
                              </ul>
                        </div>
                  </div>
                  <div className="footer-signup">
                        <button className="signup-btn">SIGN-UP NOW!</button>
                        <div className="social">
                              <span>FOLLOW US</span>
                              <img src={facebookIcon} alt="Facebook" width="24" />
                              <img src={twitterIcon} alt="twitter" width="24" />
                              <img src={youtubeIcon} alt="youtube" width="24" />
                              <img src={pinterestIcon} alt="pinterest" width="24" />
                              <img src={pinterestIcon} alt="pinterest" width="24" />
                        </div>
                  </div>
            </div >
      );
}

export default Appfooter;