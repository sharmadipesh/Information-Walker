import React, { Component } from 'react';
import { connect } from 'react-redux';
import {reduxSetupChecker} from 'redux/actions/Steps';

class MainLayout extends Component {

    componentDidMount = () =>{
        this.props.reduxSetupChecker();
    }

    render() {
        return (
            <div>
                Main Layout
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