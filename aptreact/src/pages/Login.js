import React, {useState, useEffect} from "react";
import "../components/Login/Login.css";
import 'bootstrap/dist/css/bootstrap.css';
import UserAuthNav from "../components/Navs/UserAuthNav"
import PassportLogin from "../components/Login/PassportLogin";


function Login(props) {

    const [user] = useState({});
    const [error] = useState(null);
    const [authenticated] = useState(false);
    
    // original -- state
    // let state = {
    //     user: {},
    //     error: null,
    //     authenticated: false
    // };

    useEffect(() => {
        fetch("http://localhost:3000/auth/login/success", {
            method: "GET",
            credentials: "include",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true
            }
        })
            .then(response => {
                if (response.status === 200)  window.open("http://localhost:3000/auth/twitter/redirect", "_self");
                throw new Error("failed to authenticate user");
            })
            .then(responseJson => {
                // const [authenticated] = useState(true);
                // const [user] = useState(responseJson.user);

                // original
                // this.setState({
                //     authenticated: true,
                //     user: responseJson.user
                // });
            })
            .catch(error => {
                // const [authenticated] = useState(true);
                // const [error] = useState("Failed to authenticate user");

                //original
                // this.setState({
                //     authenticated: false,
                //     error: "Failed to authenticate user"
                // });
            });
    }, []) //need empty array for transition from componentDidMount

    return (
        // Allows user to sign in to existing profile
        <div>
            <UserAuthNav/>
            <PassportLogin/>
            <div>
                <br /><br />
                <h3>Or Login using Twitter</h3>
                <button onClick={handleLogin}>Login with Twitter</button>
            </div>
        </div>
    )
}

const handleLogin = () => {
    // Authenticate using via passport api in the backend
    // Open Twitter login page
    window.open("http://localhost:3000/auth/twitter/redirect", "_self");
};

// const handNotAuthenticated = () => {
//     const [authenticated] = useState(false);
// }

export default Login;