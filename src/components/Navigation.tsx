import * as React from "react";
import connectWith from '../utils/connectWith';
import NavigationSearch from './NavigationSearch';
import IStoreState from '../store/IStoreState';
import { search } from '../actions';
import Left from '../images/Left';
import Right from '../images/Right';

interface NavigationProps {
  suggestions: IStoreState['suggestions'],
  search: (query: string) => void
}

class Navigation extends React.Component<NavigationProps, {}> {
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
          <NavigationSearch suggestions={this.props.suggestions} onSearch={this.props.search}/>
        </div>
      </div>
    );
  }
}

export default connectWith(
  {
    props: (state: IStoreState) => ({
      suggestions: state.suggestions
    }),
    actions: {
      search
    }
  },
  Navigation
);
