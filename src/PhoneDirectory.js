import React ,{Component} from 'react';
import AddSubsriber from './AddSubscriber';
import ShowSubsribers from './ShowSubscribers';

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
                name: 'Alii',
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
           // <AddSubsriber addSubsriberHandler={this.addSubsriberHandler}/>
            < ShowSubsribers subscriberList={this.state.subscriberList} />
           )
    }
}

export default PhoneDirectory;