import './App.css';
import React from "react";
import {URLForm} from "./Components/URLForm";
import {QueryParams} from "./Components/QueryParams";
import {Actions} from "./Components/Actions";

class App extends React.Component {
  state = {
    url: '',
    base: '',
    params: []
  };

  urlRef = React.createRef();

  parseURL = (url) => {
    try {
      new URL(url);
    } catch (e) {
      console.log(e.message);
      return;
    }
    const URLObject = new URL(url);
    //split the URL into base and params
    const base = URLObject.origin + URLObject.pathname;
    const params = URLObject.searchParams;

    //set the state
    this.setState({base: base});

    //set the params
    const paramsArray = [];
    for (const [key, value] of params.entries()) {
      paramsArray.push({paramKey: key, paramValue: value});
    }
    this.setState({params: paramsArray});

  }

  handleChange = (e) => {
    this.setState({base: e.target.value});
  }

  updateParams = (params) => {
    this.setState({params: params});
  }

  addParameter = () => {
    const params = [...this.state.params];
    params.push({paramKey: '', paramValue: ''});
    this.setState({params: params});
  }

  copyURL = () => {
    const URLObject = new URL(this.state.base);
    const params = this.state.params;
    params.forEach((param) => {
      URLObject.searchParams.set(param.paramKey, param.paramValue);
    });
    const url = URLObject.toString();
    navigator.clipboard.writeText(url);
    //popup message "successfully copied"


  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
    <div className="App">
      <header>
        <h1>PURLS</h1>
        <p>URL Query Parameter Tool</p>
      </header>
      <main>
      <URLForm parseURL={this.parseURL} ref={this.urlRef} value={this.state.base} onChange={this.handleChange} handleChange={this.handleChange}  />
      <QueryParams params={this.state.params} updateParams={this.updateParams} addParameter={this.addParameter} />
      <Actions copyURL={this.copyURL} />
      {/*<CommonPatterns />*/}
      </main>
      <footer>
        <p>Copyright {currentYear}</p>
      </footer>
    </div>
  )
  }
}

export default App;
