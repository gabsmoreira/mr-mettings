import React, { Component } from 'react';
import './css/materialize.css'
import {
    Step,
    Stepper,
    StepLabel,
  } from 'material-ui/Stepper';
  import RaisedButton from 'material-ui/RaisedButton';
  import FlatButton from 'material-ui/FlatButton';





class GroupForm extends Component {
    constructor(props){
        super(props);
        this.state = {
        finished : false,   
        stepIndex: 0    
        }
    }

    handleNext = () => {
        const {stepIndex} = this.state;
        this.setState({
          stepIndex: stepIndex + 1,
          finished: stepIndex >= 1,
        });
    };
    
      handlePrev = () => {
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
          this.setState({stepIndex: stepIndex - 1});
        }
      };
    
      getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return 'Qual será o tópico discutido?';
            case 1:
                return 'Com quem será discutido?';
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
                <div style={{marginTop: 12}}>
                    <FlatButton
                    label="Back"
                    disabled={stepIndex === 0}
                    onClick={this.handlePrev}
                    style={{marginRight: 12}}
                    />
                    <RaisedButton
                    label={stepIndex === 1 ? 'Finish' : 'Next'}
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
