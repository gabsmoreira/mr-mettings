import React, { Component } from 'react';
import './css/materialize.css'
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import {blue300, indigo900, amber400} from 'material-ui/styles/colors';
import store from './store';

import {amber500,amber700, blue500, grey300, grey400, grey200, grey600, grey800, grey900, grey500, grey50} from 'material-ui/styles/colors';





class Event extends Component {
    constructor(props){
    super(props);
    this.state = {
      error : '',   
      hidden: false
    }
  }

    handleRequestDelete = () => {
        this.setState({hidden : true})

        store.updateSchedule(this.props.day, parseInt(this.props.startTime), parseInt(this.props.stopTime), 1);

    }

    handleTouchTap() {
        alert('You clicked the Chip.');
    }

    render() {
        const styles = {
            chip: {
              margin: 7,
              visibility: this.state.hidden
            }
        };
          
         
          
         
        return (
            <div>
                {this.state.hidden ? null : 
            <Chip
            backgroundColor={amber400}
            onRequestDelete={this.handleRequestDelete}
            onClick={this.handleTouchTap}
            style={styles.chip}>
                <Avatar size={32} color={'black'} backgroundColor={amber700}>
                </Avatar>
                {String(this.props.startTime) + ':00'} - {String(this.props.stopTime) + ':00'}
            </Chip>} 

            </div>
            
            
        );
    }
}

export default Event;
