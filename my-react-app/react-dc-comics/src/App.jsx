import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Appfooter from './components/Appfooter.jsx';
import AppMain from './components/AppMain.jsx';
import AppHeader from './components/AppHeader.jsx';
import AppBlueBar from './components/AppBlueBar.jsx';
import AppBlackBar from './components/AppBlackBar.jsx';



function App() {
      return (
            <div>

                  <AppHeader />
                  <AppBlackBar />
                  <AppBlueBar />
                  <AppMain />
                  <Appfooter />
            </div>
      );
}

export default App;