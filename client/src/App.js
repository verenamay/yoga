import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import About from './components/About/About';

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
        <Navbar/>
        <Switch>
          <Route
            exact path="/"
            component={Home}
          />
        </Switch>
        <About/>
        <Footer/>
      </div>
      
    )
  }
}

export default App;
