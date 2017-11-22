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
        title: "Insira o Título aqui",
        members: [],  
        }
    }

    

    handleNext = () => {
        const {stepIndex} = this.state;
        
        this.setState({
          stepIndex: stepIndex + 1,
          finished: stepIndex >= 2,
        });

        if(this.state.stepIndex === 2){
            groupRegister.registerGroup(this.state.title, this.refs.member1.getValue(), this.refs.member2.getValue());
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

    renderFormMembers(num) {
        let FormMembers = [];
        for(let i= 0; i < num; i++) {
          stars.push(
              <div>
                  <TextField
                    ref = {'member1'}
                    hintText="Membro 1"
                    underlineFocusStyle={styles.underlineStyle}
                /><br />
              </div>
            
          );
        }
        return (
          <div>{stars}</div>
        );
      };
      

    form(stepIndex){
        switch (stepIndex) {
            case 0:
                return(
                    <div>
                    <br />
                    <TextField
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
                switch (this.state.numberOfMembers){
                    case 2:
                        return(
                            <div>
                            <br />
                            <TextField
                                ref = "member1"
                                hintText="Membro 1"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            <br />
                            <TextField
                                ref = "member2"
                                hintText="Membro 2"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            </div>
                        );
                    case 3:
                    return(
                            <div>
                            <br />
                            <TextField
                                hintText="Membro 1"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            <br />
                            <TextField
                                hintText="Membro 2"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            <br />
                            <TextField
                                hintText="Membro 3"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            </div>
                        );
                    case 4:
                    return(
                            <div>
                            <br />
                            <TextField
                                hintText="Membro 1"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            <br />
                            <TextField
                                hintText="Membro 2"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            <br />
                            <TextField
                                hintText="Membro 3"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            <br />
                            <TextField
                                hintText="Membro 4"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            </div>
                        );
                    case 5:
                    return(
                            <div>
                            <br />
                            <TextField
                                hintText="Membro 1"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            <br />
                            <TextField
                                hintText="Membro 2"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            <br />
                            <TextField
                                hintText="Membro 3"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            <br />
                            <TextField
                                hintText="Membro 4"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            <br />
                            <TextField
                                hintText="Membro 5"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            </div>
                        );

                    case 6:
                    return(
                            <div>
                            <br />
                            <TextField
                                hintText="Membro 1"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            <br />
                            <TextField
                                hintText="Membro 2"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            <br />
                            <TextField
                                hintText="Membro 3"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            <br />
                            <TextField
                                hintText="Membro 4"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            <br />
                            <TextField
                                hintText="Membro 5"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            <br />
                            <TextField
                                hintText="Membro 6"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            </div>
                        );
                    case 7:
                    return(
                            <div>
                            <br />
                            <TextField
                                hintText="Membro 1"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            <br />
                            <TextField
                                hintText="Membro 2"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            <br />
                            <TextField
                                hintText="Membro 3"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            <br />
                            <TextField
                                hintText="Membro 4"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            <br />
                            <TextField
                                hintText="Membro 5"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            <br />
                            <TextField
                                hintText="Membro 6"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            <br />
                            <TextField
                                hintText="Membro 7"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            </div>
                        );
                    case 8:
                    return(
                            <div>
                            <br />
                            <TextField
                                hintText="Membro 1"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            <br />
                            <TextField
                                hintText="Membro 2"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            <br />
                            <TextField
                                hintText="Membro 3"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            <br />
                            <TextField
                                hintText="Membro 4"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            <br />
                            <TextField
                                hintText="Membro 5"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            <br />
                            <TextField
                                hintText="Membro 6"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            <br />
                            <TextField
                                hintText="Membro 7"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            <br />
                            <TextField
                                hintText="Membro 8"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            </div>
                        );
                    case 9:
                    return(
                            <div>
                            <br />
                            <TextField
                                hintText="Membro 1"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            <br />
                            <TextField
                                hintText="Membro 2"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            <br />
                            <TextField
                                hintText="Membro 3"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            <br />
                            <TextField
                                hintText="Membro 4"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            <br />
                            <TextField
                                hintText="Membro 5"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            <br />
                            <TextField
                                hintText="Membro 6"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            <br />
                            <TextField
                                hintText="Membro 7"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            <br />
                            <TextField
                                hintText="Membro 8"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            <br />
                            <TextField
                                hintText="Membro 9"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            </div>
                        );

                    case 10:
                    return(
                            <div>
                            <br />
                            <TextField
                                hintText="Membro 1"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            <br />
                            <TextField
                                hintText="Membro 2"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            <br />
                            <TextField
                                hintText="Membro 3"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            <br />
                            <TextField
                                hintText="Membro 4"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            <br />
                            <TextField
                                hintText="Membro 5"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            <br />
                            <TextField
                                hintText="Membro 6"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            <br />
                            <TextField
                                hintText="Membro 7"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            <br />
                            <TextField
                                hintText="Membro 8"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            <br />
                            <TextField
                                hintText="Membro 9"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            <br />
                            <TextField
                                hintText="Membro 10"
                                underlineFocusStyle={styles.underlineStyle}
                            /><br />
                            </div>
                        );

                }
                
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
