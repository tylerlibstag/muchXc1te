import React, { useState } from "react";

import "./VideoUploadModal.css";
import Axios from "axios";
import { ThemeConsumer } from "styled-components";

function VideoUploadModal() {
    const [userName, setUserName] = useState();
    const [file, setFile] = useState();

    const send = event => {
        const data = new FormData();
        data.append("userName", userName);
        data.append("file", file);

        Axios.post("http://localhost:9000/api/videoroute/upload3", data)
            .then(res => console.log(res))
            .catch(err => console.log(err));

    };

    return (
        <div className="vid">
            <header className="vid-header">
                <form action="#">
                    <div className="flex">
                        <label htmlFor="userName">User Name</label>
                        <input
                            type="text"
                            id="userName"
                            onChange={event => {
                                const { value } = event.target;
                                setUserName(value);
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
                </form>
                <button onClick={send}>Send</button>
            </header>
        </div>
    );
}

export default VideoUploadModal;