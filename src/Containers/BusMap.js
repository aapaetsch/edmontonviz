import React, {Component} from 'react';
// import { Button } from "shards-react";
// import ReactDOM from 'react-dom';
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";
import { Icon } from 'antd';
//http://alex3165.github.io/react-mapbox-gl/demos

const Map = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoiYXBhZXRzY2giLCJhIjoiY2p3czk5ZWZyMGNzczRhbzhpdjV1NjM0YyJ9.l5Hitn6UuOWC5DoIEl5KHg'
});

// const requestSettings = {
//     method: 'GET',
//     url: 'https://cors-anywhere.herokuapp.com/https://data.edmonton.ca/download/7qed-k2fc/application%2Foctet-stream',
//     encoding: null,
//     app_token: 'rCmWZj0urjkTW2OGXJeIga9kS',
//     header:'access-control-allow-origin'
// }

// const requestTripSettings = {
//     method: 'GET',
//     url:'https://data.edmonton.ca/resource/ctwr-tvrd.json?$select=trip_id,route_id&$order=route_id ',
//     app_token: 'rCmWZj0urjkTW2OGXJeIga9kS',
//     limit: 5000,
// }

// const gtfsrealtime = require('gtfs-realtime-bindings');
// const request = require('request');

class BusMap extends Component{
    constructor(props){
        super(props);
    }
    state = {
        busData: [],
        geoBuson: {},

    }

    componentWillMount(){
        this.getBusses();

        // setInterval(console.log('tick'), 1000);

    }
    componentDidUpdate(prevProps, nextProps){
        console.log(nextProps);
    }

    componentDidMount(){
    }

    componentWillUnmount(){
        this.setState({busData:[]});
    }

    getBusses(){
        let busses, geoDude = this.props.getContent();

        this.setState({
            busData: busses,
            geoBuson: geoDude,
        });


    }

    contentd = (<Map
                    style="mapbox://styles/apaetsch/cjw2k3na404qn1csfznqo90z7"
                    containerStyle={{ width: '85vw', height: '90vh'}}
                    center={this.props.center}>
                    <div>
                    <Marker coordinates={[-113.5054,53.5372]} anchor="bottom"><Icon type="environment" theme="twoTone" /></Marker>
                    </div>
                </Map>)

    render() {

        return (

            <div>
                <Map
                    style="mapbox://styles/apaetsch/cjw2k3na404qn1csfznqo90z7"
                    containerStyle={{ width: '85vw', height: '90vh'}}
                    center={this.props.center}>
                    <div>
                        {this.state.busData.map((item, index) => {
                            return (<Marker key={index} coordinates={[item.long, item.lat]} anchor="bottom">
                                    <Icon type="environment" theme="twoTone"/> </Marker>)})}
                    </div>
                </Map>
            </div>

        );
        }
    }
export default BusMap;
