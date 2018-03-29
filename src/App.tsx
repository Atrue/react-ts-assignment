import * as React from "react";

class App extends React.Component {
  async handleTestConnection() {}

  async handleTestLocationConnection() {}

  render() {
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <h1>Examples</h1>
          <button onClick={this.handleTestConnection}>
            Test db connection
          </button>
          {<br />}
          <button onClick={this.handleTestLocationConnection}>
            Test location db connection
          </button>
        </div>
      </div>
    );
  }
}

export default App;
