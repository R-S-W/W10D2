import React from 'react';

class Clock extends React.Component{
    constructor(){
        super();
        this.state = { currentTime: new Date() };
        this.tick = this.tick.bind(this);
    }

    render(){
        const currentTime = this.state.currentTime;
        const [hours, minutes, seconds] = [currentTime.getHours(), currentTime.getMinutes(), currentTime.getSeconds()];
        return (
            <div>
                <h1>Clock</h1>
                <h3>{`${hours}:${minutes}:${seconds}`}</h3>
            </div>
        );
    }

    tick(){
        this.setState({currentTime: new Date()});
    }

    componentDidMount(){
        this.intervalID = setInterval(this.tick, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.intervalID);
    }

}

export default Clock;
