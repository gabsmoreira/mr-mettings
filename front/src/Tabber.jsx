import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import {amber500, blue500, grey400, grey200} from 'material-ui/styles/colors';




class Tabber extends Component {
    

  render() {
    function handleTouchTap() {
        alert('Welcome to Mr. Mettings');
    }
    const styles = {
        title: {
            cursor: 'pointer',
        },
    };
    return (
      <div className="Tabber">
        <AppBar
            style={{backgroundColor: amber500}}
            title={<span style={styles.title}>Mr. Mettings</span>}
            onTitleTouchTap={handleTouchTap}
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            //iconElementRight={}
        />
      </div>
    );
  }
}

export default Tabber;
