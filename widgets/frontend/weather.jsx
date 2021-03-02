import React from 'react';

class Weather extends React.Component {
    constructor(){
        super();

    }
    
    render(){
        return (
            <div>W</div>
        )
    }


    componentDidMount(){
        const success = (pos)=>{
            var crd = pos.coords;
            console.log('Your current position is:');
            console.log(`Latitude : ${crd.latitude}`);
            console.log(`Longitude: ${crd.longitude}`);
            console.log(`More or less ${crd.accuracy} meters.`);
            this.latitude= crd.latitude;
            this.longitude = crd.longitude;
        }
        navigator.geolocation.getCurrentPosition(success);
        this.xmlRequest();
    }

    xmlRequest(){
        var request = new XMLHttpRequest();
        request.open('GET', 
            `api.openweathermap.org/data/2.5/weather?lat=${this.latitude}&lon=#${this.longitude }&appid=051c87291414d1e0211fb51a159b4272`,
         true);

        request.onload = function () {
            if (this.status >= 200 && this.status < 400) {
                // Success!
                var resp = this.response;
            } else {
                // We reached our target server, but it returned an error

            }
        };

        request.onerror = function () {
            // There was a connection error of some sort
        };

        request.send();
    }
}

export default Weather;


//051c87291414d1e0211fb51a159b4272
