import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Classes from './components/Classes/Classes';
//import About from './components/About/About';
import Studio from './components/Studio/Studio';
import Impressum from './components/Impressum/Impressum';
import Datenschutz from './components/Impressum/Datenschutz';
import ScrollHandler from './components/Scrollhandler/Scrollhandler';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return (
      <div className="Yoga-App">
        <ScrollHandler />
        <Navbar/>
        <Switch>
          <Route
            exact path="/"
            component={Home}
          />
          <Route 
        exact path='/imprint'
        component={Impressum}
        />
        <Route 
        exact path='/dataprotection'
        component={Datenschutz}
        />
        <Route 
        exact path='/studio'
        component={Studio}
        />
        <Route 
        exact path='/classes'
        component={Classes}
        />
        </Switch>
        <Footer/>
      </div>
      
    )
  }
}

export default App;
