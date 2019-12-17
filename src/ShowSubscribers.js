import React, { Component } from 'react';
import Header from "./Header";
import './ShowSubscribers.css'

class ShowSubscribers extends Component {

  
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
          this.props.subscriberList.map(sub => {
            return <div key={sub.id} className="grid-container">
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
                <button className="custom-btn del">Delete</button>
              </div>
            })
        }
      </div>
    </div> 
    );
  }
}

export default ShowSubscribers;
