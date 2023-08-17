import React from "react";

export class Actions extends React.Component {
  render() {
    return (
        <div className="actions">
            <h2>Actions</h2>
          <button onClick={this.props.copyURL}>Copy Full URL</button>
        </div>
    )
  }
}