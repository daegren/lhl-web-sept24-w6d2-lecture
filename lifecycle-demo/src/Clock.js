import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    };

    this.myRef = React.createRef();
    console.log("construcor", this.myRef.current);
  }

  componentDidMount() {
    this.timer = setInterval(this._tick, 1000);
    console.log("componentDidMount", this.myRef.current);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate prev", prevProps, prevState);
    console.log("componentDidUpdate current", this.props, this.state);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <div ref={this.myRef}>{this.state.date.toString()}</div>;
  }

  _tick = () => {
    this.setState({ date: new Date() });
  };
}
