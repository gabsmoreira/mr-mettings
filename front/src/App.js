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
import Calendar from './Calendar'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';
import RaisedButton from 'material-ui/RaisedButton';
import './css/materialize.css'
import auth from './auth';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import GroupForm from './GroupForm'


import {amber500,amber700, blue500, grey300, grey400, grey200, grey600, grey800, grey900, grey500, grey50} from 'material-ui/styles/colors';




class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      auth : localStorage.getItem("id"),
      loading : false,
      error : '',
      login : true,
      action: 'default',
      image: './img/metting.jpg',
      textFields : {
        email : '',
        password : '',
        name : ''
      }
    }
  }

  componentWillMount(){
    document.body.style.background = "url(" + { Background } + ")";
    document.body.style.backgroundSize= 'cover';
    document.body.style.overflow= 'hidden';
  }

  registerRequest = () => {
    auth.register(this.state.textFields.email, this.state.textFields.password, this.state.textFields.name,(result) => {
      console.log(result.name);
      localStorage.setItem("id", result);
      this.setState({auth: localStorage.getItem("id")});
      
    })
  }

  loginRequest = () => {
    auth.login(this.state.textFields.name,this.state.textFields.password,(result) => {
      console.log(result.name);
      localStorage.setItem("id", result);
      this.setState({auth: localStorage.getItem("id")});
    })
  }

  handleTextChange = (event) => {
    let text = this.state.textFields
    this.setState({ ...this.state, textFields: 
      { ...this.state.textFields,[event.target.id] : event.target.value }}
    )
  }
  logoutRequest = () => {
    localStorage.setItem("id", null);
    this.setState({auth: null})
  }

  handleActionChange = () => {
    if(this.state.action == 'group'){
      this.setState({action: 'default'})
    }
    else{
      this.setState({action: 'group'})
    }
  }

  
  
  render() {
    const Logged = (props) => (
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Create meeting"  onClick={this.handleActionChange}/>
        <MenuItem primaryText="Calendar"  onClick={this.handleActionChange}/>
        <MenuItem primaryText="Sign out"  onClick={this.logoutRequest}/>
      </IconMenu>
    );

    const styles = {
        title: {
            cursor: 'pointer',
        },
    };
    const style = {
      backgroundColor: grey50,
      textAlign: 'center',
      marginTop: '10%'
  };

  const formStyle={
      width:'90%',
      marginLeft:'5%',
      marginRight:'5%',
      marginTop:'2.5%',
      marginBottom:'2.5%',
  }
  const styleButton={
      color: amber700,
      margin:12,
      width:'15%',
      marginLeft: '5%'
  }

  if (this.state.auth === null){
    return (
      <div className="App">
        <MuiThemeProvider>
        <div className="Tabber">
          <AppBar
            style={{backgroundColor: amber500}}
            title={<span style={styles.title}>Mr. Meetings</span>}
            onTitleTouchTap={null}
            iconElementRight={this.state.auth ? <Logged /> : null}
          />
        </div>
        <div className="LoginForm row">
                <div className="col s12 m2 l2"></div>
                <div className="col s12 m8 l8">
                <Paper style={style} zDepth={2}>
                <Tabs inkBarStyle={{background:amber700}}>
                    <Tab label="Login" style={{backgroundColor: grey500}} >
                        <div>
                        <TextField
                            style={formStyle}
                            floatingLabelText="Username"
                            hintText=""
                            id = 'name'
                            underlineFocusStyle={{borderColor: amber700}}
                            floatingLabelShrinkStyle={{color:amber700}}
                            onChange={this.handleTextChange}/>
                        
                        
                        <TextField
                            style={formStyle}
                            floatingLabelText="Password"
                            hintText=""
                            id='password'
                            type="password"
                            underlineFocusStyle={{borderColor: amber700}}
                            floatingLabelShrinkStyle={{color:amber700}}
                            onChange={this.handleTextChange}/>
                        <RaisedButton label="Login" style={styleButton} backgroundColor={amber500} onClick={this.loginRequest}/>
                        </div>
                    </Tab>
                    <Tab label="Register" style={{backgroundColor: grey500}} >
                        <div>
                        <TextField
                            style={formStyle}
                            floatingLabelText="Email"
                            hintText=""
                            id='email'
                            underlineFocusStyle={{borderColor: amber700}}
                            floatingLabelShrinkStyle={{color:amber700}}
                            onChange={this.handleTextChange}/>
                            
                        <TextField
                            style={formStyle}
                            floatingLabelText="Username"
                            hintText=""
                            id='name'
                            underlineFocusStyle={{borderColor: amber700}}
                            floatingLabelShrinkStyle={{color:amber700}}
                            onChange={this.handleTextChange}/>
                        <TextField
                            style={formStyle}
                            floatingLabelText="Password"
                            hintText=""
                            id='password'
                            type="password"
                            underlineFocusStyle={{borderColor: amber700}}
                            floatingLabelShrinkStyle={{color:amber700}}
                            onChange={this.handleTextChange}/>
                        <RaisedButton label="Register" style={styleButton} backgroundColor={amber500} onClick={this.registerRequest}/>

                        </div>
                    </Tab>
                </Tabs>
                </Paper>
                </div>
                <div className="col s12 m2 l2"></div>


             </div>
        </MuiThemeProvider>
      </div>
    );
  }
  else{
    if (this.state.action == 'default') {
      return (
        <div className="App">
          <MuiThemeProvider>
            <div className="Tabber">
              <AppBar
                style={{backgroundColor: amber500}}
                title={<span style={styles.title}>Mr. Meetings</span>}
                onTitleTouchTap={null}
                iconElementRight={this.state.auth ? <Logged /> : null}
              />
            </div>
            <div className="row">
              <Calendar />
            </div>
            
          </MuiThemeProvider>
  
        </div>
      );
    }

    else if(this.state.action == 'group'){
      return (
        <div className="App">
          <MuiThemeProvider>
            <div className="Tabber">
              <AppBar
                style={{backgroundColor: amber500}}
                title={<span style={styles.title}>Mr. Meetings</span>}
                onTitleTouchTap={null}
                iconElementRight={this.state.auth ? <Logged /> : null}
              />
            </div>
            <GroupForm />
          </MuiThemeProvider>
  
        </div>
      );
    }
    
  }
  
    
  }
}

export default App;
