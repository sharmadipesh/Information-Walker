import React, { Component } from 'react';
import Card from 'utils/Card';
import Routes from 'config/Routes';
import CSVReader from "react-csv-reader";
import {setBusinessDetails} from 'redux/actions/Steps';
import { connect } from 'react-redux';

class StepOne extends Component {

    handleForce = (data, fileInfo) => {
        console.log(data);
        if(data){
            this.props.setBusinessDetails(data[0],()=>{
                this.props.history.push(Routes.StepTwo);
            });
        }else{
            console.log("Something Went wrong Try again")
        }
    };


    render() {
        const papaparseOptions = {
            header: true,
            dynamicTyping: true,
            skipEmptyLines: true,
            transformHeader: header => header.toLowerCase().replace(/\W/g, "_")
        };
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
                    {/* <button type="button" className="btn">Upload as CSV </button> */}
                    <div>
                        <CSVReader
                            cssClass="file-uploader-container"
                            label=""
                            onFileLoaded={this.handleForce}
                            parserOptions={papaparseOptions}
                        />
                    </div>
                </Card>
            </div>
        );
    }
}

// export default StepOne;
function mapStateToProps(state) {
    return {
    };
}

export default connect(
    mapStateToProps,
    {setBusinessDetails}
)(StepOne);
