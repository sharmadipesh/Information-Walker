import React, { Component } from 'react';
import Card from 'utils/Card';

class StepOne extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-3" />
                    <div className="col-md-6">
                        <Card className="p-20">
                            Step One
                        </Card>
                    </div>
                    <div className="col-md-3" />
                </div>
            </div>
        );
    }
}

export default StepOne;
