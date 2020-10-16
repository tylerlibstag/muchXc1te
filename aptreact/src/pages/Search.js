import React,{useState, useEffect} from 'react';
import axios from "../utils/axios";
import "../components/Search/Search.css";
import 'bootstrap/dist/css/bootstrap.css';
import FeedNav from "../components/Navs/FeedNav";
import SideNav from "../components/Navs/SideNav";

function Search(props) {
    
    const [userSearch, setSearch] = useState({
        search: "",
        results: [],
        category: ""
    });

    var handleTyping = (e) => {
        setSearch({
            ...userSearch, search: e.target.value
        })
    }
    var handleClick = () => {
        console.log('we r sedning this to backend', userSearch)
        axios.get(`http://localhost:9000/v2/posts/${userSearch.category}/`+ userSearch.search).then((data) => {
            console.log('dataaaa', data.data)
            setSearch({...userSearch, results: data.data});
        })
       
    }

    var handleCategory = (e) => {
        setSearch({
            ...userSearch, category: e.target.value
        })

    }
    useEffect(() => {
      async function fetchPosts() {
        const response = await axios.get("/v2/posts");
        setSearch({...userSearch, results: response.data});
        return response;
      }
  
      fetchPosts();
    }, []);
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

            <div>{props.url}</div>
            {userSearch.results.map(function (user, i) {
                return (
                    
                    <div key={i}>
                      
                     <h1>{user._id}</h1>
                     <h1>{user.state}</h1>
                      
                        

                       
                    </div>


                )

            })}

          
          </div>
        //Search Bar capabilities:
        // FORM: with preselected NEIGHBORHOOD BUTTONS

        // Show a RESULT FEED HERE ------> still need to decide what and how of components for search feed
        
    )
}

export default Search;