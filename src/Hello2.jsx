import React, { Component } from "react";

class Hallo2 extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onClick(event) {
    event.preventDefault();
    alert(event.target.innerHTML);
  }
  onSubmit(event) {
    event.preventDefault();
    console.log(this.input.value);
  }
  render() {
    const list = ["1", "2", "3", "4", "5", "6"];
    return (
      <div>
        {list.map(item => {
          return (
            <div key={item} onClick={this.onClick}>
              {item}
            </div>
          );
        })}
        <form onSubmit={this.onSubmit}>
          <input ref={input => (this.input = input)} />
        </form>
      </div>
    );
  }
}
export default Hallo2;
