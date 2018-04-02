import * as React from "react";
import Search from '../images/Search';
import Clear from '../images/Clear';
import Face from '../images/Face';
import Location from '../images/Location';
import Pencil from '../images/Pencil';
import Date from '../images/Date';
import Pin from '../images/Pin';
import DefaultIcon from '../images/Icon';
import { search as searchAction } from '../actions';

interface NavigationProps {
}
interface Location {
  name: string,
  country: string,
  count: number
}
interface User {
  user: string,
  category: string,
  count: number
}
interface NavigationState {
  active: boolean,
  search: string,
  suggestions: {
    locations: Location[],
    users: User[]
  }
}

class Navigation extends React.Component<NavigationProps, NavigationState> {
  state = {
    active: false,
    search: '',
    suggestions: {
      locations: [],
      users: []
    }
  };

  async search(e: any) {
    const search = e.target.value;
    if (search) {
      const suggestions = await searchAction(search);
      this.setState({suggestions, search});
    } else {
      this.clearResults();
    }
  }

  clearResults() {
    this.setState({
      search: '',
      suggestions: {
        locations: [],
        users: []
      }
    })
  }

  render() {
    const { active, suggestions, search } = this.state;

    return (
      <div className="search-bar">
        <div className="search-icon"><Search/></div>
        <input
          className="search"
          onChange={(e) => this.search(e)}
          onFocus={() => this.setState({active: true})}
          onBlur={() => this.setState({active: false})}
        />
        <div className="clear-search"><Clear/></div>
        {active && (
          <div className="search-suggestions">
            {search ?
              <div className="suggestions">
                <ul>
                  {suggestions.locations.map((location: Location, i) => (
                    <li key={'l' + i}>
                      <div className="suggestion">
                        <div className="suggestion-image">
                         <Pin/>
                        </div>
                        <div className="suggestion-info">
                          <div className="title">{location.name}</div>
                          <div className="info">{location.country}</div>
                          <div className="count">{location.count}</div>
                        </div>
                      </div>
                    </li>
                  ))}
                  {suggestions.users.map((user: User, i) => (
                    <li key={'u' + i}>
                      <div className="suggestion">
                        <div className="suggestion-image">
                          <DefaultIcon/>
                        </div>
                        <div className="suggestion-info">
                          <div className="title">{user.user}</div>
                          <div className="info">{user.category}</div>
                          <div className="count">{user.count}</div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div> :
              <div className="empty-hint">
                <div className="hint-title">Search Photos By...</div>
                <ul>
                  <li><Face/><span>Faces</span></li>
                  <li><Location/><span>Location</span></li>
                  <li><Pencil/><span>Albums’s title</span></li>
                  <li><Date/><span>Date</span></li>
                </ul>
              </div>
            }
          </div>
        )}
      </div>
    );
  }
}

export default Navigation;
