import React from "react";
import "../components/SignUp/SignUp.css";
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from "prop-types";
import UserAuthNav from "../components/Navs/UserAuthNav"
import SignUpHero from "../components/Images/SignUpHero.png"
import TwitterSignUp from "../components/SignUp/TwitterSignUp";
import PassportSignUp from "../components/SignUp/PassportSignUp"
import { Redirect } from "react-router-dom";

class SignUp extends React.Component {
    static propTypes = {
        user: PropTypes.shape({
        name: PropTypes.string,
        profileImageUrl: PropTypes.string,
        twitterId: PropTypes.string,
        screenName: PropTypes.string,
        _id: PropTypes.string
      })
    };
  
    state = {
      user: {},
      error: null,
      authenticated: false
    };
  
    componentDidMount() {
      // Fetch does not send cookies. So you should add credentials: 'include'
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
          if (response.status === 200) return response.json();
          throw new Error("failed to authenticate user");
        })
        .then(responseJson => {
          this.setState({
            authenticated: true,
            user: responseJson.user
          });
        })
        .catch(error => {
          this.setState({
            authenticated: false,
            error: "Failed to authenticate user"
          });
        });
    }
  
    render() {
      const { authenticated } = this.state;
      return (
        <div>
            <UserAuthNav/>
             <div className="container" id="Hero">
                 <div className="row">
                     <div className="col-md-4 my-auto">
                         <h2>We'll help you find your perfect home...</h2>
                         <h3>so you can get back to doing what you love.</h3>
                     </div>
                     <div className="col-md-8 text-center my-auto">
                         <img src={SignUpHero} id="SignUpHero" alt="A skater, a dog walker in heels, and two phone users walking out of a large phone."/>
                     </div>
                 </div>
             </div>
             <div className="container">
               <div className="row">
                 <div className="col-md-8">
                    <PassportSignUp/>
                 </div>
                 <div className="col-md-4">
                    <TwitterSignUp
                    authenticated={authenticated}
                    handleNotAuthenticated={this._handleNotAuthenticated}/>
                 </div>
               </div>
             </div>
            <div>
                {!authenticated ? (
                   <h1></h1>
                ) : (
                  <h1></h1>
                )}
            </div>
        </div>
      );
    }
  
    _handleNotAuthenticated = () => {
      this.setState({ authenticated: false });
    };
  }

  export default SignUp;


// function SignUp() {
//     return (
//         // Allows user to sign in to existing profile
//         <div>
//             <UserAuthNav/>
//             <div className="container" id="Hero">
//                 <div className="row">
//                     <div className="col-md-4 my-auto">
//                         <h2>We'll help you find your perfect home...</h2>
//                         <h3>so you can get back to doing what you love.</h3>
//                     </div>
//                     <div className="col-md-8 text-center my-auto">
//                         <img src={SignUpHero} id="SignUpHero" alt="A skater, a dog walker in heels, and two phone users walking out of a large phone."/>
//                     </div>
//                 </div>
//             </div>
            
//         </div>
//         // To be coded:
//         // FORM for user to fill out NAME, EMAIL, desired USERNAME, desired PASSWORD, CONFIRM PASSWORD, and PROFILE PIC
        
//         // send a call to the users database with all the information they filled out.
//         // Button will send profile to db using POST
//     )
// }

// export default SignUp;