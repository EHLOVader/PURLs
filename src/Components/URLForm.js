import React from "react";
import PropTypes from "prop-types";


export class URLForm extends React.Component {

    static propTypes= {
      value:      PropTypes.string,
      parseURL:   PropTypes.func,
      handleChange: PropTypes.func
    }

    urlRef = React.createRef();

    static defaultProps = {
        value: ''
    }

    handlePaste = (e) => {
      setTimeout(() => {
        this.props.parseURL(this.urlRef.current.value);
      }, 0)
    }

    handleSubmit = (e) => {
      this.props.parseURL(this.urlRef.current.value);
      e.preventDefault();
      return false;
    }
    render() {


      return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="url">URL</label>
                <input type="text" name="url" id="url" ref={this.urlRef} value={this.props.value} onPaste={this.handlePaste} onChange={this.props.handleChange} />
                <input type="submit" value="Parse"/>
            </form>
        )
    }
}