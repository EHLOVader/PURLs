import React from "react";

export class QueryParams extends React.Component {


  handleKeyChange = (e, index) => {
    const params = [...this.props.params];
    const param = params[index];
    const updatedParam = {...param, paramKey: e.target.value};
    console.log(updatedParam);
    this.props.updateParams([...params.map((p, i) => {
      if (i === index) {
        return updatedParam;
      } else {
        return p;
      }
    })])

  }

  handleValueChange = (e, index) => {
    const params = [...this.props.params];
    const param = params[index];
    const updatedParam = {...param, paramValue: e.target.value};
    this.props.updateParams([...params.map((p, i) => {
      if (i === index) {
        return updatedParam;
      } else {
        return p;
      }
    })]);
  }

  render() {
    let separate = "?";

    function separator() {
      let sep = separate;
      separate = "&";
      return sep;
    }
    return (
        <div className="query-params">
            <h2>Query Parameters</h2>
            <ul>
              {this.props.params.map((param, index) => (
                <li key={index}>
                    { console.log(param) }
                    <span className="separator">{separator()}</span>
                    <input type="text" value={param.paramKey} onChange={e => this.handleKeyChange(e, index)}/>
                    <span className="separator"> = </span>
                    <input type="text" value={param.paramValue} onChange={e => this.handleValueChange(e, index)}/>
                </li>
                ))}

               <li><button onClick={this.props.addParameter}>Add Parameter</button></li>
            </ul>
        </div>
    );
  }

}