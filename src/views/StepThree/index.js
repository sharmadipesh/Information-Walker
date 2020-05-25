import React, { Component } from 'react';
import Card from 'utils/Card';
import Routes from 'config/Routes';

class StepThree extends Component {
    render() {
        return (
            <div>
                <Card className="p-30">
                    <div className="d-flex align-items-center justify-content-between">
                        <button type="button" class="btn" onClick={()=>this.props.history.push(Routes.StepTwo)}>Back</button>
                        <button type="button" class="btn">Finish</button>
                    </div>
                </Card>
            </div>
        );
    }
}

export default StepThree;
