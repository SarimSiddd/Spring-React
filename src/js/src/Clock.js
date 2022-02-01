import { Component } from "react";

class Clock extends Component{

    constructor(props){
        super(props);
        this.state = {date : new Date()};
    }

    tick(){
        console.log("tick()");
        this.setState({
            date : new Date()
        });
    }

    componentDidMount(){
        
        console.log("????");
        this.TimerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount(){
        console.log("Unmounted");
        clearInterval(this.TimerID)
    }


    render(){

        return(
            <div>
                <h1>The time right now is {this.state.date.toLocaleTimeString()}</h1>
            </div>
        );

    }

}

export default Clock;