import React, { Component } from 'react';
import Header from "./Header";
import './App.css'

class App extends Component {

  clickHandler(message){
    alert(message);
  }

  constructor()
  {
    super();
    this.state = {
      subscribersListToShow: []
    }
  }
  render (){
    return(
    <div  >
      <Header heading="Phone Directory"/>
      <div className="component-body-container">
        <button className="custom-btn add-btn">Add</button>
        <div className="grid-container ">
          <span className="grid-item">Name</span>
          <span className="grid-item">Phone</span>
        </div>
        {
          this.state.subscribersListToShow.map(sub => {
            return <div key={sub.id} className="grid-container">
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
                <button className="custom-btn del" onClick={this.clickHandler.bind(this,"Delete Clicked")}>Delete</button>
              </div>
            })
        }
      </div>
    </div> 
    );
  }
}

export default App;
