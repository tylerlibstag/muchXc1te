import React, { useState } from "react";
import { Modal, Form, Col, Row } from "react-bootstrap";
import "./VideoUploadModal.css";
import instance from "../../utils/axios.js";


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
    const [view, setView] = useState(false);
    const [nearpark, setNearpark] = useState(false);
    const [neartransportation, setNeartransportation] = useState(false);
    const [neargrocery, setNeargrocery] = useState(false);

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




        

        instance.post("api/videoroute/upload3", data)
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
                    <div className="flex">
                        <label htmlFor="address1">Address 1</label>
                        <input
                            type="text"
                            id="address1"
                            onChange={event => {
                                const { value } = event.target;
                                setAddress1(value);
                            }}
                        />
                    </div>
                    <div className="flex">
                        <label htmlFor="address2">Address 2</label>
                        <input
                            type="text"
                            id="address2"
                            onChange={event => {
                                const { value } = event.target;
                                setAddress2(value);
                            }}
                        />
                    </div>
                    <div className="flex">
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            id="city"
                            onChange={event => {
                                const { value } = event.target;
                                setCity(value);
                            }}
                        />
                    </div>
                    <div className="flex">
                        <label htmlFor="state">State</label>
                        <input
                            type="text"
                            id="state"
                            onChange={event => {
                                const { value } = event.target;
                                setState(value);
                            }}
                        />
                    </div>
                    <div className="flex">
                        <label htmlFor="zip">Zip Code</label>
                        <input
                            type="text"
                            id="zip"
                            onChange={event => {
                                const { value } = event.target;
                                setZip(value);
                            }}
                        />
                    </div>
                    <div className="flex">
                        <label htmlFor="bedrooms">Bedrooms</label>
                        <input
                            type="number"
                            id="bedrooms"
                            onChange={event => {
                                const { value } = event.target;
                                setBedrooms(value);
                            }}
                        />
                    </div>
                    <div className="flex">
                        <label htmlFor="bathrooms">Bathrooms</label>
                        <input
                            type="number"
                            id="bathrooms"
                            onChange={event => {
                                const { value } = event.target;
                                setBathrooms(value);
                            }}
                        />
                    </div>
                    <div className="flex">
                        <label htmlFor="sqrfeet">Square Feet</label>
                        <input
                            type="number"
                            id="sqrfeet"
                            onChange={event => {
                                const { value } = event.target;
                                setSqrfeet(value);
                            }}
                        />
                    </div>
                    <div className="flex">
                        <label htmlFor="view">Is there a View?</label>
                        <input
                            type="radio"
                            id={true}
                            name="view"
                            // onChange={event => {
                            //     const { value } = event.target;
                            //     setView(value);
                            // }}
                        />
                        <label htmlFor="true">Yes</label>
                        <br>
                        </br>
                        <input
                            type="radio"
                            id={false}
                            name="view"
                            // onChange={event => {
                            //     const { value } = event.target;
                            //     setView(value);
                            // }}
                        />
                        <label htmlFor="false">No</label>
                        <br>
                        </br>
                    </div>
                    <div className="flex">
                        <label htmlFor="park">Is it near a park?</label>
                        <input
                            type="radio"
                            id={true}
                            name="nearpark"
                            // onChange={event => {
                            //     const { value } = event.target;
                            //     setNearpark(value);
                            // }}
                        />
                        <label htmlFor="true">Yes</label>
                        <br>
                        </br>
                        <input
                            type="radio"
                            id={false}
                            name="nearpark"
                            // onChange={event => {
                            //     const { value } = event.target;
                            //     setNearpark(value);
                            // }}
                        />
                        <label htmlFor="false">No</label>
                        <br>
                        </br>
                    </div>
                    <div className="flex">
                        <label htmlFor="neartransportation">Is it near public transportation?</label>
                        <input
                            type="radio"
                            id={true}
                            name="neartransportation"
                            // onChange={event => {
                            //     const { value } = event.target;
                            //     setNeartransportation(value);
                            // }}
                        />
                        <label htmlFor="true">Yes</label>
                        <br>
                        </br>
                        <input
                            type="radio"
                            id={false}
                            name="neartransportation"
                            // onChange={event => {
                            //     const { value } = event.target;
                            //     setNeartransportation(value);
                            // }}
                        />
                        <label htmlFor="false">No</label>
                        <br>
                        </br>
                    </div>
                    <div className="flex">
                        <label htmlFor="neargrocery">Is there a grocery store nearby?</label>
                        <input
                            type="radio"
                            id={true}
                            name="neargrocery"
                            // onChange={event => {
                            //     const { value } = event.target;
                            //     setNeargrocery(value);
                            // }}
                        />
                        <label htmlFor="true">Yes</label>
                        <br>
                        </br>
                        <input
                            type="radio"
                            id={false}
                            name="neargrocery"
                            // onChange={event => {
                            //     const { value } = event.target;
                            //     setNeargrocery(value);
                            // }}
                        />
                        <label htmlFor="false">No</label>
                        <br>
                        </br>
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
