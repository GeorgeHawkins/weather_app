import React, { Component } from 'react';
import DownArrow from "./../icons/down-arrow.png";
import RouteRow from "./IndividualRoute.js";

export default class DelayedRoutes extends Component {
  render() {
    return (
      <div className="DelayedRoutesSection">
        
        <div className="RoutesRow" style={{padding: "10px"}}>
          <div className="RoutesHeaderText">DELAYED ROUTES</div>
          <img src={DownArrow}
          alt="Minimize"
          className="Minimize"/>
        </div>

        <RouteRow isOut={true} 
        primaryRoute="Monash Fwy Out" secondaryRoute="Kings Way" additionalRoute="EastLink" 
        distance={13} time={45}/>

        <RouteRow isOut={true} 
        primaryRoute="Monash Fwy Out" secondaryRoute="Kings Way" additionalRoute="EastLink" 
        distance={15} time={28}/>

        <RouteRow isOut={false} 
        primaryRoute="Western Ring Rd" secondaryRoute="West Gate Fwy" additionalRoute="Western Fwy" 
        distance={5} time={5}/>

        <RouteRow isOut={false} 
        primaryRoute="Eastern Fwy" secondaryRoute="Hoddle St" additionalRoute="Springvale Rd" 
        distance={15} time={25}/>

      </div>
    )
  }
}
