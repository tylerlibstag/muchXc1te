import React,{useState, useEffect} from 'react';
import axios from "../utils/axios";
import "../components/Search/Search.css";
import 'bootstrap/dist/css/bootstrap.css';
import FeedNav from "../components/Navs/FeedNav";
import SideNav from "../components/Navs/SideNav";


function Search(props) {
    // handles the user search
    const [userSearch, setSearch] = useState({
        search: "",
        results: [],
        category: ""
        
    });
    //this is to get the state from the third party api
    const [state,setState]=useState([]);
    //this is allows the user to select different states
    const [stateValue,setStateValue]=useState('New York')
    //this is allows the user to select different cities
    const [city,setCity]=useState('New York');
    // this populates the results from the server
    const [populate,setPopulate]=useState([]);
    // this gets the city from the third pary api
    const [cityFromApi,setCityFromApi]=useState([]);
  
 
    // this handles the value that the user types in the search bar
    var handleTyping = (e) => {
        setSearch({
            ...userSearch, search: e.target.value
        })
    }
    // this takes the value of what the user put when they click, then compares it to the data from the database
    var handleClick = () => {
        console.log('we r sedning this to backend', userSearch)
        axios.get(`http://localhost:9000/v2/posts/${userSearch.category}/`+ userSearch.search).then((data) => {
            console.log('dataaaa', data.data)
            setSearch({...userSearch, results: data.data});
        })
       
    }
    // this handles the state change from select
    var handleState = (e) => {
        setStateValue(
             e.target.value
        )
    }
    //this handles the city change from city select
    const handleCity = (e)=>{
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
        const response = await axios.get("/v2/posts");
        setSearch({...userSearch, results: response.data});
        return response;
      }
    // gets state from the third party api
    async function fetchState(){
            let res =await axios.get("https://www.universal-tutorial.com/api/states/United States", {
                headers:{
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJzdXN5anVzdGljZUBnbWFpbC5jb20iLCJhcGlfdG9rZW4iOiJ3U0pKTHdzQlZDNnNkek9Zb2lMTU96bVdJR3cwTDRCV016aVU1VlEtMGo1b3g3SWVvbXljRk1MeVJ0YU5ickRad2swIn0sImV4cCI6MTYwMjg4NzYwNH0.HxguhZdLMKxXUHdDhFM9OSXsYq9j0O--LpyWNDpeEzs",
                "Accept": "application/json"
                }
            });
        

        setState(res.data)
    }
    //this gets the city from the third party api
    async function fetchCityFromApi(state){
        let res =await axios.get(`https://www.universal-tutorial.com/api/cities/${state}`, {
            headers:{
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJzdXN5anVzdGljZUBnbWFpbC5jb20iLCJhcGlfdG9rZW4iOiJ3U0pKTHdzQlZDNnNkek9Zb2lMTU96bVdJR3cwTDRCV016aVU1VlEtMGo1b3g3SWVvbXljRk1MeVJ0YU5ickRad2swIn0sImV4cCI6MTYwMjg4NzYwNH0.HxguhZdLMKxXUHdDhFM9OSXsYq9j0O--LpyWNDpeEzs",
            "Accept": "application/json"
            }
        });
   
    setCityFromApi(res.data);
}

    //this gets the city from the database 
    async function fetchCity(state,city){
        let res = await axios.get(`http://localhost:9000/v5/posts/${state}/${city}`);
        console.log("res",res.data)
        setPopulate(res.data);
    }

    fetchPosts();
    fetchState();
    fetchCityFromApi(stateValue);
    fetchCity(stateValue,city);
    }, [stateValue,city]);
    console.log('tbis is our userstate!!!! ',userSearch);

 

    return (
        <div>
         <div>
            <FeedNav/>
            <div>
                <SideNav/>
            </div>
            <input onChange={handleTyping}/>
            <button onClick={handleClick}>Search</button>
            </div>
            <select id="lang" onChange={handleCategory}>
                  <option value="zipcode">Zipcode</option>
                  <option value="bedrooms">bedrooms</option>
                  <option value="bathrooms">bathrooms</option>    
               </select>
               <div class="form-group mb-2">
               <select onChange={handleState} name="state" id="state" class="form-control" value={stateValue}>
                 {
                     state.map((state)=>(  
                      <option value={state.state_name} key={state.state_name}>{state.state_name}</option>
                     ))
                 } 
                 </select>
               </div>
               <div class="form-group mb-2">
               <select  id="city" class="form-control" onChange={handleCity} value={city}>
                   {
                       cityFromApi.map((city)=>(   
                       <option value={city.city_name} key={city.city_name}>{city.city_name}</option>
                       ))
                   }
               </select>
               </div>

            {/* <div>{props.url}</div> */}
            {/* {userSearch.results.map(function (user, i) {
                return (
                    
                    <div key={i}>
                      
                     <h1>{user._id}</h1>
                     <h1>{user.state}</h1>
                      
                        

                       
                    </div>


                )

            })} */}

          
          <div>
              {
                  populate.map((r)=>(
                  <p key={r._id}>{r._id}</p>
                  ))
              }
          </div>
          </div>
        //Search Bar capabilities:
        // FORM: with preselected NEIGHBORHOOD BUTTONS

        // Show a RESULT FEED HERE ------> still need to decide what and how of components for search feed
        
    )
}

export default Search;