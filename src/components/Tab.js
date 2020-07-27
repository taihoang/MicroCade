// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import React from 'react';
import './App.css';
import * as microsoftTeams from "@microsoft/teams-js";

/**
 * The 'GroupTab' component renders the main tab content
 * of your app.
 */
class Tab extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      context: {}
    }
  }

  //React lifecycle method that gets called once a component has finished mounting
  //Learn more: https://reactjs.org/docs/react-component.html#componentdidmount
  componentDidMount(){
    // Get the user context from Teams and set it in the state
    microsoftTeams.getContext((context, error) => {
      this.setState({
        context: context
      });
    });
    // Next steps: Error handling using the error object
  }

  render() {

      let userName = Object.keys(this.state.context).length > 0 ? this.state.context['upn'] : "";

      return (
      <div>
        <h1>ITS OVER {userName}</h1> <h3>TIME TO PLAY TETRIS :-)</h3>
        <div>Tetris</div>
        <div>Drawful</div>
        <div>Uno</div>
        <div></div>
        <iframe src="https://b0d42084287c.ngrok.io/tab" width="540" height="450"></iframe>
      </div>
      );
  }
}
export default Tab;