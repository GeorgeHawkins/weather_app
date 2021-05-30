import React, { Component } from 'react';
import DownArrow from "./../icons/down-arrow-long.png";
import RedDot from "./../icons/red-dot.png";
import YellowDot from "./../icons/yellow-dot.png";

//reuseable component for the Delayed Routes section
export default class IndividualRoute extends Component {

  findStatus = () => {
    return (this.props.isOut ? RedDot : YellowDot);
  }

  render() {

    return (
      <div className="RoutesRow">
          {/* Icons */}
          <div>
            <img src={this.findStatus()}
            alt="Status"
            className="RouteIcon"
            style={{paddingBottom: "10px"}}/>
            <img src={DownArrow}
            alt="RouteDelayed"
            className="RouteIcon"
            style={{height: "20px", width: "10px"}}/>
          </div>
          {/* Route which has delays */}
          <div className="RoutesText">
            <div className="PrimaryRouteText" data-testid="primaryRoute">{this.props.primaryRoute}</div>
            <div className="LightText" data-testid="secondaryRoute">{this.props.secondaryRoute}</div>
            <div className="LightText" data-testid="additionalRoute">{this.props.additionalRoute}</div>
          </div>

          {/* Details of delay */}
          <div className="RoutesDT">
            <div className="RoutesDistance LightText" data-testid="routesDistance">{this.props.distance} km</div>
            <div className="RoutesTime" data-testid="routesTime"><span className="BoldText">{this.props.time}</span> min</div>
          </div>
        </div>
    )
  }
}
