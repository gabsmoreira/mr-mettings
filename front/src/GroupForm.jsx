import React, { Component } from 'react';
import './css/materialize.css'
import {
    Step,
    Stepper,
    StepLabel,
  } from 'material-ui/Stepper';
  import RaisedButton from 'material-ui/RaisedButton';
  import FlatButton from 'material-ui/FlatButton';
  import TextField from 'material-ui/TextField';
import {orange500, blue500, darkBlack} from 'material-ui/styles/colors';
import Slider from 'material-ui/Slider';
import groupRegister from './groupRegister'
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { isNullOrUndefined } from 'util';
import DropDownMenu from 'material-ui/DropDownMenu';
import AutoComplete from 'material-ui/AutoComplete';




const styles = {
  errorStyle: {
    color: orange500,
  },
  underlineStyle: {
    borderColor: orange500,
  },
  floatingLabelStyle: {
    color: orange500,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
};



class GroupForm extends Component {
    constructor(props){
        super(props);
        this.state = {
        finished : false,   
        stepIndex: 0,
        numberOfMembers: 5,
        meetingDuration: 1,
        multipleHours: false,
        title: null,
        users: null,
        form: null,
        dataSource: [],
        suggestions: [],
        members: {
            member1: null,
            member2: null,
            member3: null,
            member4: null,
            member5: null,
            member6: null,
            member7: null,
            member8: null,
            member9: null,
            member10: null,
        },  
        }
    }

    componentWillMount = () => {
        groupRegister.getUsers((result)=>{
            var usersList = [];
            for (var i = 0; i< result.length; i++){
               usersList.push(result[i].name);
            }
            this.setState({users: usersList})
            
        })

    }

    

    handleNext = () => {
        const {stepIndex} = this.state;
        
        this.setState({
          stepIndex: stepIndex + 1,
          finished: stepIndex >= 3,
        });

        if(this.state.stepIndex === 3){
            // console.log(this.refs.member1.state.searchText);
            switch (this.state.numberOfMembers) {
                case 2:
                    this.state.members.member1 = this.refs.member1.state.searchText;
                    this.state.members.member2 = this.refs.member2.state.searchText;
                    break;

                case 3:
                    this.state.members.member1 = this.refs.member1.state.searchText;
                    this.state.members.member2 = this.refs.member2.state.searchText;
                    this.state.members.member3 = this.refs.member3.state.searchText;
                    break;
                
                case 4:
                    this.state.members.member1 = this.refs.member1.state.searchText;
                    this.state.members.member2 = this.refs.member2.state.searchText;
                    this.state.members.member3 = this.refs.member3.state.searchText;
                    this.state.members.member4 = this.refs.member4.state.searchText;
                    break;

                case 5:
                    this.state.members.member1 = this.refs.member1.state.searchText;
                    this.state.members.member2 = this.refs.member2.state.searchText;
                    this.state.members.member3 = this.refs.member3.state.searchText;
                    this.state.members.member4 = this.refs.member4.state.searchText;
                    this.state.members.member5 = this.refs.member5.state.searchText;
                    break;

                case 6:
                    this.state.members.member1 = this.refs.member1.state.searchText;
                    this.state.members.member2 = this.refs.member2.state.searchText;
                    this.state.members.member3 = this.refs.member3.state.searchText;
                    this.state.members.member4 = this.refs.member4.state.searchText;
                    this.state.members.member5 = this.refs.member5.state.searchText;
                    this.state.members.member6 = this.refs.member6.state.searchText;
                    break;
                
                case 7:
                    this.state.members.member1 = this.refs.member1.state.searchText;
                    this.state.members.member2 = this.refs.member2.state.searchText;
                    this.state.members.member3 = this.refs.member3.state.searchText;
                    this.state.members.member4 = this.refs.member4.state.searchText;
                    this.state.members.member5 = this.refs.member5.state.searchText;
                    this.state.members.member6 = this.refs.member6.state.searchText;
                    this.state.members.member7 = this.refs.member7.state.searchText;
                    break;

                case 8:
                    this.state.members.member1 = this.refs.member1.state.searchText;
                    this.state.members.member2 = this.refs.member2.state.searchText;
                    this.state.members.member3 = this.refs.member3.state.searchText;
                    this.state.members.member4 = this.refs.member4.state.searchText;
                    this.state.members.member5 = this.refs.member5.state.searchText;
                    this.state.members.member6 = this.refs.member6.state.searchText;
                    this.state.members.member7 = this.refs.member7.state.searchText;
                    this.state.members.member8 = this.refs.member8.state.searchText;
                    break;

                case 9:
                    this.state.members.member1 = this.refs.member1.state.searchText;
                    this.state.members.member2 = this.refs.member2.state.searchText;
                    this.state.members.member3 = this.refs.member3.state.searchText;
                    this.state.members.member4 = this.refs.member4.state.searchText;
                    this.state.members.member5 = this.refs.member5.state.searchText;
                    this.state.members.member6 = this.refs.member6.state.searchText;
                    this.state.members.member7 = this.refs.member7.state.searchText;
                    this.state.members.member8 = this.refs.member8.state.searchText;
                    this.state.members.member9 = this.refs.member9.state.searchText;
                    break;

                case 10:
                    this.state.members.member1 = this.refs.member1.state.searchText;
                    this.state.members.member2 = this.refs.member2.state.searchText;
                    this.state.members.member3 = this.refs.member3.state.searchText;
                    this.state.members.member4 = this.refs.member4.state.searchText;
                    this.state.members.member5 = this.refs.member5.state.searchText;
                    this.state.members.member6 = this.refs.member6.state.searchText;
                    this.state.members.member7 = this.refs.member7.state.searchText;
                    this.state.members.member8 = this.refs.member8.state.searchText;
                    this.state.members.member9 = this.refs.member9.state.searchText;
                    this.state.members.member10 = this.refs.member10.state.searchText;
                    break;
                default:
                    break;
            }
            // console.log(this.refs.member1);
            console.log("MEMBERS:");
            console.log(this.state.members);
            groupRegister.registerGroup(this.state.title,this.state.members, this.state.numberOfMembers, this.state.meetingDuration);
        }
    };
    
    handlePrev = () => {
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
            this.setState({stepIndex: stepIndex - 1});
        }
    };

    handleSlider = (event, value) => {
        this.setState({numberOfMembers: value});
    };

    handleSlider2 = (event, value) => {
        this.setState({meetingDuration: value});
        if(value > 1){
            this.setState({multipleHours: true})
        }else{
            this.setState({multipleHours: false})
        }
    };

    handleTitle = (event, value) =>{
        this.setState({title: value});
    };

    
    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return 'Qual será o tópico discutido?';
            case 1:
                return 'Quanto tempo vai durar?'
            case 2:
                return 'Quantas pessoas vão participar?';
            case 3:
                return 'Com quem será discutido?';
            default:
                return null;
        }
    };


    

    handleMember = (target) => {
        console.log(target)
        // this.setState({ ...this.state, members: 
        //     { ...this.state.members,[event.target.id] : event.target.value }}
        //   )   
            
      }

      handleUpdateInput = (value, event1,event2) => {
          console.log(event1);
          console.log(event2);
        this.setState({suggestions: null});
        var newList = []
        for (var i = 0; i<this.state.users.length; i++){
            if(String(this.state.users[i]).includes(value)){
                newList.push(this.state.users[i]);
                }
        }
        this.setState({suggestions: newList});

        
      };



      

     
    renderFormMembers(num) {
        let FormMembers = [];
        for(let i= 1; i < num + 1; i++) {
          FormMembers.push(
              <div>
                <AutoComplete
                    ref = {'member' + String(i)}
                    id={'member' + String(i)}
                    hintText={"Membro " + String(i)}
                    dataSource={this.state.suggestions}
                    onUpdateInput={this.handleUpdateInput}                
                />
                 <br />
              </div>
          );
        }
        return (<div>
            <div>{FormMembers}</div>
        </div>
        );
      };
      

    form(stepIndex){
        switch (stepIndex) {
            case 0:
                return(
                    <div>
                    <br />
                    <TextField
                        hintText="Nome da reunião"
                        value = {this.state.title}
                        onChange = {this.handleTitle}
                        underlineFocusStyle={styles.underlineStyle}
                    /><br />
                    </div>
                );

            case 1:
            return(
                    <div>
                        <Slider
                        min={1}
                        max={10}
                        step={1}
                        value={this.state.meetingDuration}
                        onChange={this.handleSlider2}
                        />
                        <p>
                        <span>{'Duração: '}</span>
                        <span>{this.state.multipleHours?this.state.meetingDuration + " horas": this.state.meetingDuration + " hora"}</span>
                        </p>
                    </div>
                );

            case 2:
                return(
                    <div>
                        <Slider
                        min={2}
                        max={10}
                        step={1}
                        value={this.state.numberOfMembers}
                        onChange={this.handleSlider}
                        />
                        <p>
                        <span>{'Membros: '}</span>
                        <span>{this.state.numberOfMembers}</span>
                        </p>
                    </div>
                );

            case 3:
            return(
                this.renderFormMembers(this.state.numberOfMembers)
            )
            default:
                return null;
    
        }
    }
    


    render() {
        const {finished, stepIndex} = this.state;
        const contentStyle = {margin: '0 16px'};
        return (
        <div style={{width: '100%', maxWidth: 1050, margin: 'auto'}}>
            <Stepper activeStep={stepIndex}>
            <Step>
                <StepLabel>Escolha um nome para sua reunião</StepLabel>
            </Step>
            <Step>
                <StepLabel>Escolha a duração da reunião</StepLabel>
            </Step>
            <Step>
                <StepLabel>Escolha o número de participantes</StepLabel>
            </Step>
            <Step>
                <StepLabel>Escolha quem participará da reunião</StepLabel>
            </Step>
            </Stepper>
            <div style={contentStyle}>
            {finished ? (
                <p>
                    <a
                        href="#"
                        onClick={(event) => {
                        event.preventDefault();
                        this.setState({stepIndex: 0, finished: false});
                        }}
                    >
                        Click here
                    </a> to reset the example.
                </p>
            ) : ( 
                <div>
                    <p>{this.getStepContent(stepIndex)}</p>
                    <p>{this.form(stepIndex)}</p>
                    

                    <div style={{marginTop: 12}}>
                        <FlatButton
                        label="Back"
                        disabled={stepIndex === 0}
                        onClick={this.handlePrev}
                        style={{marginRight: 12}}
                        />
                        <RaisedButton
                        label={stepIndex === 3 ? 'Finish' : 'Next'}
                        primary={true}
                        onClick={this.handleNext}
                        />
                    </div>
                </div>
            )}
            </div>
        </div>
        );    
    }
}

export default GroupForm;
