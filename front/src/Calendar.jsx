import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import RaisedButton from 'material-ui/RaisedButton';
import './css/materialize.css'
import FlatButton from 'material-ui/FlatButton';
import {blue300, indigo900, amber300} from 'material-ui/styles/colors';
import Event from './Event';
import Dialog from 'material-ui/Dialog';   
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem'; 

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

import {amber500,amber700, amber400, blue500, grey300, grey400, grey200, grey600, grey800, grey900, grey500, grey50} from 'material-ui/styles/colors';




class Calendar extends Component {
    constructor(props){
    super(props);
    this.state = {
      error : '',
      editing : false,
      events : {monday:[],tuesday:[],wednesday:[],
                thursday:[],friday:[], saturday:[],
                sunday:[]},
      open: false,
      valueStart: 0,
      valueStop: 0,
      valueDay: 0
    }
  }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    createEvent = () => {
        console.log(this.existEvent(this.state.valueStart,this.state.valueStop,this.state.valueStart, this.state.valueDay));
        if (this.state.valueStart >= this.state.valueStop || this.existEvent(this.state.valueStart,this.state.valueStop,this.state.valueStart, this.state.valueDay)){
            alert("n da")
        }
        else{
            this.setState({open: false});
            if (this.state.valueDay == 0){
                this.state.events.monday.push({
                    startTime: String(this.state.valueStart) + ':00',
                    stopTime: String(this.state.valueStop) + ':00'
                })
            }
            else if (this.state.valueDay == 1){
                this.state.events.tuesday.push({
                    startTime: String(this.state.valueStart) + ':00',
                    stopTime: String(this.state.valueStop) + ':00'
                })
            }
            else if (this.state.valueDay == 2){
                this.state.events.wednesday.push({
                    startTime: String(this.state.valueStart) + ':00',
                    stopTime: String(this.state.valueStop) + ':00'
                })
            }
            else if (this.state.valueDay == 3){
                this.state.events.thursday.push({
                    startTime: String(this.state.valueStart) + ':00',
                    stopTime: String(this.state.valueStop) + ':00'
                })
            }
            else if (this.state.valueDay == 4){
                this.state.events.friday.push({
                    startTime: String(this.state.valueStart) + ':00',
                    stopTime: String(this.state.valueStop) + ':00'
                })
            }
            else if (this.state.valueDay == 5){
                this.state.events.saturday.push({
                    startTime: String(this.state.valueStart) + ':00',
                    stopTime: String(this.state.valueStop) + ':00'
                })
            }
            else if (this.state.valueDay == 6){
                this.state.events.sunday.push({
                    startTime: String(this.state.valueStart) + ':00',
                    stopTime: String(this.state.valueStop) + ':00'
                })
            }
        }


    };

    existEvent=(valueStart, valueStop, valueDay) =>{
        if (this.state.valueDay == 0){
            for(var i = 0; i<this.state.events.monday.length, i++;){
                console.log(this.state.events.monday[i].startTime);
                if((String(this.state.events.monday[i].startTime) + ':00') == valueStart){
                    return true;
                }
            }
        }
        else if (this.state.valueDay == 1){
            for(var i = 0; i<this.state.events.tuesday.length, i++;){
                if(this.state.events.tuesday[i].startTime == valueStart){
                    return true;
                }
            }
        }
        else if (this.state.valueDay == 2){
            for(var i = 0; i<this.state.events.wednesday.length, i++;){
                if(this.state.events.wednesday[i].startTime == valueStart){
                    return true;
                }
            }
        }
        else if (this.state.valueDay == 3){
            for(var i = 0; i<this.state.events.thursday.length, i++;){
                if(this.state.events.thursday[i].startTime == valueStart){
                    return true;
                }
            }
        }
        else if (this.state.valueDay == 4){
            for(var i = 0; i<this.state.events.friday.length, i++;){
                if(this.state.events.friday[i].startTime == valueStart){
                    return true;
                }
            }
        }
        else if (this.state.valueDay == 5){
            for(var i = 0; i<this.state.events.saturday.length, i++;){
                if(this.state.events.saturday[i].startTime == valueStart){
                    return true;
                }
            }
        }
        else if (this.state.valueDay == 6){
            for(var i = 0; i<this.state.events.sunday.length, i++;){
                if(this.state.events.sunday[i].startTime == valueStart){
                    return true;
                }
            }
        }
        return false

    }

