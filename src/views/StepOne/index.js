import React, { Component } from 'react';
import Card from 'utils/Card';
import Routes from 'config/Routes';

class StepOne extends Component {
    render() {
        return (
            <div>
                <Card className="p-30 d-flex align-items-center justify-content-between">
                    <button 
                        type="button" 
                        className="btn"
                        onClick={()=>this.props.history.push(Routes.StepTwo)}
                    >
                        Add from Scratch
                    </button>
                    <button type="button" class="btn">Upload as CSV </button>
                </Card>
            </div>
        );
    }
}

export default StepOne;
