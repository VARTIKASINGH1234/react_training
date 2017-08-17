import React from 'react';

class Child extends React.Component { 
  render() {
    return (
      <div>
         <ul>
           {this.props.myName.map((item,index) => 
              <li key={index}>{item}</li>
            )}
          </ul>
       </div>
      );
   }
}

export default Child;

