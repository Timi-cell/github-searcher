import React, { Component } from 'react';


class  Counter extends Component {
    //state contains any data that a specific component needs
    //the return keyword can only return one element
  state = { 
      count: 0,

  };
    render() {
        return (
          <div>
 
            <span className = "badge badge-primary m-2">{this.formatCount() }</span>
            <button className = "btn btn-secondary btn-sm">Increment</button>
          </div>
        );
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;