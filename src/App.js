// import logo from './logo.svg';
import './App.css';
import Classtype, {Functiontype} from './ComponentType/componnettype.js'
import Profile from './props/profileComponent';

function App() {
  return (
    <div>
      <Functiontype />
      <Classtype />
      <Profile userName = 'surbhi'  userId = '101' />
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
