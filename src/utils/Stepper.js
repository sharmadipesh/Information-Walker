import React, { Component } from 'react';
import Steps from 'rc-steps';
import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';

class Stepper extends Component {

    state={
        currentStep:1
    }

    stepHandler = () =>{
        const getPath = this.props.location.pathname.split("/");
        const currentStep = getPath[getPath.length-1];
        if(currentStep === ''){
            this.setState({
                currentStep:0
            })
        }else{
            this.setState({
                currentStep:currentStep-1
            })
        }
    }

    componentDidUpdate = (prevProp) =>{
        if(prevProp.location.pathname !== this.props.location.pathname){
            this.stepHandler();
        }
    }


    componentDidMount = () =>{
        this.stepHandler();
    }

    render() {
        return (
            <div className="mb-30">
                <Steps current={this.state.currentStep}>
                    <Steps.Step/>
                    <Steps.Step/>
                    <Steps.Step/>
                </Steps>
            </div>
        );
    }
}

export default Stepper;