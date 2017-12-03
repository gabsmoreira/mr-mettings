import React, { Component } from 'react';
import './css/materialize.css'
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import {blue300, indigo900, amber400} from 'material-ui/styles/colors';
import store from './store';

import {amber500,amber700, blue500, blue400, blue700, grey300, grey400, grey200, grey600, grey800, grey900, grey500, grey50} from 'material-ui/styles/colors';





class Event extends Component {
    constructor(props){
    super(props);
    this.state = {
      error : '',   
      hidden: false,
      startTime: this.props.startTime,
      reunion: this.props.isReunion
    }
  }

    handleRequestDelete = () => {
        this.setState({hidden : true})

        store.updateSchedule(this.props.day, parseInt(this.props.startTime), parseInt(this.props.stopTime), 1);

    }

    handleTouchTap() {
        alert(this.state.startTime);
    }

    render() {
        const styles = {
            chip: {
              margin: 7,
              visibility: this.state.hidden,
              height: (parseInt(this.props.stopTime)  - parseInt(this.props.startTime))*32
            }
        };
          
         
          
         
        return (
            <div>
                {this.state.hidden ? null : 
            <Chip
            backgroundColor={this.state.reunion? blue400:amber400}
            onRequestDelete={this.handleRequestDelete}
            onClick={this.handleTouchTap.bind(this)}
            style={styles.chip}>
                <Avatar size={32} color={'black'} backgroundColor={this.state.reunion? blue700:amber700}>
                </Avatar>
                {this.props.startTime + ':00'} - {this.props.stopTime + ':00'}
            </Chip>} 

            </div>
            
            
        );
    }
}

export default Event;
