import React, { Component } from 'react';

class Finish extends Component {
    render() {
        return (
            <div className="mt-50 mb-20 d-flex flex-column align-items-center justify-content-center">
                <img height="100px" width-="100px" className="mb-20" src="/img/tick.svg" alt="success"/>
                <div className="finish-text">Thanks For your Information</div>
            </div>
        );
    }
}

export default Finish;