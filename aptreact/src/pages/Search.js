import React,{useState, useEffect} from 'react';
import axios from "../utils/axios";
import "../components/Search/Search.css";
import 'bootstrap/dist/css/bootstrap.css';
import FeedNav from "../components/Navs/FeedNav";
import SideNav from "../components/Navs/SideNav";

function Search(props) {
    
    const [userSearch, setSearch] = useState({
        searches: "",
        results: [] 
    });

    var handleTyping = (e) => {
        setSearch({
            ...userSearch, search: e.target.value
        })
    }
    var handleClick = () => {
        axios.get(userSearch.search, function (data) {
            console.log(data)
            setSearch({
                ...userSearch, results: data.data.data
            })
        })
        console.log("yougot clicked")
    }
    useEffect(() => {
      async function fetchPosts() {
        const response = await axios.get("/v2/posts");
        setSearch(response.data);
        return response;
      }
  
      fetchPosts();
    }, []);
    console.log(userSearch);
    
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

            <div>{props.url}</div>
            {/* {userSearch.results.map(function (user) {
                console.log("we hit the map")
                return (
                    
                    <div key={user.url}>
                      
                     <h1>{user.bathrooms}</h1>
                        
                      
                        

                       
                    </div>


                )

            })} */}

          
          </div>
        //Search Bar capabilities:
        // FORM: with preselected NEIGHBORHOOD BUTTONS

        // Show a RESULT FEED HERE ------> still need to decide what and how of components for search feed
        
    )
}

export default Search;