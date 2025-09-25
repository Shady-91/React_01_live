import logo from '../assets/img/dc-logo.png';

function AppHeader() {
      return (
            <header>
                  <div className="header-top">
                        <img src={logo} alt="DC Logo" className="logo" />
                        <nav>
                              <ul className="nav-list">
                                    <li>CHARACTERS</li>
                                    <li>COMICS</li>
                                    <li>MOVIES</li>
                                    <li>TV</li>
                                    <li>GAMES</li>
                                    <li>COLLECTIBLES</li>
                                    <li>VIDEOS</li>
                                    <li>FANS</li>
                                    <li>NEWS</li>
                                    <li>SHOP</li>
                              </ul>
                        </nav>
                  </div>
            </header>
      );
}

export default AppHeader;