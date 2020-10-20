
import MyContext from './MyContext';

class MyProvider extends Component {
    state = {
        id: ""
    };

    render() {
        return (
            <MyContext.Provider
                value={{
                    id: this.state.id
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        );
    }
}




export default MyProvider









// import React, { Component } from "react";
// const { Provider, Consumer } = React.createContext();

// Note: You could also use hooks to provide state and convert this into a functional component.
//class ThemeContextProvider extends Component {
//   state = {
//     id: ""
//   };

//   toggleTheme = () => {
//     this.setState(prevState => {
//       return {
//         theme: prevState.theme === "Day" ? "Night" : "Day"
//       };
//     });
//   };
  
//   render() {
//     return <Provider value={this.state.id}>{this.props.children}</Provider>;
//   }
// }

// export { ThemeContextProvider, Consumer as ThemeContextConsumer };