import React, { Component } from 'react';
import { connect } from 'react-redux';
import {reduxSetupChecker} from 'redux/actions/Steps';
import { Route, Switch } from 'react-router-dom';
import Routes from 'config/Routes';
import StepOne from 'views/StepOne';
import StepTwo from 'views/StepTwo';
import StepThree from 'views/StepThree';
import Header from 'utils/Header';
import Stepper from 'utils/Stepper';

class MainLayout extends Component {

    componentDidMount = () =>{
        this.props.reduxSetupChecker();
    }

    render() {
        return (
            <div>
                <Header {...this.props}/>
                <div className="main-layout-structure">
                    <div className="row">
                        <div className="col-md-3" />
                        <div className="col-md-6">
                            <Stepper {...this.props}/>
                            <Switch>
                                <Route exact  {...this.props} path={Routes.LandingPage} component={StepOne} />
                                <Route exact  {...this.props} path={Routes.StepTwo} component={StepTwo} />
                                <Route exact  {...this.props} path={Routes.StepThree} component={StepThree} />
                            </Switch>
                        </div>
                        <div className="col-md-3" />
                    </div>
                </div>
            </div>
        );
    }
}

// export default MainLayout;
function mapStateToProps(state) {
	return {};
}

export default connect(
	mapStateToProps,
	{ reduxSetupChecker }
)(MainLayout);