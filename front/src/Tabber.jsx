import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import {amber500, blue500, grey400, grey200} from 'material-ui/styles/colors';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';




class Tabber extends Component {
  render() {
    const Logged = (props) => (
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Sign out" />
      </IconMenu>
    );

    const styles = {
        title: {
            cursor: 'pointer',
        },
    };
    return (
      <div className="Tabber">
        <AppBar
            style={{backgroundColor: amber500}}
            title={<span style={styles.title}>Mr. Meetings</span>}
            onTitleTouchTap={null}
            iconElementRight={this.props.user ? <Logged /> : null}
        />
      </div>
    );
  }
}

export default Tabber;
