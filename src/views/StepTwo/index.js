import React, { Component } from 'react';
import Card from 'utils/Card';
import Routes from 'config/Routes';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import idx from 'idx';
import {setBusinessDetails} from 'redux/actions/Steps';
// import * as Yup from 'yup';


// const validationSchema = Yup.object().shape({
    
// });

class StepTwo extends Component {

    businessDetailsHandler = (values) => {
        console.log("businessDetailsHandler ",values);
        this.props.setBusinessDetails(values);
    }

    renderForm = ({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setFieldValue
        }) => (
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="form-label">Address</label>
                            <input name="address" value={values.address} onChange={handleChange} type="text" className="form-control"  placeholder="Address"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="form-label">Bedroom</label>
                            <input name="bedroom" value={values.bedroom} onChange={handleChange} type="number" className="form-control"  placeholder="Bedroom"/>
                        </div>
                    </div>
                </div>
                <div className="row mb-20">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="form-label">Bathroom</label>
                            <input name="bathroom" value={values.bathroom} onChange={handleChange} type="number" className="form-control"  placeholder="Bathroom"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="form-label">Description</label>
                            <input name="description" value={values.description} onChange={handleChange} type="text" className="form-control"  placeholder="Description"/>
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <button type="button" className="btn" onClick={()=>this.props.history.push(Routes.LandingPage)}>Back</button>
                    <button type="submit" className="btn">Save & Next</button>
                </div>
            </form>
        );

    render() {
        return (
            <div>
                <Card className="p-30">
                    <Formik
                        enableReinitialize={true}
                        initialValues={{
                            address: idx(this.props.businessDetails, _ => _.address),
                            bedroom:idx(this.props.businessDetails, _ => _.bedroom),
                            bathroom:idx(this.props.businessDetails, _ => _.bathroom),
                            description:idx(this.props.businessDetails, _ => _.description),
                        }}
                        onSubmit={this.businessDetailsHandler}
                        render={this.renderForm}
                        // validationSchema={validationSchema}
                    />
                </Card>
            </div>
        );
    }
}

// export default StepTwo;
function mapStateToProps(state) {
    return {
        businessDetails:state.steps.businessDetails
    };
}

export default connect(
    mapStateToProps,
    {setBusinessDetails}
)(StepTwo);