import React, { Component } from "react";
import axios from "axios";


class VideoUploadModal extends Component {

    // API Endpoints
    custom_file_upload_url = `http://localhost:9000/api/videoroute/upload3`;

    constructor(props) {
        super(props);
        this.state = {
            image_file: null,
            image_preview: "",
        }
    }

    // Image Preview Handler
    handImagePreview = (e) => {
        let image_as_base64 = URL.createObjectURL(e.target.files[0])
        let image_as_files = e.target.files[0];

        this.setState({
            image_preview: image_as_base64,
            image_file: image_as_files,
        })
    }

    //image file submit handler
    handleSubmitFile = () => {
        if (this.state.image_file !== null) {
            let formData = new FormData();
            formData.append('customFile', this.state.image_file);
            // the image field name should be similar to your api endpoihnt field name
            // in my case here the field name is customFile

            axios.post(
                this.custom_file_upload_url,
                formData,
                {
                    headers: {
                        "Content-type": "multipart/form-data",
                    },
                }
            )
                .then(res => {
                    console.log(`Success` + res.data);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    render() {
        return (
            <div>
                <img src={this.state.image_preview} alt="image preview" />
                <input
                    type="file"
                    key="file"
                    name="file"
                    onChange={this.handleImagePreview}
                />
                <label> upload file</label>
                <input type="submit" onClick={this.handleSubmitFile} value="submit" />
            </div>

        )
    }

}
export default VideoUploadModal;