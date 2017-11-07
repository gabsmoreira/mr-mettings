import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import RaisedButton from 'material-ui/RaisedButton';
import './css/materialize.css'

import {amber500,amber700, blue500, grey300, grey400, grey200, grey600, grey800, grey900, grey500, grey50} from 'material-ui/styles/colors';





class LoginForm extends Component {
    constructor(props){
    super(props);
    this.state = {
      error : '',
      login : true,
      image: './img/metting.jpg',
      colorLoginTab: grey500,
      colorRegisterTab:grey500,
      textFields : {
        email : '',
        password : '',
        userName : ''
      }
    }
  }

  

    render() {

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
            margin:12
        }

        return (
            <div className="LoginForm row">
                <div className="col s12 m2 l2"></div>
                <div className="col s12 m8 l8">
                <Paper style={style} zDepth={2}>
                <Tabs inkBarStyle={{background:amber700}}>
                    <Tab label="Login" style={{backgroundColor: this.state.colorLoginTab}} >
                        <div>
                        <TextField
                            style={formStyle}
                            floatingLabelText="Username"
                            hintText=""
                            underlineFocusStyle={{borderColor: amber700}}
                            floatingLabelShrinkStyle={{color:amber700}}/>
                        <br />
                        
                        <TextField
                            style={formStyle}
                            floatingLabelText="Password"
                            hintText=""
                            type="password"
                            underlineFocusStyle={{borderColor: amber700}}
                            floatingLabelShrinkStyle={{color:amber700}}/>
                        <br />
                        <RaisedButton label="Login" style={styleButton} backgroundColor={amber500}/>
                        </div>
                    </Tab>
                    <Tab label="Register" style={{backgroundColor:this.state.colorRegisterTab}} >
                        <div>
                        <TextField
                            style={formStyle}
                            floatingLabelText="Email"
                            hintText=""
                            underlineFocusStyle={{borderColor: amber700}}
                            floatingLabelShrinkStyle={{color:amber700}}/>
                        <br />
                        <TextField
                            style={formStyle}
                            floatingLabelText="Username"
                            hintText=""
                            underlineFocusStyle={{borderColor: amber700}}
                            floatingLabelShrinkStyle={{color:amber700}}/>
                        <br />
                        <TextField
                            style={formStyle}
                            floatingLabelText="Password"
                            hintText=""
                            type="password"
                            underlineFocusStyle={{borderColor: amber700}}
                            floatingLabelShrinkStyle={{color:amber700}}/>
                        <br />
                        <RaisedButton label="Register" style={styleButton} backgroundColor={amber500}/>

                        </div>
                    </Tab>
                </Tabs>
                </Paper>
                </div>
                <div className="col s12 m2 l2"></div>


             </div>
        );
    }
}

export default LoginForm;