    handleChangeStart = (event, index, valueStart) => {
        this.setState({valueStart});
    }
    handleChangeStop = (event, index, valueStop) => this.setState({valueStop});
    handleChangeDay = (event, index, valueDay) => this.setState({valueDay});
    

    render() {
        const hours = ['00:00','01:00','02:00','03:00','04:00',
                        '05:00','06:00','07:00','08:00','09:00',
                        '10:00','11:00','12:00','13:00','14:00',
                        '15:00','16:00','17:00','18:00','19:00',
                        '20:00','21:00','22:00','23:00']
        const days = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"]

        const tableRowStyle = {
            backgroundColor: grey200,
            width:100
        }

        const actions = [
            <FlatButton
              label="Cancelar"
              primary={true}
              onClick={this.handleClose}
            />,
            <FlatButton
              label="Criar"
              primary={true}
              onClick={this.createEvent}
            />,
          ];
        return (
            <div className="Calendar">
                <br/>
                <RaisedButton label="Criar evento" onClick={this.handleOpen} backgroundColor={amber400} />
                <Dialog
                title="Escolha o horário"
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}>

                <DropDownMenu value={this.state.valueDay} onChange={this.handleChangeDay}>
                {days.map( (row,index) => (
                    <MenuItem value={index} primaryText={row} />
                    ))}
                </DropDownMenu>

                <DropDownMenu value={this.state.valueStart} onChange={this.handleChangeStart}>
                {hours.map( (row,index) => (
                    <MenuItem value={index} primaryText={row} />
                    ))}
                </DropDownMenu>
                    
                <DropDownMenu value={this.state.valueStop} onChange={this.handleChangeStop}>
                {hours.map( (row,index) => (
                    <MenuItem value={index} primaryText={row} />
                    ))}
                </DropDownMenu>

                </Dialog>

                <Table
                height={this.state.height}
                fixedHeader={false}
                fixedFooter={false}
                selectable={false}
                multiSelectable={false}>
                    <TableHeader
                    displaySelectAll={false}
                    adjustForCheckbox={false}
                    enableSelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn>Segunda</TableHeaderColumn>
                            <TableHeaderColumn>Terça</TableHeaderColumn>
                            <TableHeaderColumn>Quarta</TableHeaderColumn>
                            <TableHeaderColumn>Quinta</TableHeaderColumn>
                            <TableHeaderColumn>Sexta</TableHeaderColumn>
                            <TableHeaderColumn>Sábado</TableHeaderColumn>
                            <TableHeaderColumn>Domingo</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                <TableBody
                  showRowHover={false}
                  stripedRows={true}
                  displayRowCheckbox={false}>
                    <TableRow >
                        <TableRowColumn style={tableRowStyle}>
                            <div>
                            {this.state.events.monday.map( (row,index) => (
                                <Event startTime={row.startTime} stopTime={row.stopTime} />
                                ))}
                            </div>
                        </TableRowColumn>
                        <TableRowColumn style={tableRowStyle}>
                            <div>
                            {this.state.events.tuesday.map( (row,index) => (
                                <Event startTime={row.startTime} stopTime={row.stopTime} />
                                ))}
                            </div>
                        </TableRowColumn>
                        <TableRowColumn style={tableRowStyle}>
                            <div>
                            {this.state.events.wednesday.map( (row,index) => (
                                <Event startTime={row.startTime} stopTime={row.stopTime} />
                                ))}
                            </div>
                        </TableRowColumn>
                        <TableRowColumn style={tableRowStyle}>
                            <div>
                            {this.state.events.thursday.map( (row,index) => (
                                <Event startTime={row.startTime} stopTime={row.stopTime} />
                                ))}
                            </div>
                        </TableRowColumn>
                        <TableRowColumn style={tableRowStyle}>
                            <div>
                            {this.state.events.friday.map( (row,index) => (
                                <Event startTime={row.startTime} stopTime={row.stopTime} />
                                ))}
                            </div>
                        </TableRowColumn>
                        <TableRowColumn style={tableRowStyle}>
                            <div>
                            {this.state.events.saturday.map( (row,index) => (
                                <Event startTime={row.startTime} stopTime={row.stopTime} />
                                ))}
                            </div>
                        </TableRowColumn>
                        <TableRowColumn style={tableRowStyle}>
                            <div>
                            {this.state.events.sunday.map( (row,index) => (
                                <Event startTime={row.startTime} stopTime={row.stopTime} />
                                ))}
                            </div>
                        </TableRowColumn>

                    </TableRow>
                </TableBody>
            </Table>
        </div>    
                
        );
    }
}

export default Calendar;