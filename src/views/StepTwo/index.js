import React, { Component } from 'react';
import Card from 'utils/Card';
import Routes from 'config/Routes';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import idx from 'idx';
import {setBusinessDetails,googlePlaceFinder} from 'redux/actions/Steps';
import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
    bathroom: Yup.number()
      .required('Bathroom is required')
      .positive()
      .nullable(),
    bedroom: Yup.number()
      .required('Bedroom is required')
      .positive()
      .nullable(),
    address: Yup.string()
      .required('Address is required')
      .nullable(),
  });

class StepTwo extends Component {

    businessDetailsHandler = (values) => {
        let data ={
            ...values
        };
        if(idx(this.props.businessDetails,_=>_.image)){
            data={
                ...values,
                image:idx(this.props.businessDetails,_=>_.image)
            }
        }
        this.props.setBusinessDetails(data,()=>{
            this.props.history.push(Routes.StepThree);
        });
    }

    componentDidMount = () =>{
        // this.props.googlePlaceFinder();
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
                            <input name="address" value={values.address} onChange={handleChange} type="text" 
                            // className="form-control"  
                            className={`form-control 
                                ${errors.address && touched.address && 'is-invalid'}`}
                            placeholder="Address"/>
                            <div className="invalid-feedback d-block">
                                {errors.address && touched.address && errors.address}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="form-label">Bedroom</label>
                            <input name="bedroom" value={values.bedroom} 
                            // onChange={handleChange} 
                            onChange={async e => {
                                if (e.target.value.length <= 10) {
                                    await handleChange(e);
                                }
                            }}
                            type="number" 
                            className={`form-control 
                                ${errors.bedroom && touched.bedroom && 'is-invalid'}`}
                            placeholder="Bedroom"/>
                            <div className="invalid-feedback d-block">
                                {errors.bedroom && touched.bedroom && errors.bedroom}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-20">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="form-label">Bathroom</label>
                            <input name="bathroom" value={values.bathroom} 
                            // onChange={handleChange} 
                            onChange={async e => {
                                if (e.target.value.length <= 5) {
                                    await handleChange(e);
                                }
                            }}
                            type="number" 
                            className={`form-control 
                                ${errors.bathroom && touched.bathroom && 'is-invalid'}`}
                            placeholder="Bathroom"/>
                            <div className="invalid-feedback d-block">
                                {errors.bathroom && touched.bathroom && errors.bathroom}
                            </div>
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
                        validationSchema={validationSchema}
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
    {setBusinessDetails,googlePlaceFinder}
)(StepTwo);