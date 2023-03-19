// import logo from './logo.svg';
import './App.css';
import ClippedDrawer from './components/drawer/Sidebar';
import ResponsiveGrid from "./components/grid/Grid";

function App() {
  return (
    <div className="App">
    <div className='Clippeddrawer' >
    <ClippedDrawer/>
    </div>
    <div className='Content'>
    <ResponsiveGrid/>
    </div>
    </div>
  );
}

export default App;
