import * as React from "react";
import Search from '../images/Search';
import Clear from '../images/Clear';
import Face from '../images/Face';
import Location from '../images/Location';
import Pencil from '../images/Pencil';
import Date from '../images/Date';
import DefaultIcon from '../images/Icon';
import IStoreState, { ILocation } from "../store/IStoreState";

interface NavigationSearchProps {
  suggestions: IStoreState['suggestions'],
  onSearch: (query: string) => void
}

interface NavigationSearchState {
  active: boolean,
  search: string,
}

class NavigationSearch extends React.Component<NavigationSearchProps, NavigationSearchState> {
  state = {
    active: false,
    search: '',
  };

  async search(e: any) {
    const search = e.target.value || '';
    this.setState({search});
    if (search) {
      this.props.onSearch(search);
    }
  }

  clear() {
    this.setState({
      search: '',
    })
  }

  render() {
    const { active, search } = this.state;
    const suggestions = this.props.suggestions;

    return (
      <div className="search-bar">
        <div className="search-icon"><Search/></div>
        <input
          className="search"
          value={search}
          onChange={(e) => this.search(e)}
          onFocus={() => this.setState({active: true})}
          onBlur={() => this.setState({active: false})}
        />
        <div className="clear-search"><div className="clear-btn" onClick={() => this.clear()}><Clear/></div></div>
        {active && (
          <div className="search-suggestions">
            {search ?
              <div className="suggestions">
                <ul>
                  {suggestions.data.map((location: ILocation, i: number) => (
                    <li key={'l' + i}>
                      <div className="suggestion">
                        <div className="suggestion-image">
                         <DefaultIcon/>
                        </div>
                        <div className="suggestion-info">
                          <div className="title">{location.name}, {location.country_id}</div>
                          <div className="info">Location</div>
                          <div className="count">{location.count}</div>
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

export default NavigationSearch;
