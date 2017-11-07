import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import Tabber from './Tabber'
import LoginForm from './LoginForm'
import Background from './img/metting.jpg';




class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      auth : null,
      loading : false,
      error : '',
      action : 'login'
    }
  }
  
  componentWillMount(){
    document.body.style.background = "url(" + { Background } + ")";
    document.body.style.backgroundSize= 'cover';
    document.body.style.overflow= 'hidden';
  }
  render() {
  if (this.state.auth === null){
    return (
      <div className="App">
        <MuiThemeProvider>
          <LoginForm />
        </MuiThemeProvider>
      </div>
    );
  }
  else{
    return (
      <div className="App">
        <MuiThemeProvider>
          VEM DE PAGINA PRINCIPAL
        </MuiThemeProvider>

      </div>
    );
  }
  
    
  }
}

export default App;
