import React, { useState, useEffect } from 'react';
import axios from "../utils/axios";
import 'bootstrap/dist/css/bootstrap.css';
import "../components/Search/Search.css";
import SideNav from "../components/Navs/SideNav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfileNav from "../components/Navs/ProfileNav"
import Video from "../components/Newsfeed/Video";
import Footer from "../components/Footer/Footer";
import { LoginButton } from "../components/Landing/style";
import { Link } from 'react-router-dom';

//Images
import HeaderBackground from "../components/Images/HeaderBackground.png";
import Boroughd from "../components/Images/boroughd.png";
const boroughd = <img src={Boroughd} id="HeaderHero" alt="boroughd" style={{ marginLeft: '20%'}}></img>

var vidData = "";
function Search(props) {
    // handles the user search
    const [userSearch, setSearch] = useState({
        search: "",
        results: [],
        category: "",

    });
    //this is to get the state from the third party api
    const [state, setState] = useState([]);
    //this is allows the user to select different states
    const [stateValue, setStateValue] = useState('New York')
    //this is allows the user to select different cities
    const [city, setCity] = useState('New York');
    // this populates the results from the server
    const [populate, setPopulate] = useState([]);
    // this gets the city from the third pary api
    const [cityFromApi, setCityFromApi] = useState([]);
    //filter by "nearpark"
    // const [nearPark, setNearPark] = useState(false);
    // const [view, setView] = useState(false);
    const [nearTransportation, setTransportation] = useState(false);
    // const [nearGrocery, setGrocery] = useState(false);


    var handleCheckBox = () => {
        setTransportation(!nearTransportation)

    }
 

    var handleTyping = (e) => {
        setSearch({
            ...userSearch, search: e.target.value
        })
    }
    // this takes the value of what the user put when they click, then compares it to the data from the database
    var handleClick = () => {
        console.log('we r sedning this to backend', userSearch)
        // axios.get(`http://localhost:9000/api/videoRoute/v2/posts/${userSearch.category}/` + userSearch.search).then((data) => {
        //     console.log('dataaaa', data.data)
        //     setSearch({ ...userSearch, results: data.data });

        // })

        axios.get(`api/videoRoute/v2/posts/${userSearch.category}/` + userSearch.search).then((data) => {
            console.log('dataaaa', data.data)
            setSearch({ ...userSearch, results: data.data });

        })

    }
    // this handles the state change from select
    var handleState = (e) => {
        setStateValue(
            e.target.value
        )
    }
    //this handles the city change from city select
    const handleCity = (e) => {
        setCity(e.target.value)
    }

    //this handles the onchange when the user selects from the categories
    var handleCategory = (e) => {
        setSearch({
            ...userSearch, category: e.target.value
        })

    }

    //this gives access to the v2/post 
    useEffect(() => {

        async function fetchPosts() {
            const response = await axios.get("/api/videoRoute/v2/posts");
            setSearch({ ...userSearch, results: response.data });

            vidData = response.data;
            return response;

        }
        async function fetchBool( nearTransportation) {
            const response = await axios.get(`api/videoRoute/v2/posts/${nearTransportation}/`);
            setSearch({ ...userSearch, results: response.data });
            console.log("view", response);
            
            return response;

        }


        ///${view}/${nearTransportation}/${nearGrocery}


        // gets state from the third party api
        async function fetchState() {
            let res = await axios.get("https://www.universal-tutorial.com/api/states/United States", {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJzdXN5anVzdGljZUBnbWFpbC5jb20iLCJhcGlfdG9rZW4iOiJ3U0pKTHdzQlZDNnNkek9Zb2lMTU96bVdJR3cwTDRCV016aVU1VlEtMGo1b3g3SWVvbXljRk1MeVJ0YU5ickRad2swIn0sImV4cCI6MTYwMzMwODE4NH0.E_y0L32lnEOf_HoxvkpTs-oCUHroII63w-v1VeLdPa4",
                    "Accept": "application/json"
                }
            });


            setState(res.data)
        }
        //this gets the city from the third party api
        async function fetchCityFromApi(state) {
            let res = await axios.get(`https://www.universal-tutorial.com/api/cities/${state}`, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJzdXN5anVzdGljZUBnbWFpbC5jb20iLCJhcGlfdG9rZW4iOiJ3U0pKTHdzQlZDNnNkek9Zb2lMTU96bVdJR3cwTDRCV016aVU1VlEtMGo1b3g3SWVvbXljRk1MeVJ0YU5ickRad2swIn0sImV4cCI6MTYwMzMwODE4NH0.E_y0L32lnEOf_HoxvkpTs-oCUHroII63w-v1VeLdPa4",
                    "Accept": "application/json"
                }
            });

            setCityFromApi(res.data);
        }

        //this gets the city from the database 
        async function fetchCity(state, city) {
            let res = await axios.get(`api/videoRoute/v5/posts/${state}/${city}`);
            console.log("res", res.data)
            setPopulate(res.data);
        }


        // fetchVideos();
        fetchPosts();
        fetchState();
        fetchBool(nearTransportation);
        fetchCityFromApi(stateValue);
        fetchCity(stateValue, city);
    }, [stateValue, city, nearTransportation]);
    console.log('tbis is our userstate!!!! ', userSearch);
    console.log("this has video data", vidData)

    //nearGrocery, view, nearTransportation

    return (
    
        <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }} id="Hero" style={{ backgroundImage: `url(${HeaderBackground})` }}>
        
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
                
                <Col className="mainSearchContainer" xs={7}>
            <div className="cityState">
                <div class="form-group mb-2">
                    <select onChange={handleState} name="state" id="state" class="form-control" value={stateValue}>
                       
                        {
                            state.map((state) => (
                                <option value={state.state_name} key={state.state_name}>{state.state_name}</option>
                            ))
                        }
                    </select>
                </div>
                <div class="form-group mb-2">
                    <select id="city" class="form-control" onChange={handleCity} value={city}>
                        
                        {
                            cityFromApi.map((city) => (
                                <option value={city.city_name} key={city.city_name}>{city.city_name}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
            
            <div className="row">
                <div className="col-2 dropdownRow1">
                    <form className="selectForm">
                        <select id="lang" onChange={handleCategory}>
                            <option value="zipcode">Zip Code</option>
                            <option value="bedrooms">Bedrooms</option>
                            <option value="bathrooms">Bathrooms</option>    
                        </select>
                    </form>
                </div>  
                        <div className="col-4 dropdownRow2">
                            <input onChange={handleTyping}/>
                        </div>  
                        <div className="col-2 dropdownRow3"> 
                            <button onClick={handleClick}>Search</button>
                        </div>     
                    <div className="col-4"></div> 
    
            </div>
                        
                <div className="row">       
                    <div className="checkboxCol">       
                        <label>
                            <input type="checkbox"
                                onChange={handleCheckBox}
                            />
                        Near Transportation
                        </label>

                        <label>
                            <input type="checkbox"
                                onChange={handleCheckBox}
                            />
                        Near Grocery
                        </label>
                    
                        <label>
                            <input type="checkbox"
                                onChange={handleCheckBox}
                            />
                        Has View
                        </label>

                        <label>
                            <input type="checkbox"
                                onChange={handleCheckBox}
                            />
                        Near Park
                        </label>
                        </div>    
                    
                    </div>

                    <div className="main">
                        <div className="main_videos2">

                            {
                                userSearch.results.map(({ url }) => (
                                    <Video url={url} />
                                ))
                            }
                        </div>
                    </div>
                
                </Col>
                <Col className="profileCol2" xs={3}><ProfileNav /></Col>
        
        </Row>
        </Container>
        
        //Search Bar capabilities:
        // FORM: with preselected NEIGHBORHOOD BUTTONS

        // Show a RESULT FEED HERE ------> still need to decide what and how of components for search feed

    )
}

export default Search;