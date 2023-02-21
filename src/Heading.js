import React, { Component } from 'react';

class Heading extends Component {
    render(){
      return <h1> Hello World~ </h1>
    }
  }
   

  class SubHeading extends Component {
    render(){
      return <h1> This is Subheading</h1>
    }
  }

  

  class InputQuery extends Component {
    render(){
      return <h1> This is InputQuery</h1>
    }
  }

  class SubmitButton extends Component {
    render(){
      return <button>This is submit button</button>
    }
  }

// export default function Gallery() {
//     return (
//       <section>
//         <h1>Amazing scientists</h1>
         
//       </section>
//     );
// }
export {
    SubHeading,InputQuery,SubmitButton,
  }
export default Heading;