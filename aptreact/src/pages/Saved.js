import React, { useState, useEffect } from 'react';
import "../components/Newsfeed/Newsfeed.css";
import "bootstrap/dist/css/bootstrap.css";
import SideNav from "../components/Navs/SideNav";
import ProfileNav from "../components/Navs/ProfileNav"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../src/index.css";
import Video from "../components/Newsfeed/Video"

import Axios from "axios";

import { Link } from 'react-router-dom';

//Images
import HeaderBackground from "../components/Images/HeaderBackground.png";
import Boroughd from "../components/Images/boroughd.png";

// Login Imports
import { LoginButton } from "../components/Landing/style";


const boroughd = <img src={Boroughd} id="HeaderHero" alt="boroughd" style={{ marginLeft: '20%'}}></img>




// axios.get(`http://localhost:9000/api/addSaved/v1/vid/`,{url: url}).then((data) => {
//     console.log('dataaaa', data.data)
//     setState({});

// })

function Saved() {
    const [state, setState] = useState([]);
    
    useEffect(() => {

        async function fetchVid() {
            const response = await Axios.get(`http://localhost:9000/api/addSaved/v1/vid/`)
            setState(response.data);
            
            console.log("this is a saved video", response.data)
            return response;
    
        }
        fetchVid();
    }, []);
    
    return (
            <Container className="newsfeed" fluid style={{ paddingLeft: 0, paddingRight: 0 }} id="Hero" style={{ backgroundImage: `url(${HeaderBackground})` }}>
                        <div className="row">
                        <div className="col-2">
                            <Link to="/">{boroughd}</Link>
                        </div>
                        <div className="col-8"></div>
                        <div className="col-2">
                            <LoginButton size="lg" > <a href="/">
                                Logout</a>
                            </LoginButton>
                        </div>
                    </div>
                <Row id="topSpacer">
                    <Col xs={2}><SideNav /></Col>
                    <Col xs={7}> <div className="main">
                    <div className="main_videos">
                        {
                            state.map(({ url, _id }) => (
                                
                                <Video key={_id} url={url} />
                            ))
                        }
                    </div>
                </div>

                </Col>
                <Col className="profileCol" xs={3}><ProfileNav /></Col>
            </Row>
        </Container>

        // Take inspiration from TIKTOK
        // Another (right) side component could be added here as well
    );
}

export default Saved;
