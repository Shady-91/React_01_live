import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Appfooter from './components/Appfooter.jsx';
import AppMain from './components/AppMain.jsx';
import AppHeader from './components/AppHeader.jsx';
// ...existing code...

function App() {
      return (
            <div>
                  {/* ...altri componenti... */}
                  <AppHeader />
                  <AppMain />
                  <Appfooter />
            </div>
      );
}

export default App;