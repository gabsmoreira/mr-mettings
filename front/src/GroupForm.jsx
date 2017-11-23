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
import {orange500, blue500} from 'material-ui/styles/colors';
import Slider from 'material-ui/Slider';
import groupRegister from './groupRegister'


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
        title: null,
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

    

    handleNext = () => {
        const {stepIndex} = this.state;
        
        this.setState({
          stepIndex: stepIndex + 1,
          finished: stepIndex >= 2,
        });

        if(this.state.stepIndex === 2){
            for(var i = 1; i< this.state.numberOfMembers + 1; i++){
                

            }
            groupRegister.registerGroup(this.state.title,this.state.members, this.state.numberOfMembers);
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

    handleTitle = (event, value) =>{
        this.setState({title: value});
    };

    
    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return 'Qual será o tópico discutido?';
            case 1:
                return 'Quantas pessoas vão participar?';
            case 2:
                return 'Com quem será discutido?';
            default:
                return null;
        }
    };


    

    handleMember = (event) => {
        this.setState({ ...this.state, members: 
          { ...this.state.members,[event.target.id] : event.target.value }}
        )
      }
    

    renderFormMembers(num) {
        let FormMembers = [];
        for(let i= 1; i < num + 1; i++) {
          FormMembers.push(
              <div>
                  <TextField
                    id={'member' + String(i)}
                    hintText={"Membro " + String(i)}
                    underlineFocusStyle={styles.underlineStyle}
                    onChange={this.handleMember}
                    
                /><br />
              </div>
            
          );
        }
        return (
          <div>{FormMembers}</div>
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

            case 2:
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
        <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
            <Stepper activeStep={stepIndex}>
            <Step>
                <StepLabel>Escolha um nome para sua reunião</StepLabel>
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
                        label={stepIndex === 2 ? 'Finish' : 'Next'}
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
