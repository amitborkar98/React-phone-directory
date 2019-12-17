import React ,{Component} from 'react';
import AddSubsriber from './AddSubscriber';
import ShowSubsribers from './ShowSubscribers';
import {BrowserRouter as Router, Route} from 'react-router-dom'

class PhoneDirectory extends Component{
    constructor(){
        super();
        this.state = {
            subscriberList: [{
                id : 1,
                name: 'Amit',
                phone: '999999'
            },
            {
                id : 2,
                name: 'ru',
                phone: '99990099'
            }]
        }
    }
    
    addSubsriberHandler = (newSubscriber) => {
        let subscriberList = this.state.subscriberList;
        if(subscriberList.length > 0){
            newSubscriber.id = subscriberList[subscriberList.length - 1].id + 1;
        }
        else{
            newSubscriber.id = 1;
        }
        subscriberList.push(newSubscriber);
        this.setState({subscriberList: subscriberList})
    }
    render(){
        return(
            <Router>
                <div className="main-container">
                <Route exact path='/' render={(props) => <ShowSubsribers {...props} subscriberList={this.state.subscriberList}/>}/>
                <Route exact path='/add' render={({history}, props) => <AddSubsriber history={history} {...props} addSubsriberHandler={this.addSubsriberHandler}/>}/>
                </div>
            </Router>
           )
    }
}

export default PhoneDirectory;