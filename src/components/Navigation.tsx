import * as React from "react";
import NavigationSearch from './NavigationSearch';
import Left from '../images/Left';
import Right from '../images/Right';

class Navigation extends React.Component {
  render() {
    return (
      <div className="head-bar">
        <div className="head-container">
          <div className="head-navigation">
            <div className="nav-button">
              <Left/>
            </div>
            <div className="nav-button disabled">
              <Right/>
            </div>
          </div>
          <span className="head-title">Photos</span>
          <NavigationSearch/>
        </div>
      </div>
    );
  }
}

export default Navigation;
