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
import Snackbar from 'material-ui/Snackbar';
import store from './store';


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
        openSnackbar: false,
        valueStart: 0,
        valueStop: 0,
        valueDay: 0,
        days : [["monday_6","monday_7","monday_8","monday_9","monday_10","monday_11","monday_12","monday_13","monday_14","monday_15","monday_16","monday_17","monday_18","monday_19","monday_20","monday_21","monday_22","monday_23"],
        ["tuesday_6","tuesday_7","tuesday_8","tuesday_9","tuesday_10","tuesday_11","tuesday_12","tuesday_13","tuesday_14","tuesday_15","tuesday_16","tuesday_17","tuesday_18","tuesday_19","tuesday_20","tuesday_21","tuesday_22","tuesday_23"],
        ["wednesday_6","wednesday_7","wednesday_8","wednesday_9","wednesday_10","wednesday_11","wednesday_12","wednesday_13","wednesday_14","wednesday_15","wednesday_16","wednesday_17","wednesday_18","wednesday_19","wednesday_20","wednesday_21","wednesday_22","wednesday_23"],
        ["thursday_6","thursday_7","thursday_8","thursday_9","thursday_10","thursday_11","thursday_12","thursday_13","thursday_14","thursday_15","thursday_16","thursday_17","thursday_18","thursday_19","thursday_20","thursday_21","thursday_22","thursday_23"],
        ["friday_6","friday_7","friday_8","friday_9","friday_10","friday_11","friday_12","friday_13","friday_14","friday_15","friday_16","friday_17","friday_18","friday_19","friday_20","friday_21","friday_22","friday_23"],
        ["saturday_6","saturday_7","saturday_8","saturday_9","saturday_10","saturday_11","saturday_12","saturday_13","saturday_14","saturday_15","saturday_16","saturday_17","saturday_18","saturday_19","saturday_20","saturday_21","saturday_22","saturday_23"],
        ["sunday_6","sunday_7","sunday_8","sunday_9","sunday_10","sunday_11","sunday_12","sunday_13","sunday_14","sunday_15","sunday_16","sunday_17","sunday_18","sunday_19","sunday_20","sunday_21","sunday_22","sunday_23"]  
        ]
    }
  }

  

    componentWillMount(){
        store.getEvents((results)=>{
            //console.log(results);

            for(var i = 0; i<7; i++){
                for(var j = 0; j<18; j++){
                    // console.log(this.state.days[i][j]);                    
                    // console.log(results[this.state.days[i][j]]);
                    
                    if(results[this.state.days[i][j]] === 0){
                        
                        if(this.state.valueStart === 0){
                            this.setState({valueStart: j+6});
                        }
                    }else{
                        if(this.state.valueStart !== 0){
                            this.setState({valueStop: j+6});
                            this.setState({valueDay: i});
                            this.getEvent();
                            this.setState({valueStart: 0});
                            this.setState({valueStop: 0});
                            this.setState({valueDay: 0});
                        }
                    }
                }
                if(this.state.valueStart !== 0){
                    this.setState({valueStop: 24});
                    this.setState({valueDay: i});
                    this.getEvent();
                    this.setState({valueStart: 0});
                    this.setState({valueStop: 0});
                    this.setState({valueDay: 0});
                }
                
            }
        });

    }


    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    getEvent = () =>{

        this.setState({open: false});
        if (this.state.valueDay == 0){
            this.state.events.monday.push({
                startTime: this.state.valueStart,
                stopTime: this.state.valueStop
            })
        }
        else if (this.state.valueDay == 1){
            this.state.events.tuesday.push({
                startTime: this.state.valueStart,
                stopTime: this.state.valueStop
            })
        }
        else if (this.state.valueDay == 2){
            this.state.events.wednesday.push({
                startTime: this.state.valueStart,
                stopTime: this.state.valueStop
            })
        }
        else if (this.state.valueDay == 3){
            this.state.events.thursday.push({
                startTime: this.state.valueStart,
                stopTime: this.state.valueStop
            })
        }
        else if (this.state.valueDay == 4){
            this.state.events.friday.push({
                startTime: this.state.valueStart,
                stopTime: this.state.valueStop
            })
        }
        else if (this.state.valueDay == 5){
            this.state.events.saturday.push({
                startTime: this.state.valueStart,
                stopTime: this.state.valueStop
            })
        }
        else if (this.state.valueDay == 6){
            this.state.events.sunday.push({
                startTime: this.state.valueStart,
                stopTime: this.state.valueStop
            })
        }


    }

    createEvent = () => {
        if (this.state.valueStart >= this.state.valueStop || this.existEvent(this.state.valueStart,this.state.valueStop,this.state.valueStart, this.state.valueDay)){
            this.setState({openSnackbar: true});
        }
        else{

            this.setState({open: false});
            store.updateSchedule(this.state.valueDay, this.state.valueStart, this.state.valueStop, 0,(result)=>{});
            if (this.state.valueDay == 0){
                this.state.events.monday.push({
                    startTime: this.state.valueStart,
                    stopTime: this.state.valueStop
                })
            }
            else if (this.state.valueDay == 1){
                this.state.events.tuesday.push({
                    startTime: this.state.valueStart,
                    stopTime: this.state.valueStop
                })
            }
            else if (this.state.valueDay == 2){
                this.state.events.wednesday.push({
                    startTime: this.state.valueStart,
                    stopTime: this.state.valueStop
                })
            }
            else if (this.state.valueDay == 3){
                this.state.events.thursday.push({
                    startTime: this.state.valueStart,
                    stopTime: this.state.valueStop
                })
            }
            else if (this.state.valueDay == 4){
                this.state.events.friday.push({
                    startTime: this.state.valueStart,
                    stopTime: this.state.valueStop
                })
            }
            else if (this.state.valueDay == 5){
                this.state.events.saturday.push({
                    startTime: this.state.valueStart,
                    stopTime: this.state.valueStop
                })
            }
            else if (this.state.valueDay == 6){
                this.state.events.sunday.push({
                    startTime: this.state.valueStart,
                    stopTime: this.state.valueStop
                })
            }
        }


    };

    existEvent=(valueStart, valueStop, valueDay) =>{
        if (this.state.valueDay == 0){
            for(var i = 0; i<this.state.events.monday.length; i++){
                if(this.state.events.monday[i].startTime === valueStart){
                    return true;
                }
            }
        }
        else if (this.state.valueDay == 1){
            for(var i = 0; i<this.state.events.tuesday.length; i++){
                if(this.state.events.tuesday[i].startTime === valueStart){
                    return true;
                }
            }
        }
        else if (this.state.valueDay == 2){
            for(var i = 0; i<this.state.events.wednesday.length; i++){
                if(this.state.events.wednesday[i].startTime === valueStart){
                    return true;
                }
            }
        }
        else if (this.state.valueDay == 3){
            for(var i = 0; i<this.state.events.thursday.length; i++){
                if(this.state.events.thursday[i].startTime === valueStart){
                    return true;
                }
            }
        }
        else if (this.state.valueDay == 4){
            for(var i = 0; i<this.state.events.friday.length; i++){
                if(this.state.events.friday[i].startTime === valueStart){
                    return true;
                }
            }
        }
        else if (this.state.valueDay == 5){
            for(var i = 0; i<this.state.events.saturday.length; i++){
                if(this.state.events.saturday[i].startTime === valueStart){
                    return true;
                }
            }
        }
        else if (this.state.valueDay == 6){
            for(var i = 0; i<this.state.events.sunday.length; i++){
                if(this.state.events.sunday[i].startTime === valueStart){
                    return true;
                }
            }
        }
        return false

    }

    orderEvents = () => {
        for(var i; i<this.state.events.monday.length; i++){

        }
    }

    handleChangeStart = (event, index, valueStart) => {
        this.setState({valueStart});
    }
    handleChangeStop = (event, index, valueStop) => this.setState({valueStop});
    handleChangeDay = (event, index, valueDay) => this.setState({valueDay});
    handleRequestClose = () => {
        this.setState({
          openSnackbar: false,
        });
      };
    

    render() {
        const hours = ['06:00','07:00','08:00','09:00',
                        '10:00','11:00','12:00','13:00','14:00',
                        '15:00','16:00','17:00','18:00','19:00',
                        '20:00','21:00','22:00','23:00', '24:00']
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
                    <MenuItem value={index+6} primaryText={row} />
                    ))}
                </DropDownMenu>
                    
                <DropDownMenu value={this.state.valueStop} onChange={this.handleChangeStop}>
                {hours.map( (row,index) => (
                    <MenuItem value={index+6} primaryText={row} />
                    ))}
                </DropDownMenu>

                </Dialog>

                <Table
                className="row"
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
                    <TableRow>
                        <TableRowColumn style={tableRowStyle}>
                            <div>
                            {this.state.events.monday.map( (row,index) => (
                                <Event startTime={String(row.startTime)} stopTime={String(row.stopTime)} day={0}/>
                                ))}
                            </div>
                        </TableRowColumn>
                        <TableRowColumn style={tableRowStyle}>
                            <div>
                            {this.state.events.tuesday.map( (row,index) => (
                                <Event startTime={String(row.startTime)} stopTime={String(row.stopTime)} day={1}/>
                                ))}
                            </div>
                        </TableRowColumn>
                        <TableRowColumn style={tableRowStyle}>
                            <div>
                            {this.state.events.wednesday.map( (row,index) => (
                                <Event startTime={String(row.startTime)} stopTime={String(row.stopTime)} day={2}/>
                                ))}
                            </div>
                        </TableRowColumn>
                        <TableRowColumn style={tableRowStyle}>
                            <div>
                            {this.state.events.thursday.map( (row,index) => (
                                <Event startTime={String(row.startTime)} stopTime={String(row.stopTime)} day={3}/>
                                ))}
                            </div>
                        </TableRowColumn>
                        <TableRowColumn style={tableRowStyle}>
                            <div>
                            {this.state.events.friday.map( (row,index) => (
                                <Event startTime={String(row.startTime)} stopTime={String(row.stopTime)} day={4}/>
                                ))}
                            </div>
                        </TableRowColumn>
                        <TableRowColumn style={tableRowStyle}>
                            <div>
                            {this.state.events.saturday.map( (row,index) => (
                                <Event startTime={String(row.startTime)} stopTime={String(row.stopTime)} day={5}/>
                                ))}
                            </div>
                        </TableRowColumn>
                        <TableRowColumn style={tableRowStyle}>
                            <div>
                            {this.state.events.sunday.map( (row,index) => (
                                <Event startTime={String(row.startTime)} stopTime={String(row.stopTime)} day={6}/>
                                ))}
                            </div>
                        </TableRowColumn>

                    </TableRow>
                </TableBody>
            </Table>
            <Snackbar
            open={this.state.openSnackbar}
            message="Não foi possível adicionar"
            autoHideDuration={4000}
            onRequestClose={this.handleRequestClose}
            />
        </div>    
                
        );
    }
}

export default Calendar;
