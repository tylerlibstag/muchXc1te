import React, { useState } from "react";
import { Modal, Form, Col, Row } from "react-bootstrap";
import "./VideoUploadModal.css";
import Axios from "axios";


import {
    PaddedContainer,
    EmailSymbol,
    PasswordSymbol,
    ResponsiveHeader4,
    MutedSpan,
    VerticalCenterWrapper,
    SubmitButton as SubmitButton
} from "./style";


function VideoUploadForm() {
    const [file, setFile] = useState();
    const [screenName, setScreenName] = useState("");
    const [description, setDescription] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [bathrooms, setBathrooms] = useState("");
    const [sqrfeet, setSqrfeet] = useState("");
    const [view, setView] = useState("no");
    const [nearpark, setNearpark] = useState("no");
    const [neartransportation, setNeartransportation] = useState("no");
    const [neargrocery, setNeargrocery] = useState("no");

    const send = event => {
        event.preventDefault();


        const data = new FormData();
        data.append("file", file);
        data.append("screenName", screenName);
        data.append("description", description);
        data.append("address1", address1);
        data.append("address2", address2);
        data.append("city", city);
        data.append("state", state);
        data.append("zip", zip);
        data.append("bedrooms", bedrooms);
        data.append("bathrooms", bathrooms);
        data.append("sqrfeet", sqrfeet);
        data.append("view", view);
        data.append("nearpark", nearpark);
        data.append("neartransportation", neartransportation);
        data.append("neargrocery", neargrocery);




        

        Axios.post("http://localhost:9000/api/videoroute/upload3", data)
            .then(res => console.log(res))
            .catch(err => console.log(err));

    };

    return (
        <div className="vid">
            <header className="vid-header">
                <form action="#">
                    <div className="flex">
                        <label htmlFor="screenName">Screen Name</label>
                        <input
                            type="text"
                            id="screenName"
                            onChange={event => {
                                const { value } = event.target;
                                setScreenName(value);
                            }}
                        />
                    </div>
                    <div className="flex">
                        <label htmlFor="file">File</label>
                        <input
                            type="file"
                            id="file"
                            accept=".mp4"
                            onChange={event => {
                                const file = event.target.files[0];
                                setFile(file);
                            }}
                        />
                    </div>
                    <div className="flex">
                        <label htmlFor="description">Description </label>
                        <input
                            type="textarea"
                            id="description"
                            onChange={event => {
                                const { value } = event.target;
                                setDescription(value);
                            }}
                        />
                    </div>
                </form>
                <button onClick={send}>Send</button>
            </header>
        </div>
    );
}
const VideoUploadModal = props => {
    return (
        <Modal style={{ opacity: 1 }} show={props.show} onHide={() => props.setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Upload a Video
            
                </Modal.Title>

            </Modal.Header>
            <PaddedContainer>
                <ResponsiveHeader4>Fill out the following</ResponsiveHeader4>
                <br />
                <VideoUploadForm />
                <Row style={{ borderBottom: "1px solid #dee2e6" }} />

                <br />
            </PaddedContainer>
        </Modal>
    );
};

export default VideoUploadModal;
