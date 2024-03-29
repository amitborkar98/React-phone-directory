import React, { Component } from 'react';
import Header from "./Header";
import './ShowSubscribers.css'
import './common/common.css';
import {Link} from 'react-router-dom';

class ShowSubscribers extends Component {

  onDeletedClicked = (subscriberId) => {
    this.props.deleteSubscriberHandler(subscriberId);
  }

  render (){
    return(
    <div  >
      <Header heading="Phone Directory"/>
      <div className="component-body-container">
        <Link to="/add"><button className="custom-btn add-btn">Add</button></Link>
        <div className="grid-container ">
          <span className="grid-item">Name</span>
          <span className="grid-item">Phone</span>
        </div>
        {
          this.props.subscriberList.map(sub => {
            return <div key={sub.id} className="grid-container">
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
                <button className="custom-btn del" onClick={this.onDeletedClicked.bind(this,sub.id)}>Delete</button>
              </div>
            })
        }
      </div>
    </div> 
    );
  }
}

export default ShowSubscribers;
