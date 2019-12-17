import React,{ Component } from "react";
import Header from "./Header"
import './AddSubscriber.css'

class AddSubsriber extends Component{

    constructor()
    {
        super();
        this.state = {
            id : 0,
            name : '',
            phone : ''
        }
    }

    inputChangeHandler = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
        console.log(this.state);
    }

    onFormSubmitted = (e) => {
        e.preventDefault();
        this.props.addSubsriberHandler(this.state);
        this.setState({id: 0, name: '', phone: ''});
    }
    render(){
        const {name, phone} = this.state;
        return(
            <div>
                <Header heading="Add Subscriber"/>
                <div className="component-body-container">
                    <button className="custom-btn">Back</button>
                    <form className="subscriber-form" onSubmit={this.onFormSubmitted.bind(this)}>
                        <label htmlFor="name" className="label-control">Name</label><br/>
                        <input id="name" type="text" name="name" className="input-control" onChange={this.inputChangeHandler}/><br/><br/>
                        <label htmlFor="phone" className="label-control">Phone</label><br/>
                        <input id="phone" type="text" name="phone" className="input-control" onChange={this.inputChangeHandler}/><br/><br/>
                        <div className="subscriber-to-add-heading">
                            <span className="subscriber-to-add-heading">Subscriber to be added: </span><br/>
                            <span className="subscriber-info">Name: {name} </span><br/>
                            <span className="subscriber-info">Phone: {phone} </span>
                        </div>
                        <button type="submit" className="custom-btn add-btn">Add</button>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default AddSubsriber;