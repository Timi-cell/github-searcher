import React, { Component } from 'react';

class  Counter extends Component {
    //state contains any data that a specific component needs
    //the return keyword can only return one element
  state = { 
      count: 1,

  };
  handleIncrement = () => {
     this.setState({ count: this.state.count + 1});
  }

//   renderTags() {
//       if (this.state.tags.length === 0) return <p>There are no tags!</p>;
//       return (
//         <ul>
//           {this.state.tags.map((tag) => (
//             <li key={tag}>{tag}</li>
//           ))}
//         </ul>
//       );
//   }

// constructor() {
//     super();
//     this.handleIncrement = this.handleIncrement.bind(this);
// }

    render() {

        return (
          <div>
              {/* {this.state.tags.length === 0 && 'Please create a new tag!'}
              {this.renderTags()} */}
    <h1 className = {this.getBadgeClasses()}> { this.formatCount()}</h1>
    <button onClick = {this.handleIncrement} className = "btn btn-secondary btn-sm">Increment</button>
         </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {count} = this.state;
         return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;