import React, { Component } from 'react';
import Card from 'utils/Card';
import Routes from 'config/Routes';

class StepTwo extends Component {
    render() {
        return (
            <div>
                <Card className="p-30">
                    <div className="row">
                        <div className="col-md-6">
                            <div class="form-group">
                                <label className="form-label">Address</label>
                                <input type="text" class="form-control"  placeholder="Address"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div class="form-group">
                                <label className="form-label">Bedroom</label>
                                <input type="number" class="form-control"  placeholder="Bedroom"/>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-20">
                        <div className="col-md-6">
                            <div class="form-group">
                                <label className="form-label">Bathroom</label>
                                <input type="number" class="form-control"  placeholder="Bathroom"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div class="form-group">
                                <label className="form-label">Description</label>
                                <input type="text" class="form-control"  placeholder="Description"/>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <button type="button" class="btn" onClick={()=>this.props.history.push(Routes.LandingPage)}>Back</button>
                        <button type="button" class="btn">Save & Next</button>
                    </div>
                </Card>
            </div>
        );
    }
}

export default StepTwo;