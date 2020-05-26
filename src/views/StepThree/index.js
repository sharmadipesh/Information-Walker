import React, { Component } from 'react';
import Card from 'utils/Card';
import Routes from 'config/Routes';
import ImageUploader from 'react-images-upload';
import {saveUserImage} from 'redux/actions/Steps';
import { connect } from 'react-redux';
import idx from 'idx';

class StepThree extends Component {

    state={
        pictures: [],
        pictureBase64:[]
    }

    componentDidMount = async() =>{
        if(idx(this.props.businessDetails,_=>_.image)){
            let images = [];
            images.push(idx(this.props.businessDetails,_=>_.image));
            await  this.setState({
                pictures:images
            })
        }
    }

    onDrop = (pictureFiles, pictureDataURLs)=> {
        this.setState({
            pictures: pictureFiles,
            pictureBase64:pictureDataURLs
        });
    }

    imageHandler= () => {
        if(this.state.pictures.length===1){
            let data = {
                pictures:this.state.pictures,
                base64:this.state.pictureBase64
            }
            this.props.saveUserImage(data,()=>{
                this.props.history.push(Routes.Finish);
            });
        }else if(this.state.pictures.length>1){
            alert("Select only one image :/");
        }else{
            alert("Select image :/");
        }
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
        businessDetails:state.steps.businessDetails
    };
}

export default connect(
    mapStateToProps,
    {saveUserImage}
)(StepThree);
