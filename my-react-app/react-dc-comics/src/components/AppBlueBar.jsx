import digitalComics from '../assets/img/buy-comics-digital-comics.png';
import merchandise from '../assets/img/buy-comics-merchandise.png';
import subscription from '../assets/img/buy-comics-subscriptions.png';
import shopLocator from '../assets/img/buy-comics-shop-locator.png';
import powerVisa from '../assets/img/buy-dc-power-visa.svg';

function AppBlueBar() {
      return (
            <div className="blue-bar">
                  <ul className="blue-bar-list">
                        <li>
                              <img src={digitalComics} alt="Digital Comics" width={40} />
                              DIGITAL COMICS
                        </li>
                        <li>
                              <img src={merchandise} alt="DC Merchandise" width={40} />
                              DC MERCHANDISE
                        </li>
                        <li>
                              <img src={subscription} alt="Subscription" width={40} />
                              SUBSCRIPTION
                        </li>
                        <li>
                              <img src={shopLocator} alt="Comic Shop Locator" width={40} />
                              COMIC SHOP LOCATOR
                        </li>
                        <li>
                              <img src={powerVisa} alt="DC Power Visa" width={40} />
                              DC POWER VISA
                        </li>
                  </ul>
            </div>
      );
}

export default AppBlueBar;