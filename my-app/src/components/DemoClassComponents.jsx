import React from "react";
import { Button } from "react-bootstrap";

const btnStyle = { background: "green" };
export class DemoClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.styles = {
      display: "none",
    };
  }
  increaseCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  componentDidMount(prevProps, prevState) {
    // \
    // };
    if (this.state.count === 10) {
      this.state.count = 0;
      //   btnStyle = {
      //     color: "red",
      //   };
    }
  }

  render() {
    return (
      <Button
        onClick={() => {
          this.increaseCount();
        }}
      >
        Hello {this.state.count}
      </Button>
    );
  }
}
