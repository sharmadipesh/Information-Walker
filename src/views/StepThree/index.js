import React, { Component } from 'react';
import Card from 'utils/Card';
import Routes from 'config/Routes';
import ImageUploader from 'react-images-upload';
import {saveUserImage} from 'redux/actions/Steps';
import { connect } from 'react-redux';

class StepThree extends Component {

    state={
        pictures: []
    }

    onDrop = (pictureFiles, pictureDataURLs)=> {
        console.log(pictureFiles);
        this.setState({
            pictures: pictureFiles
        });
    }

    imageHandler= () => {
        this.props.saveUserImage(this.state.pictures,()=>{
            this.props.history.push(Routes.Finish);
        });
    }

    render() {
        return (
            <div>
                <Card className="p-30 mb-30">
                    <div className="mb-30 d-flex align-items-center justify-content-between">
                        <ImageUploader
                            withIcon={true}
                            buttonText='Choose images'
                            onChange={this.onDrop}
                            imgExtension={['.jpg', '.gif', '.png', '.gif']}
                            maxFileSize={5242880}
                            withPreview={true}
                            buttonClassName="btn"
                        />
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <button type="button" className="btn" onClick={()=>this.props.history.push(Routes.StepTwo)}>Back</button>
                        <button 
                            type="button" 
                            className="btn"
                            onClick={this.imageHandler}
                            disabled={!this.state.pictures.length ?true:false}
                        >
                        Finish</button>
                    </div>
                </Card>
            </div>
        );
    }
}

// export default StepThree;
function mapStateToProps(state) {
    return {
    };
}

export default connect(
    mapStateToProps,
    {saveUserImage}
)(StepThree);
