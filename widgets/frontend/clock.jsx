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
        const month = currentTime.toLocaleString("default", {month: "long"}) 
        const day = currentTime.toString().split(" ")[0]
        return (
            <div id = 'clock'>
                <h1>Clock</h1>
                <section>
                    <h3 className = 'time'>
                        <label>Time: </label>
                        <span>
                            {`${hours}:${minutes}:${seconds}`}
                        </span>
                    </h3>
                    <h3 className = 'time'>
                        <label>Date: </label>
                        <span>
                            {`${day} ${month} ${currentTime.getDate()} ${currentTime.getYear() + 1900}`}
                        </span>
                    </h3>
                </section>
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
