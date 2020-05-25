import React, { Component } from 'react';
import { connect } from 'react-redux';
import {reduxSetupChecker} from 'redux/actions/Steps';
import { Route, Switch } from 'react-router-dom';
import Routes from 'config/Routes';
import StepOne from 'views/StepOne';

class MainLayout extends Component {

    componentDidMount = () =>{
        this.props.reduxSetupChecker();
    }

    render() {
        return (
            <div>
                {/* Main Layout */}
                <Switch>
                    <Route exact  {...this.props} path={Routes.LandingPage} component={StepOne} />
                </Switch>
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